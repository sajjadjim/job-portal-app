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
        <Link to='/'><p className='btn '>Home</p></Link>
      <Link><p className='btn '>About</p></Link>
       {
        user && <>
         <Link to='/myApplications'><p className='btn '>My Application</p></Link>
        </>
      }
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Find Your Job</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex  gap-5">
      <Link to='/'><p className='btn btn-secondary'>Home</p></Link>
      <Link><p className='btn btn-primary'>About</p></Link>
      {
        user && <>
         <Link to='/myApplications'><p className='btn btn-primary'>My Application</p></Link>
        </>
      }
       {
        user && <>
         <Link to='/addjob'><p className='btn btn-primary'>Add Job</p></Link>
        </>
      }
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