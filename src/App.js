import React, { Component } from 'react';
import './App.css';
import AdderSub from './components/main';


class App extends Component {
  constructor() {
    super();
    this.state = {
      clicks: 0
    };
}


  render() {
    return (
     
   <div className='butn'>
    <AdderSub/>
   
   </div>
   );
  }
}

export default App;
