// CardItem.js
import React from "react";
import { useNavigate } from "react-router-dom";

const CardItem = ({ id, title, description, icon: Icon }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("Navigating to card with ID:", id);
    navigate(`/card/${id}`, { replace: true });
  };

  return (
    <div
      className="bg-[#5c62f7] text-white p-4 sm:p-6 rounded-lg shadow-lg text-center cursor-pointer flex flex-row items-center w-full h-full"
      onClick={handleClick}
    >
      {Icon && (
        <div className="text-3xl mb-2 mr-4"> 
          <Icon />
        </div>
      )}
      <div className="flex flex-col justify-between w-full">
        <h2 className="text-lg sm:text-xl font-bold mb-2">{title}</h2>
        <p className="text-sm sm:text-base line-clamp-2">{description}</p>
      </div>
    </div>
  );
};

export default CardItem;
