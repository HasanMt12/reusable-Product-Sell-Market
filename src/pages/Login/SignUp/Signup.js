import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Context/AuthProvider';

const Signup = () => {
     const {register, handleSubmit , formState: {errors} } = useForm();
     const { signUp }= useContext(AuthContext)
 const handleSignUp = data =>{
    console.log(data);
    signUp(data.email, data.password)
    .then(result =>{
        const  user = result.user;
        console.log(user);
    })
    .catch(error=> console.log(error));
 }

    return (
        <div className='h-[800px] flex justify-center items-center'>
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-700 text-gray-100">
             <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)} >
                
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text text-gray-100">Name</span></label>
                        <input type="text" {...register("name" ,
                       { required: "name is required"}
                        )}
                       
                           className="input input-bordered w-full max-w-xs text-gray-600"/>
                            {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs ">
                        <label className="label"><span className="label-text text-gray-100">Email</span></label>
                        <input type="email" {...register("email" , {
                            required: "write a valid email"
                        })} 
                       
                           className="input input-bordered w-full max-w-xs text-gray-600"/>
                            {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs mb-6">
                        <label className="label"><span className="label-text text-gray-100">Password</span></label>
                        <input type="password" {...register("password" , {
                            required: "password is required",
                             minLength: {value: 6 , message: "password must be 6 character "},
                                 pattern: { value: /(?=.*[!@#$&*])(?=.*[0-9])/, message: ' Password must have one special characters' }
                        })}
                       
                          className="input input-bordered w-full max-w-xs text-gray-600"/>
                      {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                      
                    </div>
               
                    <input className='btn btn-accent w-full' value="Sign up" type="submit" />
                    {/* {signUpError && <p className='text-red-500'>{signUpError}</p>} */}
                </form>
                     <p>Already have an account?<Link className='text-secondary' to="/login">Please login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
        </div>
    );
};

export default Signup;