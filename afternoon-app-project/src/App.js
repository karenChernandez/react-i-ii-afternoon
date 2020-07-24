import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from '../src/data';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Header from './Components/Header';
import './App.css';
class App extends Component{
  constructor(){
    super();

    this.state={
      data:data,
      i:0
    }
  }

handlePrevious=()=>{
if(this.state.i === 0){
  let newIndex=this.state.data.length -1
  this.setState({i:newIndex})
}else{this.setState({i:this.state.i -1})}

}
handleNext=()=>{
if(this.state.i === this.state.data.length -1){
this.setState({i:0})
}else{
  this.setState({i:this.state.i +1})

}
}


  render(){
    let mappedData=this.state.data.map(item=>{
      return<Body key={item.id} item={item}/>
    })


  return (
    <div className="App" >
      <Header/>
      
      {mappedData[this.state.i]}
      <Footer previous={this.handlePrevious} next={this.handleNext}/>
      
    </div>
  );
}
}

export default App;
