import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Navbar = () => {


  const { user, logOut } = useContext(AuthContext);









  const handleLogOut = () => {
      logOut()
          .then()
          .catch(error => console.log(error));
  }


    return (
        <div>
           <div className="navbar  bg-indigo-100 fixed top-0 left-0 right-0 z-50">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to='/alltoys'>All Toys</Link></li>
        <li><Link to='/mytoys'>My Toys</Link></li>
        <li><Link to='/addtoys'>Add toys</Link></li>
        <li><Link to='/signup'>Sign Up</Link></li>
        <li><Link to='/login'>LogIn</Link></li>
       
      
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl font-bold">ToyCarJunction</a>
  </div>
 
  <div className="navbar-end">
     <div className=" hidden lg:flex">
    <ul className="menu menu-horizontal px-1   font-semibold">
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/alltoys'>All Toys</Link></li>
    <li><Link to='/blog'>blog</Link></li>
   
       
        <li><Link to='/signup'>Register</Link></li>

       {
        user?.email ? <>
         <li><Link to='/mytoys'>My Toys</Link></li>
        <li><Link to='/addtoys'>Add toys</Link></li>
        <button onClick={handleLogOut}>Logout</button>
        </>
         :  <li><Link to='/login'>LogIn</Link></li>
       }

        {
          user && 
          
        <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
      <label className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
        <img src={user.photoURL} alt="" />
        </div>
      </label>
      </div>
        }
       
    </ul>
  </div>
  
  </div>
</div>
        </div>
    );
};

export default Navbar;