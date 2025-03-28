const employees= [
    {
      "id": 1,  
      "username": "john_doe",
      "email": "john.doe@example.com",
      "password": "123",
      "tasks": [
        {
          "task_title": "Project Report",
          "task_description": "Prepare the monthly sales report.",
          "task_date": "2025-03-01",
          "category": "Reports",
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false
        },
        {
          "task_title": "Client Meeting",
          "task_description": "Discuss project details with the client.",
          "task_date": "2025-03-05",
          "category": "Meetings",
          "active": true,
          "new_task": false,
          "completed": true,
          "failed": false
        }
      ],
      "task_summary": {
        "completed": 1,
        "failed": 0,
        "new": 1,
        "pending": 1
      }
    },
    {
      "id": 2,
      "username": "jane_smith",
      "email": "jane.smith@example.com",
      "password": "123",
      "tasks": [
        {
          "task_title": "Team Training",
          "task_description": "Conduct a session on Agile methodologies.",
          "task_date": "2025-03-10",
          "category": "Training",
          "active": true,
          "new_task": false,
          "completed": false,
          "failed": false
        },
        {
          "task_title": "Bug Fixing",
          "task_description": "Resolve issues reported in the latest sprint.",
          "task_date": "2025-03-12",
          "category": "Development",
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false
        },
        {
          "task_title": "Code Review",
          "task_description": "Review pull requests for the latest features.",
          "task_date": "2025-03-14",
          "category": "Code Review",
          "active": true,
          "new_task": false,
          "completed": true,
          "failed": false
        }
      ],
      "task_summary": {
        "completed": 1,
        "failed": 0,
        "new": 1,
        "pending": 2
      }
    },
    {
      "id": 3,
      "username": "mike_johnson",
      "email": "mike.johnson@example.com",
      "password": "123",
      "tasks": [
        {
          "task_title": "Server Maintenance",
          "task_description": "Perform routine maintenance on production servers.",
          "task_date": "2025-03-08",
          "category": "IT Support",
          "active": true,
          "new_task": false,
          "completed": false,
          "failed": true
        }
      ],
      "task_summary": {
        "completed": 0,
        "failed": 1,
        "new": 0,
        "pending": 0
      }
    },
    {
      "id": 4,
      "username": "sara_williams",
      "email": "sara.williams@example.com",
      "password": "123",
      "tasks": [
        {
          "task_title": "Content Writing",
          "task_description": "Write a blog post on latest tech trends.",
          "task_date": "2025-03-20",
          "category": "Content Creation",
          "active": true,
          "new_task": false,
          "completed": false,
          "failed": false
        },
        {
          "task_title": "Marketing Campaign",
          "task_description": "Plan social media ads for product launch.",
          "task_date": "2025-03-25",
          "category": "Marketing",
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false
        }
      ],
      "task_summary": {
        "completed": 0,
        "failed": 0,
        "new": 1,
        "pending": 1
      }
    },
    {
      "id": 5,
      "username": "david_brown",
      "email": "david.brown@example.com",
      "password": "123",
      "tasks": [
        {
          "task_title": "Financial Audit",
          "task_description": "Review and validate the Q1 financial statements.",
          "task_date": "2025-03-18",
          "category": "Finance",
          "active": false,
          "new_task": false,
          "completed": false,
          "failed": false
        },
        {
          "task_title": "Stakeholder Presentation",
          "task_description": "Prepare slides for the annual business review.",
          "task_date": "2025-03-30",
          "category": "Presentation",
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false
        }
      ],
      "task_summary": {
        "completed": 0,
        "failed": 0,
        "new": 1,
        "pending": 1
      }
    }
  ]
  
    


const admin = [ 
    { 
      "id": 100,
      "username": "admin_user",
      "email": "admin@example.com",
      "password": "123",
      "tasks": [
        {
          "task_title": "System Audit",
          "task_description": "Check security protocols and access logs.",
          "task_date": "2025-03-28",
          "category": "Security",
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false
        }
    ]     
    }
   
]
    
