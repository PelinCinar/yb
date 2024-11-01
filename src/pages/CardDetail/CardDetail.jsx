import { useParams } from 'react-router-dom';
import cardData from '../../data/cardData';
import 'antd/dist/antd'; // Ant Design stillerini ekle

const CardDetail = () => {
  const { id } = useParams();
  console.log("Selected card ID:", id); // Burada ID'yi kontrol et

  const card = cardData.find(item => item.id === parseInt(id));

  if (!card) {
    return <h2 className="text-center">Kart bulunamadı!</h2>;
  }

  return (
    <div className="flex min-h-screen bg-[#1e2121]">
      {/* Sol Taraf: Resim */}
      <div className="w-1/2 flex justify-center items-center p-5">
        <img 
          alt={card.title} 
          src={card.imageUrl} 
          className="object-contain min-h-96 w-96" // Görsel boyutunu ayarladık
        />
      </div>
      {/* Sağ Taraf: Başlık ve Açıklama */}
      <div className="w-1/2 bg-[#5c61f774]  p-6 flex flex-col justify-center items-center"> {/* items-center ekledik */}
        <h1 className="text-2xl font-bold mb-2 text-center text-white">{card.title}</h1>
        <p className="text-base text-center text-white">{card.description}</p> {/* Metin ortalanmış */}
      </div>
    </div>
  );
};

export default CardDetail;
