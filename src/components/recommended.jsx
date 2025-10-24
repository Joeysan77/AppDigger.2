import { useState } from 'react'
import { Rating } from "react-simple-star-rating";


export function Recommended() {
    const [dark , setDark] = useState(false)
    const [image , setImage] = useState("")
    const [simg , setSimg] = useState("")
    const [title , setTitle] = useState("")
    const [make , setMake] = useState("")
    const [age , setAge] = useState("")
    const [rate , setRate] = useState ("")
    const rating = rate
    const [ratep , setRatep] = useState("")
    const [det , setDet] = useState(false)
            return (
    <>
        <div className="mt-[2rem] wide flex justify-between"><p className="text-xl ">Games Recommended for you</p> <i className="fa fa-arrow-right"></i></div>
        
        <div className="mt-[1.5rem] pt-2 pb-4  flex overflow-x-scroll overflowing y-hidden nowrap">
            <Games
     
            image="../big-minecraft.jpg"
            simg="../small-minecraft.jpg"
            text="Minecraft"
            rate="4.5"
            age = '7+'
            make="Mojang ltd"
            onClick={() => {
                setTimeout(() => {
                    setDark(prev => !prev);
                    setRatep("105,777,888")
                    setDet(prev => !prev)
                } , 300)
            }}
            setImage={setImage}
            setSimg={setSimg}
            setTitle={setTitle}
            setAge={setAge}
            setMake={setMake}
            setRate={setRate}
            />
            
            <Games
  image="../big-anger.jpg"
  simg="../small-anger.jpg"
  text="Anger Of Stick 5"
  rate="4.4"
  age="7+"
  make="Button E & M"
  onClick={() => {
    setTimeout(() => {
      setDark(true);
      setDet(true);
      setRatep("87,542,311");
    }, 300);
  }}
  setImage={setImage}
  setSimg={setSimg}
  setTitle={setTitle}
  setAge={setAge}
  setMake={setMake}
  setRate={setRate}
/>

<Games
  image="../big-codm.jpg"
  simg="../small-codm.jpg"
  text="Call of Duty®: Mobile"
  rate="4.5"
  age="12+"
  make="Activision Publishing, Inc"
  onClick={() => {
    setTimeout(() => {
      setDark(true);
      setDet(true);
      setRatep("190,220,876");
    }, 300);
  }}
  setImage={setImage}
  setSimg={setSimg}
  setTitle={setTitle}
  setAge={setAge}
  setMake={setMake}
  setRate={setRate}
/>

<Games
  image="../big-freefire.jpg"
  simg="../small-freefire.jpg"
  text="Garena Free Fire"
  rate="4.7"
  age="12+"
  make="Garena International"
  onClick={() => {
    setTimeout(() => {
      setDark(true);
      setDet(true);
      setRatep("250,874,932");
    }, 300);
  }}
  setImage={setImage}
  setSimg={setSimg}
  setTitle={setTitle}
  setAge={setAge}
  setMake={setMake}
  setRate={setRate}
/>

<Games
  image="../big-camdy.jpg"
  simg="../small-candy.jpg"
  text="Candy Crush SAGA"
  rate="4.7"
  age="12+"
  make="King"
  onClick={() => {
    setTimeout(() => {
      setDark(true);
      setDet(true);
      setRatep("300,654,221");
    }, 300);
  }}
  setImage={setImage}
  setSimg={setSimg}
  setTitle={setTitle}
  setAge={setAge}
  setMake={setMake}
  setRate={setRate}
/>
            
        </div>
        
        <div className={`w-full h-full z-40 fixed top-0 left-0 ${dark ? "showdark backdrop-blur-sm" : "hidedark"}`}
        
         onClick={() => {
                setTimeout(() => {
                    setDark(false)
                    setDet(false)
                } , 300)
            }}>
            
        </div>
        
        
        
        <div className={`fixed bg-[#f0f1f3] p-3 bottom-0 z-40 rounded-t-xl w-full shadow-md ${det ? "show bottom-0" : "hide bottom-[-100%]" }`}>
            <div className="flex center wide"><span className="bg-[rgba(0,0,0,0.5)] p-[2.5px] w-10 rounded"></span></div>
            <div className="line"></div>
            <div className="flex centerv gapp">
                <img src={simg} className ="w-[80px] rounded-xl shadow-md" alt=""/>
                
                <div className="flex flex-col">
                    <p className="text-xl font-semibold">{title}</p>
                    <p className="text-sm text-blue">{make}</p>
                    <p className="gblack text-md">Rated for <p className="inline m-0 ml-2 p-0 text-blue border p-1 rounded">{age}</p></p>
                </div>
            </div>
            
            
            <div className="flex centerv justify-around gapp wide mt-[3rem]">
          <div className="flex flex-col center gblack text-sm">
            <p className="text-4xl text-black mt-1 font-semibold">{rate}</p>
            <div className="flex center">
              {rate}{" "}
              <i className="fa fa-star text-[10px] mb-1 ml-1 mr-2 text-blue"></i>{" "}
              from {ratep}
            </div>
          </div>
          <Rating
            readonly
            initialValue={rating}
            size={30}
            allowFraction
            fillColor="gold"
            className="flex  mt-0"
            SVGclassName="inline-block"
          />
        </div>
      
            
            
            
            <div className="line"></div>
            <button className="btn blue wide">Install Game </button>
        </div>
        </>
    )
}

function Games({setImage , setSimg , setTitle , onClick , age , rate , make ,text , image , simg , setMake , setAge , setRate}) {
    const [hover , setHover] = useState () 
 
    return (
        <div onClick={() => {
            setImage(image)
            setSimg(simg)
            setTitle(text)
            setMake(make)
            setAge(age)
            setRate(rate)
            if (onClick) onClick();
        }} className="wide min-w-[90%] mr-[1.3rem] flex flex-col gapp hover:gap-[1.9rem]">
            <div  className={` bg-[contain] bg-[100%] relative flex-end rounded-xl shadoww asp hover:aspect-[540/303] bg-no-repeat hover:scale-[1.02]`} 
          style={{
    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0), rgb(0,0,0,.9)), url(${image})`
  }}
            >
                <p className="text-2xl text-white wide text-center absolute bottom-0 mb-2 font-semibold">{text}</p>
            </div>
            
            <div className="flex centerv justify-between shadow-md rounded-xl bg-white p-2">
                <div className="flex gapp cemter">
                    <img src={simg} className ="w-[70px] rounded-xl "alt=""/>
                    <div className="m-0 mt-2">
                        <p className="text-md font-semibold my-1">{text}</p>
                        <p className="text-[10px] text-blue font-semibold">{make}</p>
                        <p className="text-sm gblack">{rate} <i className="fa fa-star text-blue text-sm"></i><p className="inline ml-3  p-[2px] pt-[3px] rounded border text-[12px]">{age}</p></p>
                    </div>
                </div>
                
                    <button className="btn blue shadow-md">Play Now</button>
            </div>
        </div>
    )
}
