import React from 'react'
import Andrabank from './Andrabank'
import Corporationbank from './Corporationbank'

export default function Unionbank() {
    let data={
        firstName:"naveen",
        lastName:"natta"
    }
    return (
        <div>
            <Andrabank info={data} />
            <Corporationbank info={data}/>
        </div>
    )
}
