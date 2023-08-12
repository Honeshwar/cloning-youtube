import React from 'react';
import {useNavigate} from "react-router-dom";

import LeftMenuItem from "./LeftNavMenuItem";
import {categories} from "../utils/constants";
import {useContextValue} from '../context/contextApi';


function LeftNav() {
  const {selectedCategories , setSelectedCategories,mobileMenu} = useContextValue();
  const navigate = useNavigate();
  const clickHandler = (name,type)=>{
    switch(type){
      case 'category'||'home':
        return setSelectedCategories(name);
      case 'menu':
        return false;
      default:
        break;
    }
  }
  return (
    <div className='md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[240] md:translate-x-0 transition-all'>
      <div className='flex px-5 flex-col'>
          {categories.map((category,i)=>{
            return(// if you want to return sibling fragment comp use,no optional chaining because data we create sstore in js file(not come from server/we can full responsible for data)
            <React.Fragment key={category.name}>
                <LeftMenuItem 
                  text={category.type === "home" ? "Home" : category.name}//name = pass in route
                  icon={category.icon}
                  action={()=>{
                    clickHandler(category.name,category.type);
                    navigate('/');
                  }}
                  className={`${selectedCategories === category.name? "bg-white/[.15]" : ""}`}//null,t/f ,undefined , func with nothing return also take instead "
                />
                {category.divider && (
                  <hr className="my-5 border-white/[.2]" />
                )}
            </React.Fragment>
            )
          })}
            <hr className="my-5 border-white/[.2]" />
            <div className="text-white/[.5] text-[12px]">
              Hi,there!,...
            </div>
      </div>

    </div>
  )
}

export default LeftNav