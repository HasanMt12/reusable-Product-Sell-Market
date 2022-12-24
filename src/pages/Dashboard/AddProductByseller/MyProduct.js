import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';
import ConfirmDeleteModal from '../../shared/modal/ConfirmDeleteModal';
import MyProductCard from './MyProductCard';

const MyProduct = () => {
  const {user} = useContext(AuthContext);
  // const [deletingProduct, setDeletingProduct] = useState(null);

  //    const closeModal = () => {
  //       setDeletingProduct(null);
  //   }


  //   const handleMakeAdvertise = () =>{
  // const addedProduct = {
  //           // _id: _id,
  //           // name: productName,
  //           // sellerName: sellerName,
  //           // location: location,
            
  //           // sellingPrice: sellingPrice,
  //           // img: images1,
  //       };

//         fetch('https://lens-lab-server.vercel.app/advertise', {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(addedProduct)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//                 if (data.acknowledged) {
//                     alert('Advertised Confirmed.');
//                 }
//                 else {
//                     alert(data.message);
//                 }
//             })
// }
    

  const url = `https://used-product-sell-server.vercel.app/product?email=${user?.email}`;
  const {data: product = [] , refetch} = useQuery({
    queryKey: ['product', user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data
    }
  })
  


 
    return (
        <div className='my-6'>
           

            {  product &&
                product?.map((p ) => <MyProductCard refetch={refetch} key={p.Id} p={p}></MyProductCard>
          

           )}

           
            
        </div>
    );
};

export default MyProduct;
