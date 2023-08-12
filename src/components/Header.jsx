import React, { useState } from 'react'
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

import ytLogo from "../assets/images/yt-logo.png";
import ytLogoMobile from "../assets/images/yt-logo-mobile.png";

import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

import { useContextValue } from "../context/contextApi";
import Loader from "../shared/Loader";

function Header() {
    const [searchQuery, setSearchQuery] = useState("");
    const {loading ,mobileMenu ,setMobileMenu} = useContextValue();
    const navigate = useNavigate();

    const searchQueryHandler = (event)=>{
        if((event?.key === 'Enter' || event === "searchButton") && searchQuery?.length > 0){//optional Chaining (?)
            navigate(`/searchResult/${searchQuery}`);
        }
    }

    //use at mobile devices
    const mobileMenuToggle = ()=>{
        setMobileMenu(!mobileMenu);
    }

    //for know , that in which  header page is or header page k sath kon sa page hai
    const {pathname} = useLocation();
    const pageName = pathname.split('/').filter(Boolean)?.[0];//filter return array ['path',"path"], spilt at "/"
    
  return (
    // @media (prefers-color-scheme: dark){}//condition
    <>
    <div className='sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-black dark:bg-black'>
      {loading && <Loader/>}

      <div className='flex h-5 items-center'>
        {pageName !== 'video' && (
          <div className="flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6" onClick={mobileMenuToggle}>
            {mobileMenu?(<CgClose className='text-White text-xl'/>):(<SlMenu className='text-White text-xl'/>)}
          </div>
        )}
        {/* its just wrapper of anchor tag , so we can add additional func to anchor tag */}
        <Link to="/" className='flex h-5 items-center'>
            <img className='h-full hidden dark:md:block' src={ytLogo} alt="Youtube"/>
            <img className='h-full  md:hidden' src={ytLogoMobile} alt="Youtube"/>
        </Link>
      </div>
      <div className="group flex items-center">
          <div className="flex h-8 md:h-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5">
            <div className='w-10 items-center justify-center hidden group-focus-within:md:flex'>
             <IoIosSearch className='text-white text-xl'/>
            </div>
          <input type='text' className="w-44 bg-transparent outline-none text-white pr-5 pl-5 md:pl-0  md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
          onChange={(e)=>setSearchQuery(e.target.value)}
          value={searchQuery}
          onKeyUp={searchQueryHandler}
          placeholder='Search'
          />
          </div>
          <button className='w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1]' onClick={searchQueryHandler}>
          <IoIosSearch className='text-white text-xl'/>
          </button>
      </div>
      <div className="flex items-center">
          <div className="hidden md:flex">
            <div className='w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#303030]/[0.6]'>
              <RiVideoAddLine className='text-white text-xl cursor-pointer'/>
            </div>
            <div className='w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#303030]/[0.6]'>
              <FiBell className='text-white text-xl cursor-pointer'/>
            </div>
            <Link  to="/" title="profile of user" className='w-8 h-8 overflow-hidden rounded-full md:ml-4'>
              <img src="https://xsgames.co/randomusers/avatar.php?g=male" alt="profile of user" />
            </Link>  
          </div>
      </div>
    </div>
    <Outlet/>
    </>

  )
}

export default Header