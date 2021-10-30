import React, { Component } from 'react'

export default class States extends Component {
    constructor(props) {
        super(props)
    
        this.States = {
          name:"naveen"  
        }
    }
    
    render() {
       setTimeout(()=>{
        this .setStates({name:"naveen"})
      },3000)
        return (
            <div>
                {this.States.name}
            </div>
        )
    }
}

