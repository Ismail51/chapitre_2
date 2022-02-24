import {Count} from './Component/counter' 
import React from 'react'
export default class App extends React.Component{


  constructor(){
    super();
    this.state = {
      count : 0
  }
 }
 decrementCount = ()=>{
   this.setState({
     count: this.state.count-1
   })
  }
  incrementCount = ()=>{
    this.setState({
      count: this.state.count+1
    })
  }
render(){
  return(
    <div>
      <Count count={this.state.count} addFunction={this.incrementCount} substractFunction={this.decrementCount}></Count>
    </div>
  )
}
}