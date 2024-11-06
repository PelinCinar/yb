import { useParams } from "react-router-dom";
import cardData from "../../data/cardData";
import "antd/dist/antd"; // Ant Design styles
import Footer from "../Footer/Footer";

const CardDetail = () => {
  const { id } = useParams();
  const card = cardData.find((item) => item.id === parseInt(id));

  if (!card) {
    return <h2 className="text-center">Kart bulunamadı!</h2>;
  }

  return (
    <div>
      <div className="flex min-h-screen bg-[#5c62f7]">
        {/* Left side: Title */}
        <div className="w-1/2 flex justify-center items-center p-10">
          <h1 className="text-7xl font-bold text-white text-center">
            {card.title}
          </h1>
        </div>

        {/* Right side: Icon, Description, and Details */}
        <div className="w-1/2 bg-black p-6 flex flex-col justify-center items-center">
          {/* Display the icon */}
          <div className="text-[#5c62f7] text-6xl mb-4">
            <card.icon />
          </div>

          {/* Description */}
          <p className="text-center text-white mb-18 font-mono text-2xl">
            {card.description}
          </p>

          {/* Details */}
          <div className="text-white mt-16 text-2xl mt">
            <h2 className="text-pretty mt-3 ">Detaylar:</h2>
            <p>{card.detail}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CardDetail;
