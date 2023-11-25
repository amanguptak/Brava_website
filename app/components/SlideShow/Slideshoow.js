import React from "react";
import styles from "./slide.module.css";
import Image from "next/image";
import img1 from "@/public/images/1.png";
import img2 from "@/public/images/2.png";
import img3 from "@/public/images/3.png";
import img4 from "@/public/images/4.png";
import img5 from "@/public/images/5.png";
import img6 from "@/public/images/6.png";
const Slideshoow = () => {
  return (
    <div className="lg:mt-24 mt-8">
      <div className={styles.slider}>
<div className={styles.slideTrack}>

        <div className={`${styles.slide}`}>
          <div className="card bg-[#09202d] p-3  m-2 flex justify-between w-full h-full rounded-l-full  ">
            <Image
              src={img1}
              height={100}
              width={100}
              className="h-fit w-fit rounded-l-full "
            />
            <div className="flex flex-col justify-around font-extrabold text-xl mx-2">
              <span>bitfins</span>
              <span className="underline underline-offset-2">shop now</span>
            </div>
          </div>
        </div>

        <div className={styles.slide}>
          <div className="card bg-[#09202d] p-3 m-2 flex justify-between w-full h-full rounded-l-full  ">
            <Image
              src={img2}
              height={100}
              width={100}
              className="h-fit w-fit rounded-l-full "
            />
            <div className="flex flex-col justify-around font-extrabold text-xl mx-2">
              <span>bitfins</span>
              <span className="underline underline-offset-2">shop now</span>
            </div>
          </div>
        </div>

        <div className={styles.slide}>
          <div className="card bg-gray-950 p-3 m-2 flex justify-between w-full h-full rounded-l-full  ">
            <Image
              src={img3}
              height={100}
              width={100}
              className="h-fit w-fit rounded-l-full "
            />
            <div className="flex flex-col justify-around font-extrabold text-xl mx-2">
              <span className="flex">future fest</span>
              <span className="underline underline-offset-2">shop now</span>
            </div>
          </div>
        </div>

        <div className={styles.slide}>
          <div className="card bg-[#236bd3] p-3 m-2 flex justify-between w-full h-full rounded-l-full  ">
            <Image
              src={img4}
              height={100}
              width={100}
              className="h-fit w-fit rounded-l-full "
            />
            <div className="flex flex-col justify-around font-extrabold text-xl mx-2">
              <span>$husky</span>
              <span className="underline underline-offset-2">shop now</span>
            </div>
          </div>
        </div>

        <div className={styles.slide}>
          <div className="card bg-gray-950 p-3 m-2 flex justify-between w-full h-full rounded-l-full  ">
            <Image
              src={img5}
              height={100}
              width={100}
              className="h-fit w-fit rounded-l-full "
            />
            <div className="flex flex-col justify-around font-extrabold text-xl mx-2">
              <span>bitfins</span>
              <span className="underline underline-offset-2">shop now</span>
            </div>
          </div>
        </div>

        <div className={styles.slide}>
          <div className="card bg-[#09202d] p-3 m-2 flex justify-between w-full h-full rounded-l-full  ">
            <Image
              src={img6}
              height={100}
              width={100}
              className="h-fit w-fit rounded-l-full "
            />
            <div className="flex flex-col justify-around font-extrabold text-xl mx-2">
              <span>bitfins</span>
              <span className="underline underline-offset-2">shop now</span>
            </div>
          </div>
        </div>

        </div>
      </div>
    
    
    </div>

  );
};

export default Slideshoow;
