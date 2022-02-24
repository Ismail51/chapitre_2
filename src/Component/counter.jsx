import React from 'react';
import '../index.css'
export class Count extends React.Component{
    constructor(props){
        super()
    }

render(){
    return(
        <div className="app">
            <h1>Counter</h1>
            <div className="counter">
                <p className="score">{this.props.count}</p>
                <button className='buttonadd' onClick={this.props.addFunction}>+</button>
                <button className='buttonsub' onClick={this.props.substractFunction}>-</button>
            </div>
        </div>    
        )
    }
}
