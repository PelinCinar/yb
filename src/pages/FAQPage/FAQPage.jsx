import Accordion from "../../components/Accordion/Accordion"; // Accordion bileşenini import et
import faqData from "../../data/faqData"; // SSS verilerini import et

const FAQPage = () => {
  return (
    <div className="p-5 ">
      <h1 className="text-3xl font-bold mb-5 text-center">
        Sıkça Sorulan Sorular
      </h1>
      <p className="text-center mb-5">
        YB digital olarak sizlere hızla gelişen bu süreçte, sistemleri daha
        etkin ve verimli kullanabilmeniz için web tasarım, yazılım geliştirme,
        mobil uygulama geliştirme, dijital pazarlama çözümleri ve sosyal medya
        yönetim çözümleri sunuyoruz. Neredeyse bütün hizmetlerin dijital dünyaya
        yelken açmasıyla birlikte mobil uygulama hizmetinden web geliştirme
        hizmetine kadar tüm taleplerinizde bireysel ve kurumsal yazılım
        çözümleri üretiyoruz.
      </p>
      <Accordion data={faqData} />
    </div>
  );
};

export default FAQPage;
