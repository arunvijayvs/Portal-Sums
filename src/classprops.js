import React, { Component } from "react";

export default class PropsClassComp extends Component{
    render(){
        return(
            <div>
                <h1>I am at {this.props.name}</h1>
            </div>
        )
    }

}

PropsClassComp.defaultProps={
    name:"SKCET"
}