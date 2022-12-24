import React from 'react';
import { Link } from 'react-router-dom';

const ExtraSection = () => {
    return (
        <div>
            <div className=" bg-slate-300  text-slate-800 w-10/12 my-16 mx-auto py-4 rounded">
	<div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm  bg-slate-500">
		
		<div className="mt-3">
			<p className="text-2xl font-bold hover:underline">
                About Sell My Phone, The Largest Marketplace in Bangladesh!
                </p>
			<p className="mt-2">

                 This a platform on which you can buy and sell almost everything!We help people buy and sell mobil,
                 With more than 3 categories our solutions are built to be safe, smart, and convenient
                 for our customers.
            </p>
		</div>
		<div className="flex items-center justify-between mt-4">
			<Link to="/about" className="hover:underline  text-slate-900">Read more</Link>
			
		</div>
	</div>
</div>
        </div>
    );
};

export default ExtraSection;