import React from 'react'
import Header from '../others/Header'
import TaskCard from '../others/TaskCard'
import Tasks from '../others/Tasks'

const EmployeeDashboard = ({data,setUser}) => {
  console.log('card',data);
  
  return (
    <div className='h-screen !p-4'>
        <Header setUser={setUser} username={data?.username}/>
        <TaskCard data={data}/>
        <Tasks data={data}/>
    </div>
  )
}

export default EmployeeDashboard