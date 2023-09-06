import React from 'react';
import { mainServices,subServices } from '../constant';
import { useSelector } from 'react-redux';

const SidebarItem = ({icon,title})=>{
  return(
    <div className='flex gap-3 items-center p-2 hover:bg-gray-200 rounded-md'>
        <img className='h-6 w-6' src={icon} alt={title}/>
        <p className='text-sm '>{title}</p>
    </div>
  )
}


function Sidebar() {

  const isMenuOpen = useSelector((store)=>store.app.isMenuOpen)
 if(!isMenuOpen) return null;
  return (
    <div className='w-[15%] px-5 shadow-sm mt-12 fixed bg-white'>
      <div className=''>
        {mainServices.map((mainService)=>(<SidebarItem key={mainService.title} {...mainService} />))}
      </div>
<hr/>
<div>
        {subServices.map((subService)=>(<SidebarItem key={subService.title} {...subService} />))}
      </div>

    </div>
  )
}

export default Sidebar