import React, {useState} from 'react'
import mobile from '../assets/mobile.svg'
import tablet from '../assets/tablet.svg'
import accessories from '../assets/accessories.svg'
import dropDown from '../assets/dropDown.svg'
import laptop from '../assets/laptop.svg'
import close from '../assets/close.svg'

const SideBar = () => {

  const [dropMenu, setDropMenu] = useState(false);
   const [drop, setDrop] = useState(false); 
   const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <>
    <section className='hidden md:flex w-[30%]'>
        <div className='mt-32 font-poppins'>
          <h2 className='text-4xl border-b-2 font-bold mb-8 pb-4'>Store</h2>
            <ul className='md:flex flex-col space-y-4 tracking-wide text-lg'>
                <li onClick={() => setSelectedCategory('Phones')} className={`${selectedCategory === 'Phones'? 'font-bold text-red-500' : ''} cursor-pointer`}><img src={mobile} alt='mobile' className='w-6 h-6 inline-block mr-4 relative -top-1'/>Phones</li>
                <li onClick={() => setSelectedCategory('Tablets')} className={`${selectedCategory === 'Tablets'? 'font-bold text-red-500' : ''} cursor-pointer`}><img src={tablet} alt='tablet' className='w-6 h-6 inline-block mr-4 relative -top-1'/>Tablets & Devices</li>
                <li onClick={() => setSelectedCategory('Laptops')} className={`${selectedCategory === 'Laptops'? 'font-bold text-red-500' : ''} cursor-pointer`}><img src={laptop} alt='tablet' className='w-6 h-6 inline-block mr-4 relative -top-1'/>Laptops & iMacs</li>
                <li className='cursor-pointer flex' onClick={() => {setDropMenu(!dropMenu)}}><img src={accessories} alt='accessories' className='w-6 h-6 inline-block mr-4'/>Accessories
                <div className='duration-300 place-self-end'><img src={dropDown} className={`h-6 w-6 inline-block ml-2 pb-1 relative ${dropMenu? '' : ' rotate-180'}`}/></div></li>
                <ul className={`${dropMenu? 'flex' : 'hidden'} flex-col gap-3 text-sm ml-4 border-b-2 pb-2 w-[60%] durration-300`}>
                  <li onClick={() => setSelectedCategory('Headphones')} className={`${selectedCategory === 'Headphones'? 'font-bold text-red-400' : ''} cursor-pointer`}>Headphones & Earbuds</li>
                  <li onClick={() => setSelectedCategory('Keyboards')} className={`${selectedCategory === 'Keyboards'? 'font-bold text-red-400' : ''} cursor-pointer`}>Keyboards & Mouses</li>
                  <li onClick={() => setSelectedCategory('Cases')} className={`${selectedCategory === 'Cases'? 'font-bold text-red-400' : ''} cursor-pointer`}>Cases & Covers</li>
                </ul>
            </ul>
        </div>
    </section>

    {/* Mobile approach */}
    <section className='md:hidden'>
        <div className='mt-10 font-poppins flex flex-col items-center justify-center'>
                <div className='cursor-pointer flex justify-between items-center border-2 p-2 hover:bg-gray-100 w-[50%]'
                onClick={() =>  setDrop(!drop)}><h3 className='text-lg inline-block'>Phones</h3><img src={dropDown} className='w-6 h-6 inline-block relative pb-1'/></div>
                <div className={`${drop? 'flex' : 'hidden'} flex-col absolute top-8 right-0 left-0 bottom-0 px-6 pt-12 font-bold bg-white md:hidden`}>
                  <h3 className='text-xl text-center'>Categories</h3>
                  <ul className='flex flex-col pt-10 space-y-6 tracking-wide text-lg'>
                  <li className='cursor-pointer'>Mobile phones</li>
                  <li className='cursor-pointer'>Tablets & Devices</li>
                  <li className='cursor-pointer'>Laptops & iMacs</li>
                  <li className='cursor-pointer flex' onClick={() => {setDropMenu(!dropMenu)}}>Accessories
                  <div className='duration-300 place-self-end'><img src={dropDown} className={`h-6 w-6 inline-block ml-2 pb-1 relative z-1 ${dropMenu? '' : ' rotate-180'}`}/></div></li>
                  <ul className={`${dropMenu? 'flex' : 'hidden'} flex-col gap-3 text-sm ml-4 border-b-2 pb-2 w-[60%] durration-300`}>
                    <li>Headphones & Earbuds</li>
                    <li>Keyboards & Mouses</li>
                    <li>HeadPhones & Earbuds</li>
                    <li>Cases & Covers</li>
                  </ul>
                 </ul>
                </div>
              <div><img src={close} onClick={() => {setDrop(!drop)}} className={`${drop? 'flex' : 'hidden' } absolute h-8 w-8 top-20 left-4 z-1000`}/></div>
        </div>
    </section>
    </>
  )
}

export default SideBar