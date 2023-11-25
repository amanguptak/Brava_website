"use client";
import { useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
export default function Banner({ slides }) {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex transition  transform  ease-out duration-40`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {/* {slides.map((s) => (
        
            <img src={s}  className="lg:w-fit opacity-70"/>
         
        ))
         
        } */}
        {slides.map((s, index) => (
          <div className=" h-[650px]  bg-black">
            <div
              key={index}
              className=" h-full bg-cover bg-center w-screen opacity-100 text-start"
              style={{ backgroundImage: `url(${s})` }}
            >
              <p className="lg:text-8xl lg:pt-24 lg:px-20 pt-60 px-20 text-4xl text-white font-bold  w-[20%] tracking-wide">
                premium zip hoodies
              </p>
              <button className="mx-20 mt-4 px-5 py-3 rounded-full bg-white  hover:bg-transparent cursor-pointer ">
                shop now
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full ">
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-5 h-5 cursor-pointer  ${
                i == current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