export const setLocalStorage = ()=>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))

}

export const getLocalStorage = ()=> {
   const employees = JSON.parse(localStorage.getItem('employees'))
   const admin = JSON.parse(localStorage.getItem('admin'))
 console.log(employees)
 console.log(admin)
 return({employees,admin})
}














//   [ 
//     {
//       "id": 1,
//       "username": "john_doe",
//       "email": "john.doe@example.com",
//       "password": "123",
//       "tasks": [
//         {
//           "task_title": "Project Report",
//           "task_description": "Prepare the monthly sales report.",
//           "task_date": "2025-03-01",
//           "category": "Reports",
//           "active": true,
//           "new_task": true,
//           "completed": false,
//           "failed": false
//         },
//         {
//           "task_title": "Client Meeting",
//           "task_description": "Discuss project details with the client.",
//           "task_date": "2025-03-05",
//           "category": "Meetings",
//           "active": true,
//           "new_task": false,
//           "completed": true,
//           "failed": false
//         }
//       ]
//     },
//     {
//       "id": 2,
//       "username": "jane_smith",
//       "email": "jane.smith@example.com",
//       "password": "123",
//       "tasks": [
//         {
//           "task_title": "Team Training",
//           "task_description": "Conduct a session on Agile methodologies.",
//           "task_date": "2025-03-10",
//           "category": "Training",
//           "active": true,
//           "new_task": false,
//           "completed": false,
//           "failed": false
//         },
//         {
//           "task_title": "Bug Fixing",
//           "task_description": "Resolve issues reported in the latest sprint.",
//           "task_date": "2025-03-12",
//           "category": "Development",
//           "active": true,
//           "new_task": true,
//           "completed": false,
//           "failed": false
//         },
//         {
//           "task_title": "Code Review",
//           "task_description": "Review pull requests for the latest features.",
//           "task_date": "2025-03-14",
//           "category": "Code Review",
//           "active": true,
//           "new_task": false,
//           "completed": true,
//           "failed": false
//         }
//       ]
//     },
//     {
//       "id": 3,
//       "username": "mike_johnson",
//       "email": "mike.johnson@example.com",
//       "password": "123",
//       "tasks": [
//         {
//           "task_title": "Server Maintenance",
//           "task_description": "Perform routine maintenance on production servers.",
//           "task_date": "2025-03-08",
//           "category": "IT Support",
//           "active": true,
//           "new_task": false,
//           "completed": false,
//           "failed": true
//         }
//       ]
//     },
//     {
//       "id": 4,
//       "username": "sara_williams",
//       "email": "sara.williams@example.com",
//       "password": "123",
//       "tasks": [
//         {
//           "task_title": "Content Writing",
//           "task_description": "Write a blog post on latest tech trends.",
//           "task_date": "2025-03-20",
//           "category": "Content Creation",
//           "active": true,
//           "new_task": false,
//           "completed": false,
//           "failed": false
//         },
//         {
//           "task_title": "Marketing Campaign",
//           "task_description": "Plan social media ads for product launch.",
//           "task_date": "2025-03-25",
//           "category": "Marketing",
//           "active": true,
//           "new_task": true,
//           "completed": false,
//           "failed": false
//         }
//       ]
//     },
//     {
//       "id": 5,
//       "username": "david_brown",
//       "email": "david.brown@example.com",
//       "password": "123",
//       "tasks": [
//         {
//           "task_title": "Financial Audit",
//           "task_description": "Review and validate the Q1 financial statements.",
//           "task_date": "2025-03-18",
//           "category": "Finance",
//           "active": false,
//           "new_task": false,
//           "completed": false,
//           "failed": false
//         },
//         {
//           "task_title": "Stakeholder Presentation",
//           "task_description": "Prepare slides for the annual business review.",
//           "task_date": "2025-03-30",
//           "category": "Presentation",
//           "active": true,
//           "new_task": true,
//           "completed": false,
//           "failed": false
//         }
//       ]
//     }
//   ]