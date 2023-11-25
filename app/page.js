import React from "react"
import Announcement from "./components/Announcement/Announcement"
import Navbar from "./components/Navbar/Navbar"
import Slideshoow from "./components/SlideShow/Slideshoow"
import ResponsiveNav from "./components/Navbar/ResponsiveNav"
import Banner from "./components/Banner/Banner"

export default function Home() {
  let slides = [
    'https://i.postimg.cc/ZKcxz8Fy/C1.png',
    "https://i.postimg.cc/v8vV4Q1J/C2.png",
    "https://i.postimg.cc/CKDZSYT6/C3.png",
    "https://i.postimg.cc/vHVwPmWj/C4.png",
  ];
  return (
  <div className="">
<Announcement/>
<Navbar/>
<ResponsiveNav/>
<Banner slides={slides} />

<Slideshoow/>

  </div> 
  )
}
// className="bg-[#212122] h-scree