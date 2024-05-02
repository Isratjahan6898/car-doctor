import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import { IoSearch } from "react-icons/io5";
import { FaRegClipboard } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className='lg:mx-[70px] lg:mt-[60px]'>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <p><NavLink to='/home' className={(isActive)=>isActive? 'text-[#FF3811] font-bold':'font-bold'}>Home</NavLink></p>
       
        <p><NavLink to='/about' className={(isActive)=>isActive? 'text-[#FF3811] font-bold':'font-bold'}>About</NavLink></p>
        <p><NavLink to='/services' className={(isActive)=>isActive? 'text-[#FF3811] font-bold':'font-bold'}>Services</NavLink></p>
        <p><NavLink to='/blog' className={(isActive)=>isActive? 'text-[#FF3811] font-bold':'font-bold'}>Blog</NavLink></p>
        <p><NavLink to='/contact' className={(isActive)=>isActive? 'text-[#FF3811] font-bold':'font-bold'}>Contact</NavLink></p>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"><img src={logo} alt="" /></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <p className='mr-[16px]'><NavLink to="/" className={(isActive)=>isActive? 'text-[#FF3811] font-bold':'font-bold'}>Home</NavLink></p>
       
       <p className='mr-[16px]'><NavLink to='/about' className={(isActive)=>isActive? 'text-[#FF3811] font-bold':'font-bold'}>About</NavLink></p>
       <p className='mr-[16px]'><NavLink to='/services' className={(isActive)=>isActive? 'text-[#FF3811] font-bold':'font-bold'} >Services</NavLink></p>
       <p className='mr-[16px]'><NavLink to='/blog' className={(isActive)=>isActive? 'text-[#FF3811] font-bold':'font-bold'}>Blog</NavLink></p>
       <p><NavLink to='/contact' className={(isActive)=>isActive? 'text-[#FF3811] font-bold':'font-bold'}>Contact</NavLink></p>
    </ul>
  </div>
  <div className="mr-[60px] mt-[170px] lg:navbar-end lg:mt-[0px]"> 
  <FaRegClipboard className='mr-[10px] text-2xl' />     
  <IoSearch className='mr-[10px] text-2xl' />
    <btn className="btn text-[#FF3811] font-semibold text-lg border-[#FF3811] bg-white">Appointment</btn>
  </div>
</div>
        </div>
    );
};

export default Navbar;