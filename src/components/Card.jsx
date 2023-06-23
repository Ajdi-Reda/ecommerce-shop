import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ name, price, image, stock, isAccessories }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden w-60 md:w-52 hover:scale-110 duration-150">
      <div className="flex flex-col h-full">
        <div className="self-center">
          <img className="object-cover w-32 h-32" src={image} alt="Device Image" />
        </div>
        <div className="flex flex-col justify-between p-6">
          <div>
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold h-6 overflow-hidden">{name}</div> {/* Added h-12 and overflow-hidden classes */}
            <div className="mt-3 text-gray-700 font-bold">Price: {price} MAD</div>
            {stock? <div className='text-xs mt-2'><span className='font-bold text-md'>{stock}</span> items in stock</div> : ''}
          </div>
          {isAccessories? <Link to='contact'><div className="w-full mt-6 inline-flex items-center justify-center px-4 py-2 bg-indigo-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-indigo-600 active:bg-indigo-700 focus:outline-none focus:border-indigo-700 focus:ring ring-indigo-300 disabled:opacity-25 transition ease-in-out duration-150">Contact Us</div>
</Link> : <div className="w-full mt-6 inline-flex items-center justify-center px-4 py-2 bg-indigo-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-indigo-600 active:bg-indigo-700 focus:outline-none focus:border-indigo-700 focus:ring ring-indigo-300 disabled:opacity-25 transition ease-in-out duration-150">View Details</div>
}
        </div>
      </div>
    </div>
  );
}

export default Card;
