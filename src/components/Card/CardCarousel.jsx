import React from "react";
import { Link } from "react-router-dom";
import CardItem from "./CardItem";
import cardData from "../../data/cardData";

const CardCarousel = () => {
  return (
    <div className="w-full bg-[#101010] py-20 px-10">
      <h2 className="text-4xl font-bold text-white mb-28 text-center">Hizmetlerimiz</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-screen-xl mx-auto px-4">
        {cardData.map((card) => (
          <Link to={`/card/${card.id}`} key={card.id}>
            <CardItem
              id={card.id}
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
              // icon={card.icon}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;
