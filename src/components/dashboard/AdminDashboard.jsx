import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import CreatedTaskList from '../others/CreatedTaskList'

const AdminDashboard = ({data,setUser}) => {
  console.log('data', data)
  return (
    <div className='h-screen !p-4'>
        <Header setUser={setUser} data={data} username={'Admin'}/>
        <div className="w-full !mt-10 h-[55%] ">
          <CreateTask />
        </div>
        <CreatedTaskList />
        
           
    </div>
  )
}

export default AdminDashboard



// task title
// Date
// assign to
// catergory