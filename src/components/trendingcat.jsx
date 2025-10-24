import { useState } from 'react'

export function Trendingcat() {
    const [tren , setTren] = useState("show relative")    
    return (
        <div className={` wide rounded-xl mt-[2.5rem]  p-3 shadow-md bg-white ${tren}`}>
            <i onClick={() => {
                setTren("hide")
            }} className="fa fa-xmark text-lg absolute top-0 left-0 m-2"></i>
            <p className=" wide text-lg text-center font-semibold">Trending Categories</p>
            
             <div class="grid grid-cols-2 gap-4 mt-4 pb-1  ">
  <div className="blue p-4 flex text-center center gap-4 rounded-xl shadow-md"><i class="fa-solid fa-screwdriver-wrench text-2xl "></i> <p className="text-lg">Tools</p></div>
  
  <div className="shadow-md blue bg-[#E91E63] p-4 flex text-center center gap-4 rounded-xl"><i class="fa-solid fa-spa text-2xl "></i> <p className="text-lg">Beauty</p></div>
  
  <div className="shadow-md text-white bg-[#212121] p-4 flex text-center center gap-4 rounded-xl"><i class="fa-solid fa-camera text-2xl "></i> <p className="text-lg">Photography</p></div>
  
  <div className="shadow-md text-white bg-[hotpink] p-4 flex text-center center gap-4 rounded-xl"><i class="fa-solid fa-heart text-2xl "></i> <p className="text-lg">Dating</p></div>
  
  
</div>
        </div>
    )
}