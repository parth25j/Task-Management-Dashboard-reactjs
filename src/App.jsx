import React, { useContext, useEffect, useState } from 'react';
import Login from './components/auth/Login';
import EmployeeDashboard from './components/dashboard/EmployeeDashboard';
import AdminDashboard from './components/dashboard/AdminDashboard';
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage';
import { AuthContext } from './context/AuthProvider';

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const authData = useContext(AuthContext);

 
  useEffect(() => {
    setLocalStorage();
    getLocalStorage();
  }, []);

  
  useEffect(() => {
    const role = JSON.parse(localStorage.getItem('loggedUser'));
    if (role && role.role) {
      setUser(role.role.toLowerCase()); 
    }
  }, []);


  const handleLogin = (emailID, password) => {
    console.log('Logging in:', emailID, password);

    if (!authData) {
      alert('Invalid Credentials');
      return;
    }


    const employeeData = authData?.employees?.find(
      (e) => e.email === emailID && e.password === password
    );

    if (employeeData) {
      setUser('employee');
      localStorage.setItem('loggedUser', JSON.stringify({ role: 'employee' })); // Lowercase "employee"
      setLoggedInUser(employeeData);
      return;
    }

 
    const adminData = authData?.admin?.find(
      (e) => e.email === emailID && e.password === password
    );

    console.log('Admin Data:', adminData);

    if (adminData) {
      setUser('admin');
      localStorage.setItem('loggedUser', JSON.stringify({ role: 'admin' }));
      setLoggedInUser(adminData);
      return;
    }

    alert('Invalid Credentials');
  };

  console.log('Logged-in user:', loggedInUser);

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : null}

      {user === 'admin' ? (
        <AdminDashboard setUser={setUser} data={loggedInUser} />
      ) : user === 'employee' ? (
        <EmployeeDashboard setUser={setUser} data={loggedInUser} />
      ) : null}
    </>
  );
};

export default App;

