import React, { use } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../../AuthContext/AuthContext';
import { Link } from 'react-router';

const Navbar = () => {
    const {user , signOutUser} = use(AuthContext)
    const handleSIgnOut = ()=>{
        signOutUser()
        .then(()=>{
            console.log('User sign Out....')
        }).catch(error=>{
            alert(error)
        })
    }
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <Link to='/'><a className='border-2 p-2 rounded-md border-amber-200'>Home</a></Link>
      <Link><a>About</a></Link>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Find Your Job</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex  gap-5">
      <Link to='/'><a className='btn btn-secondary'>Home</a></Link>
      <Link><a>About</a></Link>
    </ul>
  </div>
  <div className="navbar-end">
   {
    user ?  <button onClick={handleSIgnOut} className="btn" to='/'>Sign Out</button> :
     <>
     <NavLink className="btn" to='/login'>Login</NavLink>
      <NavLink className="btn" to='/register'>Register</NavLink>
     </>
   }
  </div>
</div>
    );
};

export default Navbar;