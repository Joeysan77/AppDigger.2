import { useState } from 'react'
import { Blogo } from './logos.jsx'
import { Menu } from './menu.jsx'

export function Header({platformtext , setPlatformtext , setPlatformi , platformi , platformbg , setPlatformbg}) {
    const [openMenu , setOpenMenu] = useState("hide right-[-100%]") 
    const [openDark , setOpenDark] = useState("hidedark")
       return (
       <>
        <div className="fixed w-full px-[1rem] bg-[rgba(255,255,255,.3)] py-2 shadow-md flex justify-between centerv top-0 z-10 backdrop-blur-md">
      
           <Blogo h="h-10"/>
               <div className="gap-[3rem] flex ">
                   <i onClick={() => {
                setOpenMenu("show right-0 blue ")
                setOpenDark("showdark backdrop-blur-lg")
            }} className="fa fa-bars text-lg"></i>  
            <i  className="fa fa-user text-lg"></i>
               </div>
               
           
          
        </div>
        <Menu
           open={openMenu}
           dark={openDark}
           onClick={() => {
               setOpenDark("hidedark")
               setOpenMenu("hide right-[-100%]")
           }}
           platformtext={platformtext}
           setPlatformtext={setPlatformtext}
           platformi = {platformi}
           setPlatformi = {setPlatformi}
           setPlatformbg = {setPlatformbg}
           platformbg = {platformbg}
           />
        
        </>
    )
}
