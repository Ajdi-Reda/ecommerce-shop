import React, {useState, useContext, useEffect} from 'react'
import { filterMobile, filterLaptop } from '../assets/Data/ListItems';
import dropDown from '../assets/dropDown.svg';
import close from '../assets/close.svg'
import { Context } from '../App';



const FiltersDevice = ({filterBrandHandler}) => {
          const [drop, setDrop] = useState(false); 
          const [dropMenu, setDropMenu] = useState(false);
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
         <section className='md:hidden'>
        <div className='mt-5 font-poppins flex flex-col items-center justify-center'>
                <div className='cursor-pointer flex justify-between items-center border-2 p-2 hover:bg-gray-100'
                onClick={() =>  setDrop(!drop)}><h3 className='text-md inline-block'>Filter</h3>
                </div>
                <div className={`${drop? 'flex' : 'hidden'} flex-col absolute top-8 right-0 left-0 bottom-0 px-6 pt-12 font-bold bg-white md:hidden`}>
                  <h3 className='text-xl text-center'>Filter By</h3>
                  
                  <div className='cursor-pointer flex mt-12' onClick={() => {setDropMenu(!dropMenu)}}>Brands
                  <div className='duration-300 place-self-end'><img src={dropDown} className={`h-6 w-6 inline-block ml-2 pb-1 relative z-1 ${dropMenu? '' : ' rotate-180'}`}/></div></div>
                  <ul className={`${dropMenu? 'flex' : 'hidden'} flex-col gap-3 text-sm ml-4 mt-4 border-b-2 pb-2 w-[60%] durration-300`}>
                     {
                        filterItems.map(item => {
                          return  <li key={item.id} onClick={() => filterBrandHandler(item.value)} className='cursor-pointer px-4'>{item.value}</li>
                        })
                    }
                  </ul>
                </div>
              <div><img src={close} onClick={() => {setDrop(!drop)}} className={`${drop? 'flex' : 'hidden' } absolute h-8 w-8 top-20 left-4 z-1000`}/></div>
        </div>
    </section>
    </>
  )
}

export default FiltersDevice