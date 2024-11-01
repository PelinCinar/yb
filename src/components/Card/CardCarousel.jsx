import React from "react";
import { Link } from "react-router-dom";
import CardItem from "./CardItem";
import cardData from "../../data/cardData";

const CardCarousel = () => {
  return (
    <div className="flex flex-col justify-start items-center  bg-[#101010] p-10">
      <h2 className="text-3xl font-bold text-white mb-10">Hizmetlerimiz</h2> {/* Hizmetlerimiz başlığı */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {cardData.map((card) => (
          <Link to={`/card/${card.id}`} key={card.id}>
            <CardItem
              id={card.id}
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl} // If you want to use imageUrl
              // icon={card.icon}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;
