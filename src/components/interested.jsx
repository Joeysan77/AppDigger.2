import { useState } from "react";

export function Interested() {
  const labels = [
    "Productivity",
    "Books and References",
    "Finance",
    "Editors Choice",
    "Communication",
    "Sports",
    "Music",
    "Entertainment",
    "Photography",
    "Photo and Video Editors",
    "Social"
  ];

  const icons = [
    "fa-clipboard-list",
    "fa-books",
    "fa-coins",
    "fa-pen",
    "fa-tty",
    "fa-tennis-ball",
    "fa-music",
    "fa-photo-film-music",
    "fa-camera",
    "fa-pen-circle",
    "fa-group"
  ];

  const [active, setActive] = useState([]);

  return (
  <div className="z-20 relative bg-white mt-[2rem] shadow-md rounded-xl p-3 wide">
      <i className="fa fa-xmark text-md absolute left-0 top-0 m-2"></i>
      <p className="mb-3 text-lg font-semibold wide center flex">What are you interested in?</p>
    <div className="flex flex-wrap gap-1 ">
      {labels.map((text, i) => (
        <button
          key={i}
          onClick={() =>
            setActive((prev) =>
              prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
            )
          }
          className={active.includes(i) 
  ? "shadow-sm rounded-md blue  flex center py-[4px] px-3 gap-2 border border-1 border-[#0583f2] m-[5px]" 
  : "shadow-sm rounded-md bluep flex center py-[4px] px-3 gap-2 border border-1 border-[#0583f2] m-[5px]"
}
        >
          <i className={`far m-0 p-0  ${icons[i]} text-sm`}></i>
          <p className="m-0 p-0 text-sm">{text}</p>
        </button>
      ))}
      <button className="ml-2 flex shadow-md text-md px-2 gapp py-1 text-blue rounded-md"><p>More</p><i className="fa fa-arrow-right"></i></button>
    </div>
    <button className="btn purple wide mt-[1.5rem]">Save Changes</button>
 </div>
  );
}
