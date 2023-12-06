import React, { useState } from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Card = ({ image, title, subtitle, price, colorArray }) => {
  const [like, setLike] = useState(false);
  const handleLike = () => {
    console.log("like");
    setLike(!like);
  };

  return (
    <div>
      <div className="rounded-3xl bg-slate-200 w-[400px] h-[490px] md:w-[500px]  md:h-[600px]  flex flex-col mx-auto ">
        <div className="w-3/4 h-3/4 flex justify-center mx-auto mt-8 p-1">
          <img
            className="flex w-full h-full justify-center mx-auto object-contain"
            src={`/images/${image}.png`}
            height={200}
            width={200}
          ></img>
        </div>
        <button
          onClick={handleLike}
          className="h-12 w-12 absolute  rounded-full bg-white flex justify-center items-center mt-4 md:ml-[430px] ml-[340px]"
        >
          <svg
            
            xmlns="http://www.w3.org/2000/svg"
            fill={like ? "red" : "none"}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke={like ? "red" : "currentColor"}
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>
        <div className="flex flex-col py-6">
          <div className="flex justify-between md:px-5 px-3">
            <div className="text-3xl flex font-bold items-start">{title}</div>
            <div className="flex text-4xl font-bold items-center justify-center">
              {price}
            </div>
          </div>
          <div className="text-2xl opacity-50 flex justify-start px-3 md:px-5 items-center">
            {subtitle}
          </div>
          <div className="absolute flex md:ml-[435px]  max-sm:right-10 mt-14">
            <div
              className={`w-5 z-10 h-5 rounded-full ${colorArray[0]} `}
            ></div>
            <div
              className={`w-5 h-5 z-20 rounded-full ${colorArray[1]} -ml-2 `}
            ></div>
            <div
              className={`w-5 h-5 z-30 rounded-full ${colorArray[2]} -ml-2 `}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
