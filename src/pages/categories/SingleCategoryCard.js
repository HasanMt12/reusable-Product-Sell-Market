import React from 'react';
import { Link } from 'react-router-dom';

const SingleCategoryCard = ({product}) => {
    const {mobilBrand , condition, sellerLocation, sellerName, img ,time} = product;
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
      alt="Guitar"
      src={img}
      className="aspect-square h-full w-full object-cover"
    />
  </div>

  <div className="flex flex-1 flex-col justify-between">
    <div className="border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
      <div>
        <h3 className="font-bold uppercase text-gray-900">
          {mobilBrand}
        </h3>
        <p className="font-bold uppercase text-gray-900">
          Seller Name: {sellerName}
        </p>
        <p className="font-bold uppercase text-gray-900">
          Mobil Condition :{condition}
        </p>
      </div>

      <p className="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
        
      </p>
    </div>

    <div className="sm:flex sm:items-end sm:justify-end">
      <button
       
        className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
      >
        Read Blog
      </button>
    </div>
  </div>
</article>
        </div>
    );
};

export default SingleCategoryCard;