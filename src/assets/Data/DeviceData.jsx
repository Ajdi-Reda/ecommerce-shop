import { collection, getDocs } from "firebase/firestore";
import { db } from "../../FirebaseConfig/Firebase";
import { useEffect, useState, useContext } from "react";
import { Context } from "../../App";

const DeviceData = () => {
  const [deviceData, setDeviceData] = useState([]);
  const context = useContext(Context);

  useEffect(() => {
    let category = 'mobile';

    switch (context.category) {
      case 'Tablets':
        category = 'tablet';
        break;
      case 'Laptops & Imacs':
        category = 'laptop';
        break;
      case 'Headphones & Earbuds':
        category = 'headphones&earbuds';
        break;
      case 'Keyboards & Mouses':
        category = 'keyboards&mouses';
      break;
      case 'Cases & Covers':
        category = 'cases&covers';
      break;
      default:
        category = 'mobile';
    }

    const fetchMobileData = async () => {
      const deviceCollectionRef = collection(db, category);
      const deviceSnapshot = await getDocs(deviceCollectionRef);
      const fetchedDeviceData = deviceSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDeviceData(fetchedDeviceData);
    };

    fetchMobileData();
  }, [context.category]);
 
  return deviceData;
};

export default DeviceData;
