import React from 'react'
import TaskListSummary from './TaskListSummary'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreatedTaskList = () => {
   const data = useContext(AuthContext)
   const employeeData = Array.isArray(data?.employees) ? data.employees : [];
   console.log('emp data',typeof employeeData);
   
   
   
 
  return (
    <>

    
        <div className="h-[30%] !mt-4 w-full bg-zinc-800 rounded-2xl !p-3 border text-white shadow-lg flex flex-col gap-5 ">
      
  <div className="!p-2 h-[70px] w-full bg-green-400 rounded-2xl shrink-0 flex justify-between items-center text-[1.2rem] font-bold">
    <span className="w-1/5 text-center">Employee Name</span>
    <span className="w-1/5 text-center">New Task</span>
    <span className="w-1/5 text-center">Pending Task</span>
    <span className="w-1/5 text-center">Completed</span>
    <span className="w-1/5 text-center">Failed</span>
  </div>
          <div className="overflow-y-auto flex-nowrap !pt-5">

             {
         employeeData.map((ele,key)=>{
          return <TaskListSummary data={ele} key={key}/>
         })
           }
          
          </div>
          
      </div>
   

      
    
    </>
  )
}

export default CreatedTaskList