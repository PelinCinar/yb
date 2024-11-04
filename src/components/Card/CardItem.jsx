import React from "react";
import { useNavigate } from "react-router-dom";

const CardItem = ({ id, title, description, icon }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("Navigating to card with ID:", id);
    navigate(`/card/${id}`, { replace: true });
  };

  return (
    <div
      className="bg-[#5c62f7] text-white p-4 sm:p-6 rounded-lg shadow-lg text-center cursor-pointer flex flex-col justify-between w-full h-full"
      onClick={handleClick}
    >
      {icon && <div className="text-2xl mb-2">{icon}</div>}

      <h2 className="text-lg sm:text-xl font-bold mb-2">{title}</h2>
      <p className="text-sm sm:text-base line-clamp-2">{description}</p>
    </div>
  );
};

export default CardItem;