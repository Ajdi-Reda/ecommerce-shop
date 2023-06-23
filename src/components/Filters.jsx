import React, { useState, useEffect, useContext } from 'react'
import dropDown from '../assets/dropDown.svg'
import { filterMobile, filterLaptop } from '../assets/Data/ListItems';
import { Context } from '../App';

const Filters = ({filterBrandHandler}) => {
      const [drop, setDrop] = useState(false);
      const [filterItems, setFilterItems] = useState([])

      const context = useContext(Context);

          useEffect(() => {
            switch(context.category) {
              case 'Laptops & Imacs':
                setFilterItems(filterLaptop);
                break;
              default:
                setFilterItems(filterMobile)
            }
          }, [context.category])
  return (
    <>
        <section className='flex flex-col'>
            <div>
                <h2 className='text-2xl font-bold my-6'>Filter By</h2>
                <div className='cursor-pointer flex justify-between items-center hover:bg-gray-100 w-[50%]'
                onClick={() => setDrop(!drop)}><h3 className='text-lg inline-block'>Brand</h3><img src={dropDown} className='w-6 h-6 inline-block relative pb-1'/>
                </div>
                <div className={`${drop? 'flex' : 'hidden'} flex-col bg-white`}>
                  <ul className='flex flex-col pt-4 space-y-4 tracking-wide text-md'>
                    {
                        filterItems.map(item => {
                          return  <li key={item.id} onClick={() => filterBrandHandler(item.value)} className='cursor-pointer px-4'>{item.value}</li>
                        })
                    }
                 </ul>
                </div>
            </div>
        </section>
    </>
  )
}

export default Filters