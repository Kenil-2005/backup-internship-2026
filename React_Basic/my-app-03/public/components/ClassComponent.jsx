import { Component } from "react";

class Car extends Component {
    constructor(props){
        super(props);
        this.state = {
            color:"red",
            brand:"Ford",
            count:0,
        };
    }

    increment = ()=>{
        this.setState({Count: this.state.count + 1});
    }

    render(){
        return (
            <div>
                <h1>My {this.state.brand}</h1>
                <p>
                    it is a {this.state.color} {this.props.model}.
                </p>
                <button onClick={this.increment}>Increment</button>
            </div>
        )
    }
}

export default Car;