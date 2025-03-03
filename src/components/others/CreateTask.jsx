import React, { useState } from 'react';

const CreateTask = () => {
  const [formData, setFormData] = useState([]); 

  const [taskDetails, setTaskDetails] = useState({
    task_title: "",
    task_description: "",
    task_date: "",
    category: "",
    assignedTo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskDetails((prevData) => ({
      ...prevData,
      [name]: value, 
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form has been submitted');

   
    const employees = JSON.parse(localStorage.getItem('employees')) || [];

    
    const updatedEmployees = employees.map((employee) => {
      if (employee.username === taskDetails.assignedTo) {
        if (!employee.tasks) {
          employee.tasks = []; 
        }

        
        employee.tasks.push(taskDetails);

       
        if (!employee.task_summary) {
          employee.task_summary = { completed: 0, failed: 0, new: 0, pending: 0 };
        }

       
        employee.task_summary.new += 1;
      }
      return employee;
    });

    
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));

   
    setFormData([...formData, taskDetails]);

    console.log('Updated Tasks:', formData);

  
    setTaskDetails({
      task_title: "",
      task_description: "",
      task_date: "",
      category: "",
      assignedTo: "",
    });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-900 text-white text-2xl tracking-tight font-medium !p-10 rounded-xl shadow-lg w-full mx-auto border h-full"
      >
        <h2 className="text-4xl font-semibold text-center !mb-6">Create a Task</h2>

        <div className="grid grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="!mb-2 text-2lg font-semibold">Task Title</h3>
              <input
                name="task_title"
                value={taskDetails.task_title}
                onChange={handleChange}
                className="w-full !p-3 text-lg border rounded-lg bg-zinc-800 focus:ring-2 focus:ring-indigo-500 outline-none"
                type="text"
                placeholder="Add your title here"
              />
            </div>

            <div>
              <h3 className="!mb-2 text-2lg font-semibold">Assign To</h3>
              <input
                name="assignedTo"
                value={taskDetails.assignedTo}
                onChange={handleChange}
                className="w-full !p-3 text-lg border rounded-lg bg-zinc-800 focus:ring-2 focus:ring-indigo-500 outline-none"
                type="text"
                placeholder="Enter employee name"
              />
            </div>

            <div>
              <h3 className="!mb-2 text-2lg font-semibold">Category</h3>
              <input
                name="category"
                value={taskDetails.category}
                onChange={handleChange}
                className="w-full !p-3 text-lg border rounded-lg bg-zinc-800 focus:ring-2 focus:ring-indigo-500 outline-none"
                type="text"
                placeholder="Category"
              />
            </div>

            <div>
              <h3 className="!mb-2 text-2lg font-semibold">Date</h3>
              <input
                name="task_date"
                value={taskDetails.task_date}
                onChange={handleChange}
                className="w-full !p-3 text-lg border rounded-lg bg-zinc-800 focus:ring-2 focus:ring-indigo-500 outline-none"
                type="date"
              />
            </div>
          </div>

      
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="!mb-2 text-2lg font-semibold">Add Description</h3>
              <textarea
                name="task_description"
                value={taskDetails.task_description}
                onChange={handleChange}
                className="w-full h-40 !p-3 text-lg border rounded-lg bg-zinc-800 focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
                placeholder="Write task details..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="!mx-auto w-1/2 h-10 bg-indigo-600 cursor-pointer hover:bg-indigo-700 text-white text-xl font-semibold py-3 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              Create Task
            </button>
          </div>
        </div>
      </form>

      
    </>
  );
};

export default CreateTask;
