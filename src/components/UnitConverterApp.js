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
  <select name="length" size="1" onChange={props.convertFromUnitHandler || props.convertToUnitHandler}>             
   {props.units.length.map( x =>  <option key={x} name={x}> {x}</option> )}              
  </select>
)

const Converter = (props) => (
  <div className='convertContainer'>

          <div className='from'>
            <p>from </p>
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

          <div className='->'>
            <p> > </p>
           
          </div>

          <div className='to'>
            <p>to </p>
            <form >
              <input type='number' name='toTextInput' value={props.result} />
              <Options 
                units={props.units} 
                convertToUnitHandler={props.convertToUnitHandler}
              />
            </form>
          </div>

    </div>  
      
)

class UnitConverterApp extends Component {
  state = {
    units : {
      length : ['mm', 'cm', 'm','in','ft-us', 'ft', 'mi'],
      area: ['mm2', 'cm2', 'm2', 'in2', 'ha', 'km2','ft2','ac', 'ml2'], 
      mass: ['mcg', 'mg', 'g', 'kg', 'oz', 'lb', 'mt', 't'],
      temperature: ['C', 'F', 'K', 'R'],  
    },
    valEntered: 1,
    fromUnitPicked: 'mm',
    toUnitPicked: 'mm'
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

  
  render() {
    return (
      <div className="App">
      
        <Header />
        <Converter 
          units={this.state.units}
          convertFromHandler={this.convertFromHandler}
          convertFromUnitHandler={this.convertFromUnitHandler}
          convertToUnitHandler={this.convertToUnitHandler}
          result = {
            convert(this.state.valEntered).from(this.state.fromUnitPicked).to(this.state.toUnitPicked)
          }
        />

      </div>
    )
  }
}

export default UnitConverterApp
