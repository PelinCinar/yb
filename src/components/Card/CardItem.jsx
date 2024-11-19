import React from "react";
import { useNavigate } from "react-router-dom";

const CardItem = ({ id, title, description, icon: Icon, subtitle, reasons, callToAction }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("Navigating to card with ID:", id);
    navigate(`/card/${id}`, { replace: true });
  };

  return (
    <div
      className="bg-[#5c62f7] text-white p-4 sm:p-6 rounded-lg shadow-lg text-center cursor-pointer flex flex-col items-start w-full h-full"
      onClick={handleClick}
    >
      {/* Icon */}
      {Icon && (
        <div className="text-3xl mb-4 self-center"> 
          <Icon />
        </div>
      )}

      {/* Title */}
      <h2 className="text-lg sm:text-xl font-bold mb-2">{title}</h2>

      {/* Subtitle */}
      {subtitle && <h3 className="text-sm sm:text-base font-medium italic mb-2">{subtitle}</h3>}

      {/* Description */}
      <p className="text-sm sm:text-base mb-4 line-clamp-3">{description}</p>

      {/* Reasons */}
    
      {/* <div className="text-white mt-16 text-2xl mt">
            <h2 className="text-pretty mt-3">Detaylar:</h2>
            <ul>
              {card.reasons.map((reason, index) => (
                <li key={index}>{reason}</li>
              ))}
            </ul>
          </div> */}
      {/* Call to Action */}
      {callToAction && (
        <p className="text-xs sm:text-sm font-bold italic mt-auto">
          {callToAction}
        </p>
      )}
    </div>
  );
};

export default CardItem;
