import React from 'react';
import { FaGratipay,  FaRegPlusSquare,  FaStarHalfAlt } from "react-icons/fa";


const SingleCategoryCard = ({product , setModalData}) => {
    const {mobilBrand , condition, sellerLocation, sellerName, img ,time , useOfYear, sellingPrice, OriginalPrice} = product;
    return (
        <div>
            <article className="flex bg-slate-300 transition hover:shadow-xl mx-20 my-20">
              <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                <time
                  datetime="2022-10-10"
                  className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                >
                  <span>post</span>
                  <span className="w-px flex-1 bg-gray-900/10"></span>
                  <span>{time}</span>
                </time>
              </div>

              <div className="hidden sm:block sm:basis-56">
                <img
                  alt="mobilBrand"
                  src={img}
                  className="aspect-square h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between">
                <div className="border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                  <div>
                    <h3 className="font-bold uppercase text-gray-900">
                      product name : <span className='font-semibold text-cyan-800 mx-4'>{mobilBrand}</span> 
                    </h3>
                    <p className="font-bold uppercase text-gray-900">
                      Seller Name<span className='ml-7'>:</span> <span className='font-semibold text-cyan-800 mx-4'>{sellerName}</span> 
                    </p>
                    <p className="font-bold uppercase text-gray-900">
                      years of use<span className='ml-6'>:</span> <span className='font-semibold text-cyan-800 mx-4'>{useOfYear}</span> 
                    </p>
                    <p className="font-bold uppercase text-gray-900">
                      Original price <span className='ml-1'>:</span> <span className='font-semibold text-cyan-800 mx-4'>$ {sellingPrice}</span> 
                    </p>
                    <p className="font-bold uppercase text-gray-900">
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
                <div className="sm:flex sm:items-end sm:justify-end">
                  <label 
                    htmlFor="bookingModal" 
                    className="btn rounded"
                    onClick={()=> setModalData(product)}
                  > booking<FaRegPlusSquare className='text-gray-800 ml-4'></FaRegPlusSquare> 
                  
                  </label>
                </div>
              </div>
          </article>

        </div>
    );
};

export default SingleCategoryCard;