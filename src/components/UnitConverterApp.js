import React, { Component } from 'react'
import convert from 'convert-units'
import '../styles/style.css'

const Header = (props) => (
  <div>
    <header className="App-header">        
      <h1 className="App-title">UNIT CONVERTER</h1>
    </header>   
  </div>
)

const Options = (props) => (
  <div className='select'>
    <span class="arr"></span>
    <select name="length" size="1" onChange={props.convertFromUnitHandler || props.convertToUnitHandler}>             
      {props.units.length.map( x =>  <option key={x} name={x}> {x}</option> )}              
    </select>
  </div>
  
)

const Converter = (props) => (
  <div className='convertContainer'>

          <div className='from'>
            <h5 className>From </h5>
            <form   >
              <input 
                type='number' 
                name='fromTextInput' 
                onChange={props.convertFromHandler}
                defaultValue={1}
                
              /> 
              <Options 
               units={props.units} 
               convertFromUnitHandler={props.convertFromUnitHandler}
               /> 
            </form>       
          </div>

        

          <div className='to'>
            <h5>To </h5>
            <form >
              <input 
                type='number' 
                name='toTextInput' 
                value={props.result} 
                onChange={props.convertToHandler}
              />
              <Options 
                units={props.units} 
                convertToUnitHandler={props.convertToUnitHandler}
              />
            </form>
          </div>

    </div>  
      
)

const Nav = (props) => (
  <div className='navContainer'>
    <div className='nav'>
      <p className='length'>Length</p>
      <p>Mass</p>
      <p>Pressure</p>
      <p>Tempurature</p>
      <p>Speed</p>
    </div>
    
  </div>
)

class UnitConverterApp extends Component {
  state = {
    units : {
      length: ['mm', 'cm', 'm', 'km', 'in', 'ft', 'mi'],
      area: ['mm2', 'cm2', 'm2', 'in2', 'ha', 'km2','ft2','ac', 'ml2'], 
      mass: ['mcg', 'mg', 'g', 'kg', 'oz', 'lb', 'mt', 't'],
      temperature: ['C', 'F', 'K', 'R'],  
    },
    valEntered: 1,
    fromUnitPicked: 'mm',
    toUnitPicked: 'mm',
    valOut: 1
  }

  
  convertFromUnitHandler = (e) => {
    e.preventDefault()
    const u = e.target.value
    console.log('convertFromUnitHandler called', u)
    this.setState( () => ({
      fromUnitPicked: u
    }))
  }
  convertToUnitHandler = (e) => {
    e.preventDefault()
    const u = e.target.value
    console.log('convertToUnitHandler called', u)
    this.setState( () => ({
      toUnitPicked: u
    }))
  }

  convertFromHandler = (e) => {
    e.preventDefault()
    const val = e.target.value
    console.log('convertFromHandler called', val)
    this.setState( () => ({
      valEntered: val
    }))
  }

  convertToHandler = (e) => {
    e.preventDefault()
    const val = e.target.value
    this.setState( () => ({
      valOut: val,
    }))
  }

  
  render() {
    return (
      <div className="App">
      
        <Header />
        <Nav />
        <Converter 
          units={this.state.units}
          convertFromHandler={this.convertFromHandler}
          convertToHandler={this.convertToHandler}
          convertFromUnitHandler={this.convertFromUnitHandler}
          convertToUnitHandler={this.convertToUnitHandler}
          valEntered={this.valEntered}
          result = {
            convert(this.state.valEntered).from(this.state.fromUnitPicked).to(this.state.toUnitPicked)
          }
          result2 = {
            convert(this.state.valOut).from(this.state.fromUnitPicked).to(this.state.toUnitPicked)
          }
        />

      </div>
    )
  }
}

export default UnitConverterApp
