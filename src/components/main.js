import React, { Component } from 'react';
import Display from './display';
import './main.css';
class AdderSub extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            clicks:0
        }
        
    };
    incrementItem () {
        this.setState({clicks:this.state.clicks+1});
    }
    decrementItem(){
        this.setState({clicks:this.state.clicks-1});
       
    }
    render(){
        return(      
             <div>
                 
                <button className='butn-1' onClick={()=>this.incrementItem()}>Click to increment by 1
                </button>
                <button className='butn-1' onClick={()=>this.decrementItem()}>Click to decrement by 1
                </button>
                 <Display clicks={this.state.clicks}/>
            </div>
        );
    }
}
export default AdderSub;    