import { collection, getDocs } from "firebase/firestore";
import { db } from "../../FirebaseConfig/Firebase";
import { useEffect, useState } from "react";

const MobileData = () => {
  const [mobileData, setMobileData] = useState([]);

  useEffect(() => {
    const MobileData = async () => {
      const mobileCollectionRef = collection(db, "mobiles");
      const mobileSnapshot = await getDocs(mobileCollectionRef);
      const fetchedMobileData = mobileSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMobileData(fetchedMobileData);
    };

    MobileData();
  }, []);

  return mobileData;
};

export default MobileData;
