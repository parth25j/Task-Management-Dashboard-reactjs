// import React, { useEffect, useState } from 'react'
// import { createContext } from 'react'
// import { getLocalStorage } from '../utils/LocalStorage'

// export const AuthContext = createContext()

// const AuthProvider = ({children}) => {
//     const [user,setUser] = useState(null)

//      useEffect(()=>{
//        const {employees,admin} = getLocalStorage()
       
//        setUser(employees,admin)
      
//      },[setUser])
  
//   return (
//     <AuthContext.Provider value={user}>
//            <div>{children}</div>
//     </AuthContext.Provider>
    
//   )
// }

// export default AuthProvider



import React, { useEffect, useState, createContext } from 'react';
import { getLocalStorage } from '../utils/LocalStorage';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    // localStorage.clear()
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedData = getLocalStorage();
        
        if (storedData) {
            
            setUser({ employees: storedData.employees, admin: storedData.admin });
        }
    }, []);

    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
