import React, { useContext, useState, useEffect } from 'react'
import Card from './Card'
import MobileData from '../assets/Data/MobileData'
import { Link } from 'react-router-dom';
import { queryContext } from '../App';

const ItemCards = () => {
   const query = useContext(queryContext)
   const mobileData = MobileData();
   const [filteredData, setFilteredData] = useState([])


     useEffect(() => {
    const filteredResults = mobileData.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filteredResults);
  }, [query, mobileData]);

    if (!filteredData) {
    return <div></div>;
  }

  if (filteredData.length === 0) {
    return <div></div>;
  }
  return (
    <div className="md:w-[70%] flex gap-y-6 gap-x-2 flex-wrap mt-40 justify-center">
      {filteredData.map((item) => (
        <Link to={`device/${item.id}`} key={item.id}>
          <Card
            id={item.id}
            name={item.name}
            price={item.price}
            condition={item.condition}
            image={item.images[0]}
          />
        </Link>
      ))}
    </div>
  );
};

export default ItemCards