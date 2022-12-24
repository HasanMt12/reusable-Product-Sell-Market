import React from 'react';

const AdShowCard = ({ad}) => {
    const {img , categoryName , sellerName, sellingPrice , details} = ad;
   console.log(ad);
    return (
       <div className="relative flex  flex-shrink-0 h-2/5 bg-slate-500 w-[600px] sm:w-auto">
			<div className="max-w-lg p-4 shadow-md   bg-slate-500 rounded  text-slate-800">
	<div className="flex justify-between rounded pb-4 border-bottom">
		
		<a  href="#"> $ {sellingPrice}</a>
	</div>
	<div className="space-y-4">
		<div className="space-y-2">
			<img src={img} alt="" className="block object-cover object-center w-full rounded-md h-72   bg-gray-500" />
			<div className="flex items-center text-xs">
				<span>{sellerName}</span>
			</div>
		</div>
		<div className="space-y-2">
			<a className="block">
				<h3 className="text-xl font-semibold   text-slate-900">{categoryName}</h3>
			</a>
			<p className="leading-snug   text-slate-900">{details}</p>
		</div>
	</div>
</div>
		</div>
    );
};

export default AdShowCard;