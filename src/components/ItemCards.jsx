import React, { useContext, useState, useEffect } from 'react';
import Card from './Card';
import MobileData from '../assets/Data/DeviceData';
import { Link } from 'react-router-dom';
import { Context } from '../App';

const ItemCards = ({ brand }) => {
  const context = useContext(Context);
  const query = context.searchQuery;
  const category = context.category;
  const mobileData = MobileData();
  const [filteredData, setFilteredData] = useState([]);
  const [isAccessories, setIsAccessories] = useState(false)

  useEffect(() => {
    const filteredResults = mobileData?.filter((item) => {
      setIsAccessories(category?.toLowerCase().includes(item.category?.toLowerCase()))
      const matchesSearchQuery = item.name?.toLowerCase().includes(query.toLowerCase());
      const matchesBrand = brand ? item.brand?.toLowerCase() === brand?.toLowerCase() : true;
      const matchesCategory = category
        ? category.toLowerCase().includes(item.category?.toLowerCase())
        : true;
      return matchesSearchQuery && matchesBrand && matchesCategory;
    });
    setFilteredData(filteredResults);
  }, [query, mobileData, brand, category]);

  return (
    <div className="md:w-[70%] mt-40 justify-center">
      {filteredData.length === 0 ? (
        <div className="text-center">No items found.</div>
      ) : (
        <div className="flex gap-y-6 gap-x-2 flex-wrap justify-center items-center">
          {filteredData.map((item) => (
            <React.Fragment key={item.id}>
              {isAccessories ? (
                <Card
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  image={item.images?.[0]}
                  stock={9}
                  isAccessories={isAccessories}
                />
              ) : (
                <Link to={`device/${item.id}`} key={item.id}>
                  <Card
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    condition={item.condition}
                    image={item.images?.[0]}
                    stock={9}
                  />
                </Link>
              )}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemCards;
