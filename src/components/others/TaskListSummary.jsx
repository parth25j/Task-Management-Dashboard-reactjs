import React from 'react'

const TaskListSummary = ({data}) => {
  console.log('test',data)
  return (
    <>
    
   
    
     <div className="!p-2 h-[70px] w-full bg-pink-600 rounded-2xl shrink-0 flex justify-between items-center text-[1.2rem] !mb-4 z-[4]">
    <span className="w-1/5 text-center">{data.username}</span>
    <span className="w-1/5 text-center">{data.task_summary.new}</span>
    <span className="w-1/5 text-center">{data.task_summary.pending}</span>
    <span className="w-1/5 text-center">{data.task_summary.completed}</span>
    <span className="w-1/5 text-center">{data.task_summary.failed}</span>
  </div>
    
    </>
   
    
  )
}

export default TaskListSummary


