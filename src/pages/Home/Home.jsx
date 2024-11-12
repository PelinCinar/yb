import backgroundImage from '../../assets/Home/home.jpg'; // Arka plan resmi
import CardCarousel from '../../components/Card/CardCarousel'; // Kart karuseli bileşeni
import About from '../About/About';
import FAQPage from '../FAQPage/FAQPage';

const Home = () => {
  return (
    <div>
      <div
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center px-4 md:px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              YB Ekibi Sizler İçin Çalışıyor
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Sizi en iyi şekilde desteklemek için buradayız. Hizmetlerimizle ilgili daha fazla bilgi edinmek için menüyü kullanabilirsiniz.
            </p>
          </div>
        </div>
      </div>

      <div> 
      <CardCarousel />
      <FAQPage/>
      <About />
      </div>

    </div>
  );
};

export default Home;
