import React from "react";
import { useNavigate } from "react-router-dom";


const CardItem = ({ id, title, description, icon }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("Navigating to card with ID:", id); // ID'yi kontrol et
    setDetailVisible(true);

    navigate(`/card/${id}`, { replace: true });
  };

  return (
    <div
      className="bg-[#5c62f7] text-white p-6 rounded-lg shadow-lg text-center cursor-pointer"
      onClick={handleClick}
    >
      {/* <div className="text-2xl mr-2">{icon}</div>  */}

      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-base">{description}</p>
    </div>
  );
};

export default CardItem;
