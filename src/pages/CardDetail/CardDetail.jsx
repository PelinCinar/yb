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
      <div className="flex flex-col lg:flex-row min-h-screen bg-[#5c62f7] lg:w-full  lg:mt-0">
        {/* Sol Kısım: Başlık */}
        <div className="w-full lg:w-1/2 flex justify-center items-center p-24 mt-4 mb-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center">
            {card.title}
          </h1>
        </div>

        {/* Sağ Kısım: İkon, Açıklama, ve Detaylar */}
        <div className="w-full lg:w-full  bg-black flex flex-col justify-center items-center lg:mt-0">
        {/* Açıklama */}
          <p className="text-center text-white mt-28 font-mono text-xl sm:text-2xl">
            {card.description}
          </p>

          {/* Etiketler Bölümü */}
          <div className="flex flex-wrap mt-8 mb-10 justify-center">
            {card.tags.map((tag, index) => (
              <div
                key={index}
                className="m-2 p-4 bg-[#5c62f7] text-white rounded-lg shadow-md"
              >
                {tag}
              </div>
            ))}
          </div>

          {/* Detaylar Bölümü */}
         {/* Detaylar Bölümü */}
         <div className="text-white text-xl mt-5">
  <h2 className="bg-[#5c62f7] text-pretty rounded-md px-2 py-2 sm:px-1 sm:py-1 lg:px-8 lg:py-4 xl:px-10 xl:py-5 sm:m-5">
    Nasıl Çalışıyoruz?
  </h2>
  <div className="p-7 mx-4 sm:mx-6 lg:mx-8 xl:mx-12">
    {renderDetails(card.detail)}
  </div>
</div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CardDetail;
