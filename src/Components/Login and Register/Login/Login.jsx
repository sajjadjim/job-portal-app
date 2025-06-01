import Lottie from 'lottie-react';
import React, { use, useEffect } from 'react';
import registerLottie from '../../../../public/login.json'
import { AuthContext } from '../../../AuthContext/AuthContext';
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router';
import { useLocation } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
const Login = () => {

    useEffect(()=>{
        document.title = 'Login - Find Your Job'
    })
    // user navigate the Login where he/she send the website and Log in again send their 
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state || '/';

    const { signIn, signInWithGoogle } = use(AuthContext)
    const handleLogInButton = (e) => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password)

        signIn(email, password).then(result => {
            console.log(result)
            // here the navigate function call after successfully login 
            navigate(from)
        }).catch(error => {
            console.log(error)
        })
    }


    // --------------------------------------------------------
    // sign in with google here part code ----------------------
    const signInGoogle = () => {
        signInWithGoogle()
            .then((result) => {
                // The signed-in user info.
                const user = result.user;
                console.log('Google User:', user);
                toast.success("Signed in with Google ✅");
            })
            .catch((error) => {
                console.error('Google sign-in error:', error);
                toast.error("Google Sign-in failed ❌");
            });
    };

    return (
        <div className="hero items-center my-30">
            <ToastContainer />
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <Lottie className='w-100' animationData={registerLottie} loop={true}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleLogInButton}>
                            <fieldset className="fieldset">
                                <label className="label">Email :</label>
                                <input name='email' type="email" className="input" placeholder="enter your email" />
                                <label className="label">Password :</label>
                                <input name='password' type="password" className="input" placeholder="enter your password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                        </form>
                        <div className=" text-center">
                            <p className="text-sm text-gray-600 mb-2">Or sign in with</p>
                            <button onClick={() => {
                                signInGoogle().then(() => {
                                    navigate('/');
                                });
                            }}
                                className="w-full flex items-center justify-center space-x-2 bg-white py-2 rounded-xl border border-gray-300 hover:shadow-md transition">
                                <FcGoogle />
                                <span>Sign in with Google</span>
                            </button>
                        </div>
                        <p className="text-center text-sm text-gray-600">
                            Don't have an account? <Link to='/signup' className="text-blue-500 hover:underline">Sign up</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;