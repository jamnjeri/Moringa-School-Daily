import React from 'react';
import Logo from '../assets/logo.png';
import Typed from 'react-typed';
import Newsletter from '../assets/newsletter.png';
import { Link } from 'react-router-dom';
import '../index.css';



const LandingPage = () => {

  return (
    <>
      
      <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white '>
      <img src={Logo} alt='logo' className='object-left'/>
    
        <h1 className='w-full text-3xl font-bold text-[#F9500D]'>MORINGA.</h1>
        <ul className='md:flex'>
          <li className='p-4'>Home</li>
          <li className='p-4'>Login</li>
          <li className='p-4'>Register</li>
        </ul>
      </div>

      {/* Hero */}
      <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#F9500D] font-bold p-2'>
        A COMMUNITY OF AMAZING DEVELOPERS
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Grow with other devs.
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Find Articles on 
          </p>
          <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['Frontend', 'Backend', 'DevOps', 'Fullstack', 'UI/UX', 'Data Science', 'Machine Learning', 'Cloud Computing', 'Cyber Security']}
            typeSpeed={100}
            backSpeed={80}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>A place where coders share, stay up-to-date and grow their careers. </p>
        <Link className='bg-[#F9500D] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black' to='signup'>Get Started</Link>
        {/* Redirect button -> change to link -> Signup screen*/}
      </div>
     </div>

    {/* Sample Article */}
      <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
      {/* <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' /> */}
        <div className='flex flex-col justify-center'>
          <p className='text-[#F9500D] font-bold '>DATA ANALYTICS </p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>How To Manage Data Analytics Centrally</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <button className='bg-black text-[#F9500D] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Continue Reading</button>
        </div>
      </div>
     </div>

    {/* Newsletter */}
    <div className='w-full py-16 text-white px-4'>
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
      <div className='lg:col-span-2 my-4'>
        <h1 className='md:text-4xl sm:text-3xl text-2xl font-medium py-2'>
        Want announcements and tech articles updates sent directly to your inbox? </h1>

        <p>Sign up to our newsletter and stay up to date. </p>
        <img src={Newsletter} alt='newsletter' className='w-[4rem]'/>

      </div>
      <div className='my-4'>
        <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
          <input
            className='p-3 flex w-full rounded-md text-black'
            type='email'
            placeholder='Enter Email'
          />
          <button className='bg-[#F9500D] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
            Notify Me
          </button>
        </div>
        <p>
          We care about the protection of your data. Read our{' '}
          <span className='text-[#F9500D]'>Privacy Policy.</span>
        </p>
      </div>
    </div>
    </div>


    </>
  )
}

export default LandingPage;