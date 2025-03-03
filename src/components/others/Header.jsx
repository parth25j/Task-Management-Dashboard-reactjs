import React from 'react'

const Header = ({username,data,setUser}) => {
  console.log('this is data',data);
  
  const handleLogout = () => {
    // localStorage.removeItem('loggedUser');  
    setUser(null)
    
    
    // window.location.reload();
};
  return (
    <div className='w-full !p-4 text-white bg-zinc-800 shadow-xl shadow-zinc-500/50'>
        <div className="userTag flex justify-between !pr-4 !pl-4">
             <div className=" flex flex-col gap-2">
                <span className='text-2xl'>Hello !</span>
                <span className='text-3xl'>{username}<span className=' !pl-2'>👋</span></span>
             </div>
             <button onClick={handleLogout} className="cursor-pointer bg-amber-500 hover:bg-red-400 text-white w-52 rounded-full text-center tracking-wide font-semibold px-6 py-3 text-2xl shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95">
  Logout
</button>


        </div>
    </div>
  )
}

export default Header