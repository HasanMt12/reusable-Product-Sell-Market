import React from 'react';

const Banner = () => {
  // https://i.postimg.cc/t47jgXsS/samrtphones.jpg
    return ( 
  <section className=' lg:w-10/12  mx-auto mt-6'>
	<div className="h-3/6 bg-slate-300 ">
		<div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32  text-gray-900">
			<h1 className="text-2xl font-bold  leading-none sm:text-4xl xl:max-w-2xl  text-slate-700">Buying (or Selling) Used Items Online</h1>
			<p className="mt-6 mb-8 text-sm sm:mb-12 xl:max-w-3xl  text-gray-900">The Largest Marketplace in Bangladesh!</p>
			<div className="flex flex-wrap justify-center">
				<button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded  bg-gray-800  text-gray-50">Get started</button>
				<button type="button" className="px-8 py-3 m-2 text-lg border rounded  border-gray-700  text-gray-900">Learn more</button>
			</div>
		</div>
	</div>
	<img src="https://i.postimg.cc/t47jgXsS/samrtphones.jpg" alt="" className="w-5/6 h-3/6 mx-auto mb-12 -mt-10 rounded-lg shadow-md lg:-mt-40  bg-gray-500" />
</section>
    );
};

export default Banner;