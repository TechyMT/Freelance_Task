import React from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Card = ({ image, title, subtitle, price, colorArray }) =>
{
    console.log(colorArray)
  return (
    <div>
      <div className="rounded-3xl bg-slate-200 md:w-[500px] h-[450px] md:h-1/2 flex flex-col mx-auto ">
        <div className="w-3/4 h-3/4 flex justify-center mx-auto mt-8">
          <img
            className="flex w-auto h-auto justify-center mx-auto"
            src={`/images/${image}.png`}
                      height={200}
                        width={200}
          ></img>
        </div>
        <div className="h-12 w-12 absolute  rounded-full bg-white flex justify-center items-center mt-4 md:ml-[430px] ml-[340px]">
          <FontAwesomeIcon icon={faHeart} className="text-red-500 text-2xl" />
        </div>
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
