import React, {useState} from 'react'
import accessories from '../assets/accessories.svg'
import dropDown from '../assets/dropDown.svg'
import close from '../assets/close.svg'
import Filters from './Filters'
import FiltersDevice from './FiltersDevice'
import { filterCategories } from '../assets/Data/ListItems'
import { filterCategoriesAccessories } from '../assets/Data/ListItems'

const SideBar = ({filterByBrandHandler, filterByCategoryHandler}) => {

  const [dropMenu, setDropMenu] = useState(false);
   const [drop, setDrop] = useState(false); 
   const [selectedCategory, setSelectedCategory] = useState('');

   const filterBrandHandler = (brand) => {
         filterByBrandHandler(brand)
   }

  return (
    <>
    <section className='hidden md:flex md:flex-col w-[30%]'>
        <div className='mt-32 font-poppins'>
          <h2 className='text-4xl border-b-2 font-bold mb-8 pb-4'>Store</h2>
            <ul className='md:flex flex-col space-y-4 tracking-wide text-lg'>
              {
                filterCategories.map(item => 
                  <li key={item.id} onClick={() => {return setSelectedCategory(item.value), filterByCategoryHandler(item.value)}} className={`${selectedCategory === item.value? 'font-bold text-indigo-500' : ''} cursor-pointer`}><img src={item.img} alt='mobile' className='w-6 h-6 inline-block mr-4 relative -top-1'/>{item.value}</li>
                )
              }
                <div className='cursor-pointer flex' onClick={() => {setDropMenu(!dropMenu)}}><img src={accessories} alt='accessories' className='w-6 h-6 inline-block mr-4'/>Accessories
                <div className='duration-300 place-self-end'><img src={dropDown} className={`h-6 w-6 inline-block ml-2 pb-1 relative ${dropMenu? '' : ' rotate-180'}`}/></div></div>
                <ul className={`${dropMenu? 'flex' : 'hidden'} flex-col gap-3 text-sm ml-4 border-b-2 pb-2 w-[60%] durration-300`}>
                 {
                  filterCategoriesAccessories.map(item => 
                     <li key={item.id} onClick={() => {return setSelectedCategory(item.value), filterByCategoryHandler(item.value)}} className={`${selectedCategory === item.value? 'font-bold text-indigo-500' : ''} cursor-pointer`}>{item.value}</li>
                  )
                 }
                </ul>
            </ul>
        </div>
        <Filters filterBrandHandler={filterBrandHandler}/>
    </section>

    {/* Mobile approach */}
    <section className='md:hidden z-10'>
        <div className='mt-10 font-poppins flex flex-col items-center justify-center'>
                <div className='cursor-pointer flex justify-between items-center border-2 p-2 hover:bg-gray-100 w-[50%]'
                onClick={() =>  setDrop(!drop)}><h3 className='text-lg inline-block'>Phones</h3><img src={dropDown} className='w-6 h-6 inline-block relative pb-1'/></div>
                <div className={`${drop? 'flex' : 'hidden'} flex-col absolute top-8 right-0 left-0 bottom-0 px-6 pt-12 font-bold bg-white md:hidden`}>
                  <h3 className='text-xl text-center'>Categories</h3>
                  <ul className='flex flex-col pt-10 space-y-6 tracking-wide text-lg'>
                  {
                    filterCategories.map(item => 
                       <li key={item.id} onClick={() => filterByCategoryHandler(item.value)} className='cursor-pointer'>{item.value}</li>
                    )
                  }
                  <div className='cursor-pointer flex' onClick={() => {setDropMenu(!dropMenu)}}>Accessories
                  <div className='duration-300 place-self-end'><img src={dropDown} className={`h-6 w-6 inline-block ml-2 pb-1 relative z-1 ${dropMenu? '' : ' rotate-180'}`}/></div></div>
                  <ul className={`${dropMenu? 'flex' : 'hidden'} flex-col gap-3 text-sm ml-4 border-b-2 pb-2 w-[60%] durration-300`}>
                    {
                      filterCategoriesAccessories.map(item => 
                      <li key={item.id} onClick={() => filterByCategoryHandler(item.value)} className='cursor-pointer'>{item.value}</li>
                      )
                    }
                  </ul>
                 </ul>
                </div>
              <div><img src={close} onClick={() => {setDrop(!drop)}} className={`${drop? 'flex' : 'hidden' } absolute h-8 w-8 top-20 left-4 z-1000`}/></div>
        </div>
    </section>
    <FiltersDevice filterBrandHandler={filterBrandHandler}/>
    </>
  )
}

export default SideBar