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
  <select name="length1" size="1">             
   {props.units.length.map( x =>  <option key={x}> {x}</option> )}              
  </select>
)

const Converter = (props) => (
  <div className='convertContainer'>

          <div className='from'>
            <p>from</p>
            <form onChange={props.convertFromHandler}>
              <input type='text' name='from' />
              <Options units={props.units} /> 
            </form>       
          </div>

          <div className='->'>
            <p> > </p>
           
          </div>

          <div className='to'>
            <p>to</p>
            <form >
              <input type='text' name='to' />
              <Options units={props.units} />
            </form>
          </div>

    </div>  
      
)

class UnitConverterApp extends Component {
  state = {
    units : {
      length : ['mm', 'cm', 'm','in','ft-us', 'ft', 'ml'],
      area: ['mm2', 'cm2', 'm2', 'in2', 'ha', 'km2','ft2','ac', 'ml2'], 
      mass: ['mcg', 'mg', 'g', 'kg', 'oz', 'lb', 'mt', 't'],
      temperature: ['C', 'F', 'K', 'R'],
      
    }
  }

  convertFromHandler = (e) => {
    e.preventDefault()
    const v = e.target.elements.from.value.trim()
    console.log(v)
  }



  render() {
    return (
      <div className="App">
        
        <Header />

        <Converter 
          units={this.state.units}
          convertFromHandler={this.convertFromHandler}
        />
      </div>
    )
  }
}

export default UnitConverterApp
