import React from "react";
import "./Counter.css";
class Counter extends React.Component{
    constructor(){
        super();
        this.state ={
            counter:0,
        };
    }
    increment() {
        this.setState((prevState) => {
            return{
                counter:  prevState.counter + 1,
            };
        }
            
        );
    }
    
    render(){

        return(
            <div className ="counterContainer" >
                <div>
                <h2 className="counterValue">{this.state.counter}</h2>
                <button 
                className="counterButton"
                onClick={()=>{
                    console.log("button Clicked");
                    this.increment();
                }}
                >Increment</button>
                </div>
            </div>
        )
    }

}

export default Counter;