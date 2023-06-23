import React, { useState } from 'react';
import MobileData from '../assets/Data/DeviceData';
import { useParams, Link } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';

const DeviceDetails = () => {
  const mobileData = MobileData();
  const { id } = useParams();
  const device = mobileData.find((item) => item.id === id);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!device || !device.images) {
    return <LoadingSpinner />;
  }

  const handleThumbnailClick = (index) => {
    setActiveImageIndex(index);
  };

  return (
    <div className="flex flex-col sm:flex-row mt-4 md:mt-20">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <div className="relative h-64 md:h-96">
          <img
            src={device.images[activeImageIndex]}
            className="w-full h-full object-contain"
            alt="Device Image"
          />
        </div>
        <div className="flex justify-center mt-4">
          {device.images.map((image, index) => (
            <div
              key={index}
              className={`w-10 h-10 md:w-12 md:h-12 mx-2 rounded-full border-2 cursor-pointer ${
                activeImageIndex === index ? 'border-blue-500' : 'border-gray-300'
              }`}
              onClick={() => handleThumbnailClick(index)}
            >
              <img
                src={image}
                className="w-full h-full object-cover rounded-full"
                alt={`Thumbnail ${index}`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="md:w-1/2 p-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{device.name}</h2>
        <p className="text-gray-600 mb-4">{device.brand}</p>
        <p className="text-gray-600 mb-4">Condition: {device.condition}</p>
        <p className="text-gray-600 mb-4 font-bold text-xl">
          Price: <span className="text-indigo-500">{device.price} MAD</span>
        </p>
        <h3 className="text-xl md:text-2xl font-bold mb-4">Specifications:</h3>
        <ul className="list-disc ml-6">
          <li>Processor: {device.processor}</li>
          <li>RAM: {device.ram} GB</li>
          <li>Storage: {device.storage} GB</li>
          <li>Battery: {device.battery} mAh</li>
        </ul>
        <Link to="/contact">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 mt-6 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none hover:scale-105"
          >
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DeviceDetails;
