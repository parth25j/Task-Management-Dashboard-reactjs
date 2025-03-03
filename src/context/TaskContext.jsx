
import React from 'react'

const Taskcontext = ({children}) => {
  return (
    <div>{children}</div>
  )
}

export default Taskcontext

const TaskCardDetails = [
    {
        id:0,
        cardTitle:'New Task',
        number:0,
        bgColour:' bg-amber-400'
    },
    {
        id:1,
        cardTitle:'Pending Task',
        number:4,
        bgColour:'bg-orange-500'
    },
    {
        id:2,
        cardTitle:'Failed Task',
        number:5,
        bgColour:'bg-pink-500'
    },
    {
        id:3,
        cardTitle:'Completed Task',
        number:2,
        bgColour:'bg-sky-400'
    }
    

]

export {TaskCardDetails}