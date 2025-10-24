import { useState, useEffect } from "react";
import { Rating } from "react-simple-star-rating";

export function Suggested() {
  const [bimg, setBimg] = useState("");
  const [title, setTitle] = useState("");
  const [make, setMake] = useState("");
  const [rate, setRate] = useState();
  const [down, setDown] = useState();
  const [ag, setAg] = useState("");
  const [desc, setDesc] = useState();
  const [show, setShow] = useState("hide right-[100%]");
  const rating = rate;
  const [size, setSize] = useState("");
  const [ratep, setRatep] = useState("");

  // 🔹 Handle Android back button
  useEffect(() => {
    const handleBack = () => {
      if (show.includes("show")) {
        setShow("hide right-[100%]");
        // re-push state to trap user inside until panel is closed
        window.history.pushState(null, "", window.location.href);
      }
    };

    window.addEventListener("popstate", handleBack);
    return () => window.removeEventListener("popstate", handleBack);
  }, [show]);

  return (
    <div className="mt-[2.5rem]">
      <div className="flex text-lg wide justify-between">
        <p>Suggested for you</p>
        <i className="fa fa-arrow-right"></i>
      </div>

      {/* Overlay Panel */}
      <div className={`fixed w-full h-full z-40 top-0 p-3 bg-[#f0f1f3] ${show}`}>
        <i
          className="fa fa-xmark fixed top-0 left-0 text-xl m-3"
          onClick={() => setShow("hide right-[100%]")}
        ></i>

        <p className="text-center wide text-xl font-semibold">{title}</p>

        <div className="flex gapp mt-[2rem]">
          <img
            src={bimg}
            alt=""
            className="hover:scale-105 border p-2 shadoww bg-white rounded-2xl w-[100px]"
          />
          <div className="flex flex-col center">
            <p className="text-lg">{title}</p>
            <p className="text-blue text-sm">{make}</p>
          </div>
        </div>

        <div className="w-fullw p-2 mt-[1rem] flex centerv justify-between gap-0 ">
          <div className="flex border-r flex-1 flex-col center">
            <p className="text-md font-semibold">Reviews</p>
            <div className="flex center gap-2">
              <p className="text-sm m-0 p-0 mt-1">{rate}</p>
              <i className="fa fa-star text-blue text-sm m-0 p-0 "></i>
            </div>
          </div>
          <div className="flex-1 flex border-l border-r flex-col center m-0">
            <p className="text-md font-semibold">Downloads</p>
            <div className="flex center gap-2">
              <p className="text-sm mt-1">{down}</p>
            </div>
          </div>
          <div className="flex flex-1 flex-col center border-l">
            <p className="text-md font-semibold">Rated for {ag}</p>
            <div className="flex center gap-2">
              <p className="text-[10px] font-semibold bg-white p-1 rounded shadow-sm">
                {ag}
              </p>
            </div>
          </div>
        </div>

        <button className="relative btn wide blue flex center shadow-md gap-[2rem] mt-[1rem]">
          <p>Download </p>
          <i className="fa fa-download "></i>
          <p className=" absolute right-0 top-0 m-1 p-1 pl-3 rounded-r-xl font-[500] text-md border-l border-[rgba(255,255,255,.2)] pr-2">
            {size}MB
          </p>
        </button>

        <p className="text-xl wide font-semibold mt-[3rem]">{title}</p>
        <p className="text-sm wide gblack">{desc}</p>

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
      </div>

      {/* Apps List */}
      <div className="flex nowrap p-4 overflow-y-hidden overflow-x-scroll gap-5 mt-[.5rem]">
        <Apps
          src="../samsung_internet.png"
          title="Samsung Internet"
          desc="The secure, private and optimized mobile web browser from Samsung"
          setBimg={setBimg}
          setTitle={setTitle}
          setDesc={setDesc}
          onClick={() => {
            setMake("Samsung Electronics Co , Limited ");
            setRate("4.6");
            setDown("1B+");
            setAg("3+");
            setSize("104");
            setRatep("5,562,242");
            setTimeout(() => {
              setShow("show right-0");
              window.history.pushState({ panel: true }, "");
            }, 400);
          }}
        />

        <Apps
          src="../pinterest.png"
          title="Pinterest"
          desc="One destination for a world of inspiration"
          setBimg={setBimg}
          setTitle={setTitle}
          setDesc={setDesc}
          onClick={() => {
            setMake("Pinterest , Co");
            setRate("4.5");
            setDown("1B+");
            setAg("12+");
            setSize("17");
            setRatep("10,242,546");
            setTimeout(() => {
              setShow("show right-0");
              window.history.pushState({ panel: true }, "");
            }, 400);
          }}
        />

        <Apps
          src="../snapchat.png"
          title="Snapchat"
          desc="Snapchat is a fast and fun way to share the moment with your friends and family"
          setBimg={setBimg}
          setTitle={setTitle}
          setDesc={setDesc}
          onClick={() => {
            setMake("Snap Inc");
            setRate("4.4");
            setDown("1B+");
            setAg("12+");
            setSize("29");
            setRatep("36,413,516");
            setTimeout(() => {
              setShow("show right-0");
              window.history.pushState({ panel: true }, "");
            }, 400);
          }}
        />

        <Apps
          src="../phoenix.png"
          title="Phoenix Browser"
          desc="Downloader, Status saver, Private, Fast & data-saving browser"
          setBimg={setBimg}
          setTitle={setTitle}
          setDesc={setDesc}
          onClick={() => {
            setMake("Colorful Point");
            setRate("4.3");
            setDown("1B+");
            setSize(21);
            setAg("16+");
            setRatep("4,777,642");
            setTimeout(() => {
              setShow("show right-0");
              window.history.pushState({ panel: true }, "");
            }, 400);
          }}
        />

        <Apps
          src="../temu.png"
          title="Temu"
          desc="Download Temu today and enjoy incredible deals daily"
          setBimg={setBimg}
          setTitle={setTitle}
          setDesc={setDesc}
          onClick={() => {
            setMake("Temu");
            setRate("4.4");
            setDown("500M+");
            setAg("12+");
            setSize(15);
            setRatep("9,286,834");
            setTimeout(() => {
              setShow("show right-0");
              window.history.pushState({ panel: true }, "");
            }, 400);
          }}
        />

        <Apps
          src="../tiktok.png"
          title="Tiktok"
          desc="TikTok to make create and browse on our app faster and better than ever."
          setBimg={setBimg}
          setTitle={setTitle}
          setDesc={setDesc}
          onClick={() => {
            setMake("TikTok Pte , Limited");
            setRate("4.4");
            setDown("1B+");
            setAg("12+");
            setSize("66");
            setRatep("64,329,458");
            setTimeout(() => {
              setShow("show right-0");
              window.history.pushState({ panel: true }, "");
            }, 400);
          }}
        />

        <Apps
          src="../chatgpt.png"
          title="Chatgpt"
          desc="This official app is free, brings you the latest from OpenAI"
          setBimg={setBimg}
          setTitle={setTitle}
          setDesc={setDesc}
          onClick={() => {
            setMake("Open Ai");
            setRate("4.6");
            setDown("500M+");
            setAg("12+");
            setRatep("27,354,460");
            setSize(13);
            setTimeout(() => {
              setShow("show right-0");
              window.history.pushState({ panel: true }, "");
            }, 400);
          }}
        />
        
        
          <Apps
          src="../facebook.png"
          title="Facebook"
          desc="Explore the things you love , Explore and expand your interests"
          setBimg={setBimg}
          setTitle={setTitle}
          setDesc={setDesc}
          onClick={() => {
            setMake("Meta Platforms, INC");
            setRate("4.5");
            setDown("10B+");
            setAg("12+");
            setRatep("167,354,460");
            setSize(81);
            setTimeout(() => {
              setShow("show right-0");
              window.history.pushState({ panel: true }, "");
            }, 400);
          }}
        />
        
        
        <Apps
          src="../xender.png"
          title="Xender - Share Music Transfer"
          desc="Share Music,share Video,Share Photo,Share It,Share Movie,File Sharing"
          setBimg={setBimg}
          setTitle={setTitle}
          setDesc={setDesc}
          onClick={() => {
            setMake("Xender File Sharing Team");
            setRate("4.5");
            setDown("500M+");
            setAg("3+");
            setRatep("4,354,460");
            setSize(17);
            setTimeout(() => {
              setShow("show right-0");
              window.history.pushState({ panel: true }, "");
            }, 400);
          }}
        />
        
      </div>
    </div>
  );
}

function Apps({ src, title, desc, setBimg, setTitle, onClick, setDesc }) {
  return (
    <div
      onClick={() => {
        setBimg(src);
        setTitle(title);
        setDesc(desc);
        if (onClick) onClick();
      }}
      className="hover:scale-105 bg-white min-w-[100%] shadoww gapp flex p-2 rounded-xl"
    >
      <img className="rounded-2xl w-20 max-h-20" src={src} alt="" />
      <div className="flex center flex-col">
        <p className="text-lg font-550">{title}</p>
        <p className="text-sm gblack">{desc}</p>
      </div>
    </div>
  );
}
