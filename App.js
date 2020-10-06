import React from 'react';
import logo from './spidy_logo.png';
import './App.css';
 
class App extends React.Component{

  render(){
    return(
      <div>
        <img src={logo} width="100" height='90' className='logo' />
        <h1 className='app-title'>Uttam Darekar</h1>
        <div className="container">
          Add an item...
          <br/>
          <input
            type="text"
            className="input-text"
            placeholder="Write a name"
          />
          <button className = "add-btn"> click me</button>
          <div className='list'>
            <ul>
              <li>
                <input type="checkbox" name="" id=""/>
                Record youtube
                <button className='btn'>delete</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
    
  }
}

export default App;