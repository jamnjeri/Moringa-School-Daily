import React, { useState } from 'react'
import Control from '../assets/control.png'
import Logo from '../assets/logo.png';
import Book from '../assets/Folder.png'
import Person from '../assets/User.png'
import Home from '../assets/Home.png'
import Logout from '../assets/Logout.png'
import ProfileImage from '../assets/Profile.png'
import Feed from '../components/Feed';
import Articles from '../components/Articles';
import Users from '../components/Users';
import Profile from '../components/Profile';
import Categories from '../components/Categories';

function ModeDashboard ({ user, handleLogout }) {

    const [open, setOpen] = useState(true)
    const [activeDashboard, setActiveDashboard] = useState('feed');

    function handleClick(dashboard){
        setActiveDashboard(dashboard);
    }

    function handleSignout(){
        // Logout
        fetch('http://localhost:3000/logout', {
          method: 'DELETE',
        })
        .then(response => {
          if (response.ok) {
            // handle successful logout
            handleLogout();
            
          } else {
            throw new Error('Logout failed');
          }
        })
        .catch(error => console.error(error));
    }


  return (
    <div className='flex'>
        <div className={`${open ? "w-72" : "w-20"} duration-300 rounded-lg p-5 pt-8 bg-[#101f3c] relative `}>
            <img
                src={Control}
                className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-[#101f3c] ${!open && 'rotate-180'}`}
                onClick={() => setOpen(!open)}
            />
            <div className='flex gap-x-4 items-center'>
                <img 
                    src={Logo} 
                    className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`} 
                />
                <h1 className={`text-white origin-left font-medium text-2xl duration-300 ${!open && "scale-0"}`}>MS Daily Dev</h1>
            </div>
            {/* Sidebar Menu */}
            <ul className='pt-12'>
                <li className={`${activeDashboard === 'feed' ? 'bg-[rgba(255,255,255,0.17)]' : ""} pt-4 pb-4 text-white hover:text-[#F9500D] text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-[rgba(255,255,255,0.17)] rounded-md`} 
                    onClick={() => handleClick('feed')}
                >
                    <img src={Home}/>
                    <span className={`${!open && 'hidden'} origin-left duration-200`}>Feed</span>
                </li>
                <li className={`${activeDashboard === 'articles' ? 'bg-[rgba(255,255,255,0.17)]' : ""} pt-4 pb-4 text-white hover:text-[#F9500D] text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-[rgba(255,255,255,0.17)] rounded-md`} 
                    onClick={() => handleClick('articles')}
                >
                    <img src={Book}/>
                    <span className={`${!open && 'hidden'} origin-left duration-200`}>Articles</span>
                </li>

                <li className={`${activeDashboard === 'categories' ? 'bg-[rgba(255,255,255,0.17)]' : ""} pt-4 pb-4 text-white hover:text-[#F9500D] text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-[rgba(255,255,255,0.17)] rounded-md`} 
                    onClick={() => handleClick('categories')}
                >
                    <img src={Person}/>
                    <span className={`${!open && 'hidden'} origin-left duration-200`}>Categories</span>
                </li>
                
                {/* Logout & Profile */}
                <li className={`${activeDashboard === 'profile' ? 'bg-[rgba(255,255,255,0.17)]' : ""} pt-4 pb-4 text-white hover:text-[#F9500D] text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-[rgba(255,255,255,0.17)] rounded-md`} 
                    onClick={() => handleClick('profile')}
                >
                    <img src={ProfileImage}/>
                    <span className={`${!open && 'hidden'} origin-left duration-200`}>Profile</span>
                </li>

                <li className={`${activeDashboard === 'logout' ? 'bg-[rgba(255,255,255,0.17)]' : ""} pt-4 pb-4 text-white hover:text-[#F9500D] text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-[rgba(255,255,255,0.17)] rounded-md`} 
                    onClick={() => handleSignout()}
                >
                    <img src={Logout}/>
                    <span className={`${!open && 'hidden'} origin-left duration-200`}>Logout</span>
                </li>
               
            </ul>
        </div>
        <div className='p-7 text-2xl flex-1 h-screen'>
            <h1 className='pb-12'>Dashboard</h1>
            {activeDashboard === 'feed' && <Feed />}
            {activeDashboard === 'articles' && <Articles />}
            {activeDashboard === 'users' && <Users />}
            {activeDashboard === 'categories' && <Categories />}
            {activeDashboard === 'profile' && <Profile />}
            
        </div>
    </div>
  )
}

export default ModeDashboard