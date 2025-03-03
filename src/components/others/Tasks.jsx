import React from 'react'
import '../../index.css'

const Tasks = ({data}) => {
   
 

  return (
    <div id='taskList' className='  h-[45%] w-full !mt-10 flex flex-nowrap gap-2 overflow-x-auto'>
      
      {

          data?.tasks?.map((items,key)=>( 
          
          <div className=" flex-none h-[100%] w-[410px] bg-red-400 rounded-4xl overflow-hidden !p-4 ">
            <div className=" text-white flex justify-between items-center  tracking-lighter font-medium border-b-2 !p-2">
                <span className='text-[0.9em] bg-red-900 !p-2'>High !</span>
                <span className='text-[0.9em] !p-2'>{items.task_date}</span>
            </div>
            
            <div className=" !mt-4">
                <span className='text-center text-2xl text-white -tracking-normal '>{items.task_title}</span>
                <p className='text-[1rem] text-white tracking-wider !mt-4 '>{items.task_description}</p>
            </div>
            <div className="flex justify-between absolute w-[380px] bottom-12">
              <button className=' font-semibold !p-2 !mt-5 bg-red-600 text-white cursor-pointer shadow-lg transition-all duration-300 transform hover:scale-105 '>Marked as failed</button>
              <button className='font-semibold !p-2 !mt-5 bg-green-600 text-white cursor-pointer shadow-lg transition-all duration-300 transform hover:scale-105'>Mark as Completed</button>
            </div>
         </div>
        
    ))

      }




     

     
         
     
    </div>
  )
}

export default Tasks



// const data = {
//   "id": 1,  
//   "username": "john_doe",
//   "email": "john.doe@example.com",
//   "password": "123",
//   "tasks": [
//     {
//       "task_title": "Project Report",
//       "task_description": "Prepare the monthly sales report.",
//       "task_date": "2025-03-01",
//       "category": "Reports",
//       "active": true,
//       "new_task": true,
//       "completed": false,
//       "failed": false
//     },
//     {
//       "task_title": "Client Meeting",
//       "task_description": "Discuss project details with the client.",
//       "task_date": "2025-03-05",
//       "category": "Meetings",
//       "active": true,
//       "new_task": false,
//       "completed": true,
//       "failed": false
//     }
//   ],
//   "task_summary": {
//     "completed": 1,
//     "failed": 0,
//     "new": 1,
//     "pending": 1
//   }
// }
