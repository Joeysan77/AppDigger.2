import { useState } from 'react'

export function NavBar() {
    
    const [active , setActive] = useState("home")
        
    return (
        <div className="w-full fixed bottom-0 my-5 flex z-30 center gap-5">
            <div className="flex gap-8 py-1 px-4  bg-white/70 backdrop-blur-xl rounded-full shadoww">
                
                <Button 
                icon="fa-home"
                text="Home"
                active={active === "home"}
                onClick={() => {
                    setActive("home")
                }}
                />
                
                <Button 
                icon="fa-grid-2"
                text="Apps"
                active={active === "apps"}
                onClick={() => {
                    setActive("apps")
                }}
                />
                
                <Button 
                icon="fa-gamepad"
                text="Games"
                active={active === "games"}
                onClick={() => {
                    setActive("games")
                }}
                />
                
            </div>
            
            <div className="green blueshadow px-5 py-4 rounded-full">
                <i className="fas fa-search p-1">Sammy</i>
            </div>
            
        </div>
    )
}

function Button({ icon , active , text , onClick }) {
    return (
        <div 
        onClick={onClick}
        className={` flex flex-col center rounded-full p-1 ${active ? "text-blue " : ""}`}>
            <i className={`${active ? "fas" : "fal"} ${icon}`}></i>
            <p className={active ? "font-medium" : "font"}>{text}</p>
        </div>
    )
}