import React, {useState} from 'react'
import SideBar from './SideBar'
import ItemCards from './ItemCards'


const MainContent = ({categoryHandler}) => {
   const [filterByBrand, setFilterByBrand] = useState('');

      const filterByBrandHandler = (brand) => {
         setFilterByBrand(brand)
   }
   const filterByCategoryHandler = (category) => {
         categoryHandler(category)
   }
   
  return (
    <div className='md:max-w-[80%] m-auto'>
      <div className='md:flex md:justify-center md:gap-4'>
        <SideBar filterByBrandHandler={filterByBrandHandler} filterByCategoryHandler={filterByCategoryHandler}/>
        <ItemCards brand={filterByBrand}/>
      </div>       
    </div>
  )
}

export default MainContent