import {
  FaCode,
  FaPaintBrush,
  FaMobileAlt,
  FaChartLine,
  FaSearch,
  FaShoppingCart,
  FaGamepad,
  FaCloud,
} from "react-icons/fa";
import yb from "../assets/yb.png";

const cardData = [
  {
    id: 1,
    title: "Yazılım Geliştirme",
    description: "İhtiyacınıza uygun özel yazılım çözümleri sunuyoruz.",
    image: yb,
    link: "yazilim-gelistirme",
    icon: FaCode, // Add icon reference here
    detail: `Yazılım geliştirme, bir yazılım sisteminin tüm aşamalarını kapsayan kapsamlı bir süreçtir...`,
  },
  {
    id: 2,
    title: "Web Tasarımı",
    description: "Modern ve kullanıcı dostu web siteleri tasarlıyoruz.",
    imageUrl: "https://i.pinimg.com/236x/16/aa/f0/16aaf08c6bea384f971bdd1eaec1109a.jpg",
    link: "web-tasarimi",
    icon: FaPaintBrush, // Add icon reference here
    detail: `Web tasarımı, kullanıcı deneyimini ön planda tutarak estetik ve işlevsel siteler oluşturmayı gerektirir...`,
  },
  {
    id: 3,
    title: "Mobil Uygulama Tasarımı",
    description: "İnovatif ve yüksek modelli mobil uygulamalar geliştiriyoruz.",
    imageUrl: "https://i.pinimg.com/236x/4f/fc/67/4ffc67e165ec43882f5ff005ec261aeb.jpg",
    link: "mobil-uygulama",
    icon: FaMobileAlt,
    detail: `Mobil yazılım geliştirme, kullanıcıların akıllı telefon ve tabletlerde en iyi deneyimi yaşamasını sağlamak için tasarlanmıştır...`,
  },
  {
    id: 4,
    title: "Veri Analizi",
    description: "Veri analizi ve raporlama hizmetleri sunuyoruz.",
    imageUrl: "https://i.pinimg.com/236x/44/99/cc/4499ccbb9b1044dc83d45f5e022bd4af.jpg",
    link: "veri-analizi",
    icon: FaChartLine,
    detail: `Veri analizi, iş kararlarınızı daha sağlıklı bir şekilde vermeniz için gereklidir...`,
  },
  {
    id: 5,
    title: "SEO Danışmanlığı",
    description: "Web sitenizin görünürlüğünü artırmak için SEO danışmanlığı hizmeti veriyoruz.",
    imageUrl: "https://i.pinimg.com/236x/0b/8e/5c/0b8e5c0b2cbd47d080eb7fc5b88534a0.jpg",
    link: "seo-danismanligi",
    icon: FaSearch,
    detail: `SEO (Arama Motoru Optimizasyonu), web sitenizin arama motorlarındaki görünürlüğünü artırır...`,
  },
  {
    id: 6,
    title: "E-Ticaret Çözümleri",
    description: "E-ticaret siteniz için kapsamlı çözümler sunuyoruz.",
    imageUrl: "https://i.pinimg.com/236x/0d/9f/6e/0d9f6ea2e0b8459b83c6f65f1921b8ae.jpg",
    link: "e-ticaret-cozumleri",
    icon: FaShoppingCart,
    detail: `E-ticaret çözümlerimiz, online satış süreçlerinizi en verimli şekilde yönetmenizi sağlar...`,
  },
  {
    id: 7,
    title: "Mobil Oyun Geliştirme",
    description: "Eğlenceli ve etkileşimli mobil oyunlar tasarlıyoruz.",
    imageUrl: "https://i.pinimg.com/236x/d3/0c/89/d30c895d4778413fba2c7d37bc48e376.jpg",
    link: "mobil-oyun-gelistirme",
    icon: FaGamepad,
    detail: `Mobil oyun geliştirme, kullanıcıları eğlendirmek ve etkileşimde bulunmak için tasarlanmıştır...`,
  },
  {
    id: 8,
    title: "Bulut Bilişim Çözümleri",
    description: "İşletmenizin ihtiyaçlarına uygun bulut bilişim hizmetleri sunuyoruz.",
    imageUrl: "https://i.pinimg.com/236x/36/0f/25/360f2523f9454df58456c8e59d01b5d0.jpg",
    link: "bulut-bilisim-cozumleri",
    icon: FaCloud,
    detail: `Bulut bilişim, işletmenizin veri yönetimini kolaylaştırır ve güvenli bir şekilde depolamanızı sağlar...`,
  },
];

export default cardData;
