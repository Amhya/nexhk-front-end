'use client'

import React, { Children, ReactNode, createContext, useContext, useState } from 'react';
import { ChevronDown, ChevronFirst, ChevronLast, Expand, MoreVertical } from 'lucide-react';
import Link from 'next/link';
import { SideBarItem } from '@/constants';
import { SideNavItem } from '@/types';
import { usePathname } from 'next/navigation';

type Props = {
  expanded: boolean,
  updateExpanded:() => void;
}


const SideBarContext = createContext<Props>({
  expanded: true,
  updateExpanded: () => {},
});
const SideNavBar  = ( ) => {
  const [expanded, setExpanded] = React.useState(true);

  const updateExpanded = () =>{
    setExpanded(true)
  }

  return (
    <div className='h-screen sticky top-0'>  
      <nav className='h-full flex flex-col bg-white border-r shadow-sm '>
        <div className='p-4 pb-2 h-[160px] flex justify-between items-center '>
          <img src='https://static.vecteezy.com/system/resources/previews/010/792/526/original/cute-shiba-inu-dog-cartoon-element-free-png.png'
            className={`ml-12 overflow-hidden transition-all ${expanded ? "w-32":"w-0 ml-0"}`}/>
          <button onClick={()=>setExpanded(curr => !curr) } className='p-1.5 rounded-lg  hover:bg-gray-100'>
            {expanded ? <ChevronFirst color="#422AFB"/>: <ChevronLast color="#422AFB"/>}
          </button>
        </div>
        <SideBarContext.Provider value={{expanded, updateExpanded}} >
            <ul className='flex-1 px-3'>
            {SideBarItem.map((item, idx) => {
                return <MenuItem key={idx} item={item} />;
            })}
          </ul>
        </SideBarContext.Provider>
          
        
        
        <div className='border-t flex p-3'>
          <img src='https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-xingqiu/sticker_4.png?9958702835a8a1331867987772ad6b30&d=200x200'
          className='w-10 aspect-square rounded-full'/>
          <div className={`overflow-hidden transition-all flex justify-between items-center ${expanded ? "w-32 ml-3":"w-0"}`}>
            <div className='leading-4'>
              <h4 className='font-semibold'>Xingqiu</h4>
              <span className='text-sm text-gray-600'>Xingqiu@gmail.com</span>
            </div>
            <MoreVertical size={20}/>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SideNavBar;

export function MenuItem({ item }: { item: SideNavItem }){
    const {expanded, updateExpanded} = useContext(SideBarContext);
    const pathname = usePathname();
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const toggleSubMenu = () => {
      setSubMenuOpen(!subMenuOpen);
    };
    
    return (
        <div className="">
          {item.submenu ? (
            <>
              <div
                onClick={() => { updateExpanded(); toggleSubMenu()}}
                className={`relative flex items-center p-3 my-1 font-medium rounded-md cursor-pointer transition-colors hover:bg-indigo-50 text-gray-600 ${
                  pathname.includes(item.path) ? 'bg-gradient-to-tr from-indigo-50 to-indigo-100 text-indigo-800' : ''
                }`}
                >
                <div className="flex flex-row  items-center">
                  {item.icon}
                  <span className={`overflow-hidden  ml-3 transition-all ${expanded ? "w-52":"w-0"}`}>{item.title}</span>
                </div>
    
                <div className={`overflow-hidden  transition-all ${expanded ? "w-auto ":"w-0"}${subMenuOpen ? 'rotate-180' : ''}  flex`}>
                    <ChevronDown size={20}  />
                </div>
              </div>
    
              {subMenuOpen && (
                <div className="my-2 ml-12 flex flex-col space-y-4 text-black" >
                  {item.subMenuItems?.map((subItem, idx) => {
                    return (
                      <Link
                        key={idx}
                        href={subItem.path}
                        className={`overflow-hidden transition-all ${expanded ? "w-auto ml-3":"w-0"}${
                          subItem.path === pathname ? 'font-bold' : ''
                        }`}
                      >
                        <span>{subItem.title}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </>
          ) : (
            <Link
              href={item.path}
              className={`relative flex items-center p-3 my-1 font-medium rounded-md cursor-pointer transition-colors hover:bg-indigo-50 text-gray-600 ${
                item.path === pathname ? 'bg-gradient-to-tr from-indigo-50 to-indigo-100 text-indigo-800' : ''
              }`}
            >
              {item.icon}
              <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3":"w-0"}`}>{item.title}</span>
            </Link>
          )}
        </div>
      );
    };

    