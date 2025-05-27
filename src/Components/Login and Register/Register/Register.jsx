import Lottie from 'lottie-react';
import React, { use } from 'react';
import registerLottie from '../../../../public/Animation - 1748189273589.json'
import { AuthContext } from '../../../AuthContext/AuthContext';
const Register = () => {

    const {createUser} = use(AuthContext)

    const handleRegisterInButton = (e) => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password)

        createUser(email , password).then(result=>{
            console.log(result)
        }).catch(error=>{
            console.log(error)
        })
    }
    return (
        <div className="hero items-center my-30">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <Lottie className='w-50' animationData={registerLottie} loop={true}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleRegisterInButton}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input name='email' type="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input name='password' type="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;