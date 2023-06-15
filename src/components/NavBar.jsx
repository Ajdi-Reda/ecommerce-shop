import React, {useState} from 'react'
import menu from '../assets/menu.svg'
import search from '../assets/search.svg'
import { Link } from 'react-router-dom'

const NavBar = ({queryHandler}) => {

  const [open, setOpen] = useState(false)
  const [openSearch, setOpenSearch] = useState('false');

   const handleSearchInputChange = (e) => {
    const query = e.target.value
    queryHandler(query)
   }

  return (
    // NavBar
    <nav className='relative bg-gradient-to-r from-sky-500 to-indigo-500 mx-auto conatiner px-4 py-4 md:px-8 text-white z-10'>
       <div className={`${openSearch? '' : 'flex'} md:flex justify-between items-center`}>
           <Link to='/'>
             <h2 className={`${openSearch? 'hidden' : ''} md:flex text-xl font-bold md:text-2xl italic`}>Electronet</h2>
           </Link>
           {/* Search */}
           <div className='hidden md:flex'>
            <img src={search} alt='search icon' className='w-8 h-8 p-1 bg-white rounded-l-md'/>
            <input 
            type='text' 
            onChange={handleSearchInputChange}
            placeholder='Search' 
            className=' focus:outline-none text-black rounded-r-md pl-2 w-52'/>
          </div>
           {/* Left nav for Desktop */}
           <ul className='hidden list-none gap-4 font-bold md:flex'>
            <Link to='/'>
              <li className='hover:bg-white hover:text-black py-2 px-4 cursor-pointer rounded-sm duration-500'>Home</li>
            </Link>
            <Link to='aboutUs'>
              <li className='hover:bg-white hover:text-black py-2 px-4 cursor-pointer rounded-sm duration-500'>About us</li>
            </Link>
            <Link to='contact'>
              <li className='hover:bg-white hover:text-black py-2 px-4 cursor-pointer rounded-sm duration-500'>Contact</li>
            </Link>
           </ul>
        
        <div className='flex justify-around items-center gap-3 md: md:hidden'>
         <div className='flex items-center justify-self-center'>
           <input
              type='text'
              onChange={handleSearchInputChange}
              placeholder='Search'
              className={`${openSearch? 'w-full p-1' : 'w-0'} h-6 focus:outline-none text-sm text-black rounded-l-sm duration-150`}/>
            <div onClick={() => setOpenSearch(!openSearch)} className='md:hidden'><img src={search} alt='search icon' className={`${openSearch? 'rounded-r-sm' : 'rounded-sm'} w-6 h-6 p-1 text-xl bg-white`}/></div>
         </div>
                 <div className='md:hidden cursor-pointer justify-self-end' onClick={() => {setOpen(!open)}}>
          <img src={menu} alt='menu icon' className={`${open? 'rotate-90' : ''} duration-500 w-6 h-6 justify-self-end`}/>
          </div>
          <div className={`${open? 'flex' : 'hidden'} absolute bg-gradient-to-r from-sky-500 to-indigo-500 top-14 right-0 left-0 p-6 duration-100`}>
              <ul className=' flex flex-col gap-4 font-bold'>
              <Link to='/'>
                <li  onClick={() => {setOpen(!open)}} className='text-white w-full cursor-pointer'>Home</li>
              </Link>
              <Link to='aboutUs'>
                <li onClick={() => {setOpen(!open)}} className='text-white w-full cursor-pointer'>About us</li>
              </Link>
              <Link to='contact'>
                <li onClick={() => {setOpen(!open)}} className='text-white w-full cursor-pointer'>Contact</li>
              </Link>
              </ul>
          </div>
        </div>
       </div>
    </nav>
  )
}

export default NavBar