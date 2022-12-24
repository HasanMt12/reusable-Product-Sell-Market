import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import useToken from '../../../hooks/useToken';

const Login = () => {
    useTitle('Login')
        const { register, formState: { errors }, handleSubmit } = useForm();
        const { signIn ,signInWithGoogle }= useContext(AuthContext)
        const [signInError, setSignInError] = useState('');
        const [signInUserEmail, setSignInUserEmail] = useState('');
        const [token] = useToken(signInUserEmail);
        const location = useLocation();
        const navigate = useNavigate();

        const form = location.state?.form?.pathname || '/';
        
        if(token){
            navigate(form, {replace: true});
        }

         const handleLogin = data =>{
            
            console.log(data);
            setSignInError('');
             signIn(data.email, data.password)
            .then(result=>{
                const user = result.user;
                console.log(user);

                setSignInUserEmail(data.email)
                
                
            })
            .catch(error=> {
                console.log(error.message)
                setSignInError(error.message);
            });
        
        }

        const handleGoogleSignin = () => {
            signInWithGoogle().then(result => {
                console.log(result.user)
                //     setSignInUserEmail(data.email);
                //   navigate(from, { replace: true });
            })
        }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-500 text-gray-100">
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text text-gray-100">Email</span></label>
                        <input type="email" 
                        {...register("email" , {
                            required: "Email Address is required"
                            })} className="input input-bordered w-full max-w-xs text-gray-600"/>
                             {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <div className='flex justify-between'>
                            <span className="label-text justify-end text-gray-100">Password</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
</div></label>
                        <input type="password" 
                        {...register("password" , {
                            required:"password required",
                            minLength: {value: 6 , message:'password must be 6 character or longer'}
                            })} placeholder="" className="input input-bordered w-full max-w-xs text-gray-600"/>
                        <label className="label"><span className="label-text text-gray-100">Forgot password</span></label>
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
               
                    <input className='btn btn-accent w-full' value="Login" type="submit" />
                    <div>
                        {signInError && <p className='text-gray-100'>{signInError}</p>}
                    </div>
                </form>

                     <p>Don 't have an account?<Link className='text-slate-900' to="/signup"> sign Up </Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignin} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
            </div>
        </div>
    );
};

export default Login;