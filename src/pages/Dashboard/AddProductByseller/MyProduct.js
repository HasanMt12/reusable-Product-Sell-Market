import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';
import ConfirmDeleteModal from '../../shared/modal/ConfirmDeleteModal';

const MyProduct = () => {
  const {user} = useContext(AuthContext);
  const [deletingProduct, setDeletingProduct] = useState(null);

     const closeModal = () => {
        setDeletingProduct(null);
    }

    

  const url = `http://localhost:5000/product?email=${user?.email}`;
  const {data: product = [] , refetch} = useQuery({
    queryKey: ['product', user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data
    }
  })
  console.log(product);


  const handleDeleteProduct = p => {
      
      fetch(`http://localhost:5000/product/${p._id}`, {
        method: 'DELETE', 
         headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
      })
      .then(res => res.json())
      .then(data => {
        if(data.deletedCount > 0){
          refetch()
          toast.success('deleted successfully')
        }
        
      })
    
  }
 
    return (
        <div>
           

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
                  alt="product"
                  src={p?.img}
                  className = "aspect-square lg:h-full lg:w-9/12 object-scale-down h-24 w-28  lg:object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between">
                <div className="border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                  <div>
                    <h3 className="lg:font-bold font-semibold  text-gray-900">
                          product name : <span className='font-semibold text-cyan-800 mx-4'>{p.mobilBrand}</span> 
                        </h3>
                        <p className="font-bold   text-gray-900">
                          Seller Name<span className='ml-7'>:</span> <span className='font-semibold text-cyan-800 mx-4'>{p.sellerName}</span> 
                        </p>

                        


                        <p className="font-bold   text-gray-900">
                          Seller Name<span className='ml-7'>:</span> <span className='font-semibold text-cyan-800 mx-4'>{user?.email}</span> 
                        </p>
                        
                        <p className="font-bold   text-gray-900">
                          Original price <span className='ml-1'>:</span> <span className='font-semibold text-cyan-800 mx-4'>$ {p.sellingPrice}</span> 
                        </p>
                        <p className="font-bold   text-gray-900">
                          Resale price <span className='ml-6'>:</span> <span className='font-semibold text-cyan-800 mx-4'>$ {p.OriginalPrice}</span> 
                        </p>
                  </div>

                    <p className="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3">
                    Seller name :  {p.sellerName}
                    </p>
                    </div>

                    <div className="sm:flex sm:items-end sm:justify-end">
                      <p
                          className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                      > 
                      <label onClick={() => setDeletingProduct(p)} htmlFor="confirmation-modal" ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>
</label>
                        </p>
                    </div>
                  </div>
                </article> 

           )}

           
            {
              deletingProduct && <ConfirmDeleteModal
                title={`Are you sure you want to delete?`}
                message={`If you delete ${deletingProduct.name}. It cannot be undone.`}
                   successAction = {handleDeleteProduct}
                    successButtonName="Delete"
                modalData = {deletingProduct}
                    closeModal = {closeModal}
              >
              </ConfirmDeleteModal>
            }
        </div>
    );
};

export default MyProduct;
