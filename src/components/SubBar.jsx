import React, { useState } from "react";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SubBar = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  const renderItems = () => {
    const items = ["All", "Armchairs", "SofaChair", "Recliner", "WindsorChair"];

    return items.map((item, index) => (
      <button
        key={index}
        className={`flex justify-center items-center max-sm:p-8 md:text-2xl 
          w-[200px] h-[40px] rounded-full border-2 ${
            selectedItem === index ? "bg-[#D0F47E]" : ""
          }`}
        onClick={() => handleItemClick(index)}
      >
        {item}
      </button>
    ));
  };

  return (
    <div className="flex gap-4 sm:gap-8 my-4 overflow-x-scroll no-scroll max-w-screen-2xl min-w-full">
      <div
        className={`flex justify-center items-center max-sm:p-8 md:text-2xl 
          w-[100px] h-[40px] rounded-full border-2`}
      >
        <FontAwesomeIcon icon={faSliders} />
      </div>
      {renderItems()}
    </div>
  );
};

export default SubBar;
