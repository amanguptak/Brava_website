import React from "react"
import Announcement from "./components/Announcement/Announcement"
import Navbar from "./components/Navbar/Navbar"
import Slideshoow from "./components/SlideShow/Slideshoow"
import ResNav from "./components/Navbar/resnav"
export default function Home() {
  return (
  <div className="">
<Announcement/>
<Navbar/>
<ResNav/>
{/* <Slideshoow/> */}

  </div> 
  )
}
// className="bg-[#212122] h-scree