import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const submitHandler = (e)=>{
        e.preventDefault()
        // console.log('Form has been submitted',e,e.target.value)
        // console.log( 'the email is ',email)
        // console.log('the password is', password)
        handleLogin(email,password)

    }

    const handleEmail = (e)=>{
         setEmail(e.target.value)
    }
    const handlePassword = (e)=>{
          setPassword(e.target.value)
    }
  return (


    <div className="flex flex-col gap-5 h-screen items-center justify-center ">
        <h2 className='text-white text-[2rem] font-bold'>Login</h2>
  <div className="flex h-[50vh] w-[30vw]  border  rounded-[50px] justify-center items-center bg-[#a45cfc]/90">
    <form onSubmit={submitHandler} className="flex flex-col gap-5  p-4">
      <input value={email} onChange={handleEmail} required type="email" placeholder="Enter Email" className="border !p-2 rounded-3xl text-white outline-none placeholder:text-white" />
      <input value={password} onChange={handlePassword}required type="password" placeholder="Enter Password" className="border !p-2 rounded-3xl text-white outline-none placeholder:text-white" />
      <button className=" !cursor-pointer !mx-auto w-30 bg-[#cd82fa] border-white border-2 font-medium  text-black !p-2 rounded-2xl">Login</button>
    </form>
  </div>
</div>
  )
}

export default Login