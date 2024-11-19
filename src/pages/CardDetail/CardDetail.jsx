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

  // Detayları render etmek için fonksiyon
  const renderDetails = (detail) => {
    const detailLines = detail.split("\n");
    return detailLines.map((line, index) => (
      <div key={index} className="flex items-center text-white mt-3 text-xl">
        <span className="mr-3 text-[#5c62f7]">→</span> {/* Ok işareti */}
        <p>{line}</p>
      </div>
    ));
  };

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
        <div className="w-1/2 bg-black p-6 flex flex-col justify-center items-center ">
          {/* Display the icon */}
        

          {/* Description */}
          <p className="text-center text-white mt-3 font-mono text-2xl">
            {card.description}
          </p>

          {/* Tag Section: Add tags under the description */}
          <div className="flex flex-wrap mt-8 mb-10 justify-center">
            {card.tags.map((tag, index) => (
              <div key={index} className="m-2 p-4 bg-[#5c62f7] text-white rounded-lg shadow-md  mp-4 ">
                {tag}
              </div>
            ))}
          </div>

          {/* Details Section */}
          <div className="text-white  text-2xl ">
            <h2 className="text-pretty mt-3 bg-[#5c62f7] rounded-md px-2 py-1">Nasıl Çalışıyoruz?</h2>
            {renderDetails(card.detail)}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CardDetail;
