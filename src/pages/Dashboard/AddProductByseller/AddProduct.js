import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { json, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const AddProduct = () => {
	const {user} = useContext(AuthContext)
    const {register, handleSubmit , formState: {errors} } = useForm();

	const imgHostKey = process.env.REACT_APP_imgbb_key;
	
	const navigate = useNavigate()

    const handleAddProduct = data => {
            console.log(data);
			const image = data.img[0];
			const formData = new FormData();
			formData.append('image', image);
			const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`
			fetch(url, {
				method: 'POST',
				body: formData
			})
			.then(res =>res.json())
			.then(imgData => {
				if(imgData.success){
					console.log(imgData.data.url); 
					const product = {
						sellerName : data.sellerName,
						sellerLocation: data.sellerLocation,
						time: data.time,
						condition: data.condition,
						usOfYear: data.usOfYear,
						details: data.details,
						img: imgData.data.url,
						categoryName: data.categoryName,
						OriginalPrice: data.OriginalPrice,
						sellingPrice: data.sellingPrice
						
					}
					// post product to the database

					fetch('http://localhost:5000/product', {
						method: 'POST',
						headers: {
							'content-type': 'application/json'
						},
						body: JSON.stringify(product)
					})
					.then(res => res.json())
					.then(result =>{
						console.log(result);
						toast.success('product added successfully')
						navigate('/dashboard/myProduct')
					})
				}
			})

    }
    return (
        <div>
			 <h2 className='text-center text-xl lg:text-2xl my-2 mb-6 text-slate-800'>Welcome <span className='text-green-700'>{user?.displayName}</span> ! let's post an add</h2>
            <h2 className='text-center text-xl lg:text-4xl my-2 text-slate-800'>fill up all input field </h2>
                <section className="p-6 w-10/12 mx-auto bg-gray-700  text-gray-50">
	<form onSubmit={handleSubmit(handleAddProduct)} className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
		<div className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm  bg-slate-800">
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				 
				
				<div className="col-span-full sm:col-span-2">
					<label  className="text-sm">seller Name</label>
					<input {...register("sellerName" ,
                       { required: "name is required"}
                        )} type="text" required className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  border-gray-700  text-gray-900" />
						  {errors.sellerName && <p className='text-red-500'>{errors.sellerName.message}</p>}
				</div>
                <div className="col-span-full sm:col-span-2">
					<label for="lastname" className="text-sm">location</label>
					<input {...register("sellerLocation" ,
                       { required: "location is required"}
                        )} type="text" required className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  border-gray-700  text-gray-900" />
					 {errors.sellerLocation && <p className='text-red-500'>{errors.sellerLocation.message}</p>}
				</div>
                 <div className="col-span-full sm:col-span-2">
					<label for="lastname" className="text-sm">post date</label>
					<input {...register("time" ,
                       { required: "time is required"}
                        )} type="text" placeholder="30 nov 2022" required className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  border-gray-700  text-gray-900" />
					 {errors.time && <p className='text-red-500'>{errors.time.message}</p>}
				</div>
                 <div className="col-span-full sm:col-span-2">
					<label for="lastname" className="text-sm">Condition </label>
					<input {...register("condition" ,
                       { required: "condition is required"}
                        )} type="text" placeholder="good/normal" required className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  border-gray-700  text-gray-900" />
						{errors.condition && <p className='text-red-500'>{errors.condition.message}</p>}
				</div>
                 <div className="col-span-full sm:col-span-2">
					<label for="lastname" className="text-sm">Year of use </label>
					<input {...register("usOfYear" ,
                       { required: "use of year is required"}
                        )} type="number" placeholder="1/2" required className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  border-gray-700  text-gray-900" />
				{errors.useOfYear && <p className='text-red-500'>{errors.time.message}</p>}
				</div>
				 <div className="col-span-full sm:col-span-2">
					<label for="lastname" className="text-sm ">Upload Image</label>
					<input {...register("img" ,
                       { required: "image is required"}
                        )} type="file" placeholder="1/2" required className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  border-gray-700  text-gray-900" />
				{errors.img && <p className='text-red-500'>{errors.img.message}</p>}
				</div>
				<div className="col-span-full">
					<label for="address" className="text-sm">details</label>
					<input {...register("details" ,
                       { required: "details is required"}
                        )} type="text"  className="w-full  rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  border-gray-700  text-gray-900" />
				{errors.derails && <p className='text-red-500'>{errors.details.message}</p>}
				</div>
				<div className="col-span-full sm:col-span-2">
					<label for="city" className="text-sm">mobil brand </label>
					<select required  {...register("categoryName", {
                        required: "select role"
                    })}className="select select-bordered text-gray-900  max-w-xs">
                    <option  value="samsung" className='text-gray-900'>Samsung</option>
                    <option value="xiaomi"  className='text-gray-900'>Xiaomi</option>
                    <option value="vivo"  className='text-gray-900'>Vivo</option>
					
                </select>
				</div>
				<div className="col-span-full sm:col-span-2">
					<label for="state" className="text-sm">Original price</label>
					<input {...register("OriginalPrice" ,
                       { required: "original price is required"}
                        )} type="text"  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  border-gray-700  text-gray-900" />
				{errors.OriginalPrice && <p className='text-red-500'>{errors.OriginalPrice.message}</p>}
				</div>
				<div className="col-span-full sm:col-span-2">
					<label for="zip" className="text-sm">Selling Price</label>
					<input {...register("sellingPrice" ,
                       { required: "selling price is required"}
                        )} type="text"  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  border-gray-700  text-gray-900" />
				{errors.sellingPrice && <p className='text-red-500'>{errors.sellingPrice.message}</p>}
				</div> <input className='px-8 py-3 font-semibold rounded  bg-gray-200  text-gray-800' value="Add " type="submit" />
			</div>
		</div>
	</form>
</section>
        </div>
    );
};

export default AddProduct;