import React from 'react';
import './AboutUs.css'

const AboutUs = () => {
  return (
    <div>
        <div id='img1' className='flex flex-col items-center'>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-20 mt-10 border-b-2 pb-1">About Us</h1>
          <p className="text-lg md:text-2xl text-gray-700 p-4 md:p-0 tracking-wide md:tracking-wider md:max-w-xl">
            Welcome to our electronic shop, your one-stop destination for all your technology needs. At our store, we offer a wide range of electronic devices, including TVs, mobile phones, laptops, iMacs, and more. Whether you're a tech enthusiast or simply looking for the latest gadgets, we've got you covered.
          </p>
        </div>
        <div id='img2' className='flex items-center justify-center'>
          <p className="text-lg md:text-2xl text-gray-700 p-4 md:p-0 tracking-wide md:tracking-wider md:max-w-xl">
          Our mission is to provide high-quality products that enhance your digital lifestyle. We carefully curate our inventory to ensure that you have access to the latest and most reliable electronic devices on the market. From cutting-edge smartphones to powerful laptops, we offer a diverse selection to cater to your specific requirements.
          </p>
        </div>
        <div id='img3' className='flex items-center justify-center'>
          <p className="text-lg md:text-2xl text-gray-700 p-4 md:p-0 tracking-wide md:tracking-wider md:max-w-xl">
          Shop with confidence knowing that we prioritize your satisfaction. Additionally, we provide warranty options and after-sales support to give you peace of mind long after your purchase.
          </p>
        </div>
    </div>
  );
};

export default AboutUs;
