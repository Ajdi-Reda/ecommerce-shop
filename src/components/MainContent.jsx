import React from 'react'
import SideBar from './SideBar'
import ItemCards from './ItemCards'


const MainContent = () => {
  return (
    <div className='md:max-w-[80%] m-auto'>
      <div className='md:flex md:justify-center md:gap-4'>
        <SideBar/>
        <ItemCards/>
      </div>       
    </div>
  )
}

export default MainContent