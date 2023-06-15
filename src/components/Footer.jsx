import React from 'react'
import { useLocation } from 'react-router-dom';


const Footer = () => {

   const location = useLocation();
  const currentPath = location.pathname;
 console.log(currentPath)
  return (
    <footer className={`${currentPath === '/aboutUs'? 'mt-0' : 'mt-20'}  bg-gradient-to-r from-sky-500 to-indigo-500 p-4 md:p-8 text-white space-y-4`}>
        <h2 className='text-center text-xl font-bold md:text-2xl md:text-left italic'>Electronet</h2>
        <ul className='flex flex-col space-y-3 items-center justify-center md:flex-row md:justify-start md:space-y-0 md:space-x-4'>
            <li>Home</li>
            <li>Products</li>
            <li>Contact</li>
        </ul>
    </footer>
  )
}

export default Footer