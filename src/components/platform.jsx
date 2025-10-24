import { useState } from 'react'

export function Platform({ platformtext , setPlatformtext , platformi , setPlatformi , platformbg , setPlatformbg }) {
    
    const [platformdiv , setPlatformdiv] = useState(false)

    return (
        <div className="flex relative w-full p-1 m-0 bg-[rgba(0,0,0,0.5)] text-white centerv centerh">
            
            
            <p className="m-0 p-0 text-sm">A large selection of Apps/Games for </p> <p onClick={() => {
                setPlatformdiv(prev => !prev)
            }} className={`text-md shadoww hover:scale-105 ${platformbg} pl-2 pr-2 rounded ml-2`}>{platformtext}
            <i className={`fa-brands ${platformi} m-0 p-0 ml-3 text-lg`}></i></p>
            
            
            <div className={`bablur z-10 absolute top-10 right-5 p-3 shadoww bgrey rounded-xl ${platformdiv ? "show" : "hide"}`}>
                
                <button onClick={() => {
                    setPlatformtext("Windows");
                    setPlatformdiv(prev => !prev)
                    setPlatformi("fa-windows")
                    setPlatformbg("blue")
                }} className="blue w-[120px] justify-between flex btn"><p>Windows</p><i className="fab fa-windows"></i></button>
                
                <button onClick={() => {
                    setPlatformtext("Apple");
                    setPlatformdiv(prev => !prev)
                    setPlatformi("fa-apple")
                    setPlatformbg("black")
                }}  className="mt-3 black w-[120px] justify-between flex btn"><p>Mac Os</p><i className="fab fa-apple "></i></button>
                
                <button onClick={() => {
                    setPlatformtext("Android");
                    setPlatformdiv(prev => !prev)
                    setPlatformi("fa-android")
                    setPlatformbg("green")
                }}  className="mt-3 green w-[120px]  justify-between flex btn"><p>Android</p><i className="fab fa-android "></i></button>
                
                <button onClick={() => {
                    setPlatformtext("Linux");
                    setPlatformdiv(prev => !prev)
                    setPlatformi("fa-linux")
                    setPlatformbg("purple")
                }}  className="mt-3 purple w-[120px]  justify-between flex btn"><p>Linux</p><i className="fab fa-linux "></i></button>
                
            </div>
        </div>
    )
}