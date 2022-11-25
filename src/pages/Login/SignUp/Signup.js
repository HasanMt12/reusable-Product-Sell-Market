import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Context/AuthProvider';
import toast from 'react-hot-toast';

const Signup = () => {
     const {register, handleSubmit , formState: {errors} } = useForm();
     const { signUp ,updateUser, signInWithGoogle}= useContext(AuthContext)
     const [registerError, setRegisterError] = useState('')
     const navigate = useNavigate()
 const handleSignUp = data =>{
   setRegisterError('')
    console.log(data);
    signUp(data.email, data.password)
    .then(result =>{
        const  user = result.user;
        console.log(user);
        toast.success('user register successfully')
          const userInfo = {
                displayName: data.name
            }
// jodi create hoy tahole user update kore dicchi
        updateUser(userInfo)
            .then( () => {
// jodi user thake/update hoy user save kore userCollection database e info patacchi 
                // saveUsers(data.name, data.email)
                navigate('/');

            } )
            .catch(error => console.log(error));
    })
    .catch(error=> {
        console.log(error)
       setRegisterError(error.message)
    });
 }
 const handleGoogleSignin = () => {
    signInWithGoogle().then(result => {
      console.log(result.user)
    
    //   navigate(from, { replace: true })
    })
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
                    {registerError && <p className='text-red-500'>{registerError}</p>}
                </form>
                     <p>Already have an account?<Link className='text-secondary' to="/login">Please login</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignin} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
        </div>
    );
};

export default Signup;