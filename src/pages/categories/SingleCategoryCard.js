import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { FaGratipay,  FaRegPlusSquare,  FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';


const SingleCategoryCard = ({product , setModalData}) => {
  const {user} = useContext(AuthContext)
    const [fill, setFill] = useState(false);

const handleWishList = (product) => {
    const dbWishlist = { ...product };
    dbWishlist.email = user?.email;
    dbWishlist.color = "red";
    delete dbWishlist._id;

    fetch('https://used-product-sell-server.vercel.app/wishlist', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dbWishlist),
    })
      .then((res) => res.json())
      .then((result) => {
        setFill(true);
        toast.success("added successfully");
      })
      .catch((err) => toast.error(err.message));
  };

  


  
    const {mobilBrand , _id, condition, sellerLocation, sellerName, img ,time , useOfYear, sellingPrice, OriginalPrice} = product;
    return (
        <div>
            <article className="flex bg-slate-300 transition hover:shadow-xl w-9/12 mx-auto my-20">
              <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                <time
                  datetime="2022-10-10"
                  className="flex items-center justify-between gap-4 text-xs font-bold   text-gray-900"
                >
                  <span>post</span>
                  <span className="w-px flex-1 bg-gray-900/10"></span>
                  <span>{time}</span>
                </time>
              </div>

              <div className=" sm:basis-56">
                <img
                  alt="mobilBrand"
                  src={img}
                  className="aspect-square lg:h-full lg:w-9/12 object-scale-down items-center h-28 w-28  lg:object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between">
                <div className="border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                  <div>
                    <h3 className="lg:font-bold font-semibold  text-gray-900">
                      product name : <span className='font-semibold text-cyan-800 mx-4'>{mobilBrand}</span> 
                    </h3>
                    <p className="font-bold   text-gray-900">
                      Seller Name<span className='ml-7'>:</span> <span className='font-semibold text-cyan-800 mx-4'>{sellerName}</span> 
                    </p>
                  
                   
                    <p className="font-bold   text-gray-900">
                      years of use<span className='ml-6'>:</span> <span className='font-semibold text-cyan-800 mx-4'>{useOfYear}</span> 
                    </p>
                    <p className="font-bold   text-gray-900">
                   
                      Original price <span className='ml-1'>:</span> <span className='font-semibold text-cyan-800 mx-4'>$ {sellingPrice}</span> 
                    </p>
                    <p className="font-bold   text-gray-900">
                    
                      Resale price <span className='ml-6'>:</span> <span className='font-semibold text-cyan-800 mx-4'>$ {OriginalPrice}</span> 
                    </p>
                  </div>

                  <p className="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3">
                   Seller Location : {sellerLocation}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3">
                    Mobil Condition : {condition}
                  </p>
                </div>
                
                <button
              onClick={() => handleWishList(product)}
              className={"w-8 text-center mr-2 "}
              
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={product.color ? product.color : "none"}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </button>

                <div className="sm:flex sm:items-end sm:justify-end">
                  <label 
                    htmlFor="bookingModal" 
                    className="btn rounded"
                    onClick={()=> setModalData(product)}
                  > booking<FaRegPlusSquare className='text-gray-800 ml-4'></FaRegPlusSquare> 
                  
                  </label>
                </div>
                {/* <div className="sm:flex sm:items-end sm:justify-end">
                      <Link to={`/dashboard/wishlist/${_id}`} >whishlist</Link>
                </div> */}
              </div>
          </article>

        </div>
    );
};

export default SingleCategoryCard;