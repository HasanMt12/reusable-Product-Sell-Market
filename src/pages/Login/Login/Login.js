import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const Login = () => {
        const { register, formState: { errors }, handleSubmit } = useForm();
        const { signIn ,signInWithGoogle }= useContext(AuthContext)
        const [signInError, setSignInError] = useState('');
        const location = useLocation();
        const navigate = useNavigate();

        const form = location.state?.form?.pathname || '/';


         const handleLogin = data =>{
            
            console.log(data);
            setSignInError('');
             signIn(data.email, data.password)
            .then(result=>{
                const user = result.user;
                console.log(user);
                navigate(form, {replace: true});
                // setLoginUserEmail(data.email);
                
            })
            .catch(error=> {
                console.log(error.message)
                setSignInError(error.message);
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
                        <label className="label"><span className="label-text text-gray-100">Password</span></label>
                        <input type="password" 
                        {...register("password" , {
                            required:"password required",
                            minLength: {value: 6 , message:'password must be 6 character or longer'}
                            })} className="input input-bordered w-full max-w-xs text-gray-600"/>
                        <label className="label"><span className="label-text text-gray-100">Forgot password</span></label>
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
               
                    <input className='btn btn-accent w-full' value="Login" type="submit" />
                    <div>
                        {signInError && <p className='text-gray-100'>{signInError}</p>}
                    </div>
                </form>

                     <p>You have no account <Link className='text-secondary' to="/signup"> Pleas!</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignin} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
            </div>
        </div>
    );
};

export default Login;