import React, { Component } from 'react';
import logo from './logo.svg';
import MathComp from './components/MathComp';
// import Links from './Links';
import './App.css';
import math from './components/math.js'
import AccountApp from './components/AccountApp'
import AccountsControllerApp from './components/AccountsControllerApp'


class App extends React.Component {
  constructor(){
    super()
    this.state={
      linden: <div>Press a icon above</div>
    }
  }
  selector(event){
            console.log("Button pressed: ",event);

            switch(event.toLowerCase()) {
              case "flower":
                console.log("run flower");
                this.setState({linden: <App-header/>});
              break;
              case "calculator":
                console.log("run calculator");
                this.setState({linden:<MathComp/>});
              break;
              case "calender":
                console.log("run calender");
              break;
              case "cloud":
                console.log("run cloud");
                this.setState({linden:<AccountsControllerApp/>});
              break;
              case "database":
                console.log("run database");
                this.setState({linden:<AccountApp/>});
              break;
              case "exit":
                console.log("Run Un Mount")
              break;
              default:
            }
  }
  render(){

    return (
            <div className="App">
              <div className="App-row">
                <img alt="" className="logo" src={require('./100sqflogo.jpeg')}/>
                <h1>Luis Apps</h1>   
                 <button  onClick={()=> {this.selector('flower')}}> 
                  <img 
                    className="App-icon" 
                    src={logo} color="black" alt="descripcion del icono"
                  />
                </button><button  onClick={()=> {this.selector('calender')}}> 
                  <img 
                    className="App-icon" 
                    src="https://img.icons8.com/windows/96/0000000/calendar.png" alt="descripcion del icono"
                  />
                </button>
                <button onClick={()=> {this.selector('calculator')}}> 
                  <img 
                    className="App-icon"
                    src="https://img.icons8.com/windows/96/000000/calculator.png" 
                    alt="descripcion del icono"
                  />
                </button>
                <button onClick={()=> {this.selector('cloud')}}> 
                  <img 
                    className="App-icon"
                    src="https://img.icons8.com/windows/96/0000000/cloud.png" 
                    alt="descripcion del icono"
                  />
                </button>
                <button onClick={()=> {this.selector('database')}}> 
                  <img 
                    className="App-icon"
                    src="https://img.icons8.com/windows/96/0000000/database.png" 
                    alt="descripcion del icono"
                  />
                </button>
                </div>
                <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                </header> 

                <div>{this.state.linden}</div>
              
             </div>
    )
  }
}

export default App