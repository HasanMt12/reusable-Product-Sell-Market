import { useQuery } from '@tanstack/react-query';
import React from 'react';

const MyProduct = () => {
    const {data: product , isLoading} = useQuery({
        queryKey: ['product'],
        queryFn: async () =>{
            try{
                const res = await fetch('http://localhost:5000/product')
                const data = await res.json();
                return data;

            }catch(error){

            }
        }
    })
    if(isLoading){
        <h2>loading...</h2>
    }
    return (
        <div>
            <h1>product {product?.length}</h1>

            {  product &&
                product?.map((p , i) => 
<article key={p._id} className="flex bg-white transition hover:shadow-xl mb-6 w-11/12 mx-auto">
  <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
    <time
    
      className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
    >
      <span>post Date</span>
      <span className="w-px flex-1 bg-gray-900/10"></span>
      <span>{p.time}</span>
    </time>
  </div>

  <div className="  sm:basis-56">
    <img
      alt="Guitar"
      src={p?.img}
      className="aspect-square h-full w-9/12  object-cover"
    />
  </div>

  <div className="flex flex-1 flex-col justify-between">
    <div className="border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
      <div>
        <h3 className="font-bold uppercase text-gray-900">
          Finding the right guitar for your style - 5 tips
        </h3>
      </div>

      <p className="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3">
        {p.sellerName}
      </p>
    </div>

    <div className="sm:flex sm:items-end sm:justify-end">
      <p
        
        className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
      >
        
      </p>
    </div>
  </div>
</article> 
//                 <div key={p._id} className="card card-side bg-base-100 shadow-xl">
//   <figure><img className='w-9/12 h-56 ' src={p.img} alt="Movie"/></figure>
//   <div className="card-body">
//     <h2 className="card-title">New movie is released!</h2>
//     <p>Click the button to watch on Jetflix app.</p>
//     <div className="card-actions justify-end">
//       <button className="btn btn-primary">Watch</button>
//     </div>
//   </div>
// </div>

)
            }
        </div>
    );
};

export default MyProduct;
