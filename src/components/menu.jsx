import { useState } from "react"

export function Menu({open , dark , onClick , platformtext , setPlatformtext , platformi , setPlatformi , platformbg , setPlatformbg}) {

    const [height , setHeight] = useState(false)   
    const [opeen , setOpeen] = useState(false) 
    const [active , setActive] = useState("home")
    return (
    <>
    
    <div onClick={() => {
            if (onClick) onClick();
            
        }} className={`${dark} bg-[rgba(0,0,0,0.6)] left-0 z-40 w-full top-0 fixed h-[100%]`}>
            
        </div>
        
        
        <div className={`${open} bg-[#f0f1f3] top-0 fixed overflow-Y-auto h-full w-[70%] rounded-l-2xl z-50`}>
            <i onClick={() => {
                if (onClick) onClick();
            }} className="fa fa-chevron-left absolute text-lg top-0 left-0 text-black m-3 mt-2"></i>
            
            <div className="flex mt-[2rem] flex-col center">
                <img src="../user.png" alt="" className="max-w-[90px] rounded-full  border"/>
                <p className="text-sm mt-3 text-black font-semibold">Log in to continue..</p>
                <div className="flex gapp mt-[.3rem] w-full center">
                    <button className=" bluep py-0 px-3 rounded-md border border-[#0583f2] shadow">Sign up</button>
                    <button className="py-0 px-3 blue border border-[#0583f2] rounded-md shadow">Log in</button>
                </div>
            </div>
            
            <div className="line"></div>
            
            
            
            
            
            
             <div className="wide mt-0">
                <div onClick={() => {
                    setHeight(prev => !prev)
                }}  className={`${platformbg} shadoww flex centerv py-1 px-8 justify-between rounded-xl mt-[1.5rem]`}>
                    <i className={`fab ${platformi} text-2xl`}></i>
                    <p className="text-xl">{platformtext}</p>
                    <i className={`fa fa-chevron-left text-sm ${height ? "transform -rotate-90 text-white" : "transform rotate-0 gwhite"}`}></i>
                </div>
            </div>
            
            <div className={` center mt-2 wide py-2 rounded-xl overflow-hidden ${height ? "max-h-[220px] opacity-100 bg-white shadoww my-3" : "max-h-0 opacity-0 p-0 mt-0"} `}>
                <Plat 
                text="Android"
                pi="fa-android greenp"
                onClick={() => {
                    setPlatformbg("green")
                    setPlatformi("fa-android")
                    setPlatformtext("Android")
                    setHeight(false)
                }}
                
                />
                
                <Plat 
                text="Windows"
                pi="fa-windows text-blue"
                
                onClick={() => {
                    setPlatformbg("blue")
                    setPlatformi("fa-windows")
                    setPlatformtext("Windows")
                    setHeight(false)
                }}
                
                />
                
                <Plat 
                text="Mac Os"
                pi="fa-apple text-black"
                
                onClick={() => {
                    setPlatformbg("black")
                    setPlatformi("fa-apple")
                    setPlatformtext("Mac Os")
                    setHeight(false)
                }}
                
                />
                
                <Plat 
                text="Linux"
                pi="fa-linux purplep"
                
                onClick={() => {
                    setPlatformbg("purple")
                    setPlatformi("fa-linux")
                    setPlatformtext("Linux")
                    setHeight(false)
                }}
                
                />
            </div>
            
            
            
            
              <div className="liner"></div>
            
            
            
            
            
            <div className="wide flex flex-col rounded-xl p-2 gap-2 pb-0">
               <Button
  clas="fa-user"
  text="Account"
  active={active === "account"}
  onClick={() => setActive("account")}
/>

<Button
  clas="fa-home"
  text="Home"
  active={active === "home"}
  onClick={() => setActive("home")}
/>

<Button
  clas="fa-grid-2"
  text="Apps"
  active={active === "apps"}
  onClick={() => setActive("apps")}
/>

<Button
  clas="fa-gamepad-modern"
  text="Games"
  active={active === "games"}
  onClick={() => setActive("games")}
/>

<Button
  clas="fa-credit-card"
  text="Payment info"
  active={active === "payment"}
  onClick={() => setActive("payment")}
/>

<Button
  clas="fa-folder"
  text="Library"
  active={active === "library"}
  onClick={() => setActive("library")}
/>

<Button
  clas="fa-gear"
  text="Settings"
  active={active === "settings"}
  onClick={() => setActive("settings")}
/>
                
            </div>
            
          
            
           
        
            
            
            
        </div>
        
        
        
        
        
        
    </>
    )
}

function Button({clas , text , className , active , onClick }){
    return (
        <button
        onClick={onClick}
         className={`text-black flex centerv px-3 py-2 rounded-lg ${className} ${active ? "shadoww bg-white" : ""}`}>
            <i className={`fas ${clas} max-w-2 min-w-2 w-2 pl-2 flex gblack center`}></i>
            <p className="ml-[1.5rem] font-medium">{text}</p>
        </button>
    )
}

function Plat({pi , text , bg , onClick }){
    return (
        <button 
        onClick={() => {
            if (onClick) onClick();
        }}
         className={` rounded-xl flex wide centerv gap-1 p-2 `}>
            <i className={`fab ${pi}  max-w-2 min-w-2 w-2 text-xl flex center`}></i>
            <p className=" text-black ml-[1.25rem] my-1 font-medium">{text}</p>
        </button>
    )
}
