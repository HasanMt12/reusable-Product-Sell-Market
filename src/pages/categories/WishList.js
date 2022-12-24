import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import SingleCategoryCard from './SingleCategoryCard';

const WishList = () => {

    const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://used-product-sell-server.vercel.app/wishlist?email=${user?.email}&&limit=3`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [user?.email]);


    return (
        <div>
      <h2 className="text-center lg:text-4xl text-xl font-bold my-3">Featured Product</h2>
      <p className="w-2/3 mx-auto  mb-2 font-light text-slate-500 lg:mb-2 md:text-lg lg:text-xl text-slate-400 text-center">
        Your Wishlist
      </p>
      <div className="grid gap-1  mx-auto items-center justify-center">
        {data.map((product) => (
          <SingleCategoryCard product={product} key={product._id} />
        ))}
      </div>
    </div>
    );
};

export default WishList;