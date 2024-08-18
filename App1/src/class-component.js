import {Component} from 'react'

export default class Calendar extends Component{

    getDate(){
        const dateName = ['ar tid','jun','aung karn','puth','pa rue hud','suk','saow']
        const monthName = ['mokkara','goompha','meena','mesa','puesapa','mithuna','gadakgada','singha','ganya','tula','puesajika','tanwa']
        const date = new Date()
        const weekDay =dateName[date.getDay()]
        const day =date.getDate()
        const month = monthName[date.getMonth()]
        const year = date.getFullYear() + 543
        return `wun ${weekDay} ti ${day} ${month} ${year}`
        
        
    }
    render(){
        return <div>{this.getDate()}</div>
    }
}