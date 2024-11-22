import { FaCode, FaPaintBrush, FaMobileAlt, FaChartLine } from "react-icons/fa";
import yb from "../assets/yb.png";

const cardData = [
  {
    id: 1,
    title: "Web Tasarımı Hizmetleri",
    description:
      "Modern ve kullanıcı dostu web tasarımıyla markanızı güçlendirin! ",
    image: yb,
    link: "yazilim-gelistirme",
    icon: FaCode, // Add icon reference here
    detail: `Kurumsal Web Siteleri: Profesyonel bir dijital kimlik.
E-Ticaret Siteleri: Satış odaklı, kullanıcı dostu çözümler.
Portföy Siteleri: Freelancer ve sanatçılar için etkileyici tasarımlar.
Blog/Haber Siteleri: İçeriklerinizi öne çıkaran yaratıcı tasarımlar.`,
    tags: [
      "Kurumsal Web Siteleri",
      "E-Ticaret Siteleri",
      "Portföy Siteleri",
      "Blog/Haber Siteleri",
    ],
  },
  {
    id: 2,
    title: "Mobil Uygulama Geliştirme",
    description: " İşletmenizi Mobil Dünyaya Taşıyın",
    imageUrl:
      "https://i.pinimg.com/236x/16/aa/f0/16aaf08c6bea384f971bdd1eaec1109a.jpg",
    link: "web-tasarimi",
    icon:FaMobileAlt , // Add icon reference here
    detail: `Analiz: Kullanıcı ihtiyaçlarını ve iş hedeflerinizi analiz ediyoruz.
Prototip: Estetik ve kullanıcı dostu arayüzler tasarlıyoruz.
Geliştirme: iOS, Android ve çapraz platformlar için optimize çözümler sunuyoruz.
Test & Yayın: Hatasız yayın süreci sağlıyoruz.
Sürekli Destek: Güncellemeler ve bakım hizmetleri sunuyoruz.`,
    tags: [
      "Native Mobil Uygulamalar",
      "Cross-Platform Uygulamalar",
      "Kurumsal Mobil Uygulamalar",
      "E-Ticaret Mobil Uygulamaları:",
      "Eğitim ve Sağlık Uygulamaları:",
    ],
  },
  {
    id: 3,
    title: " Veri Analizi Hizmetleri",
    description: "İnovatif ve yüksek modelli mobil uygulamalar geliştiriyoruz.",
    imageUrl:
      "https://i.pinimg.com/236x/4f/fc/67/4ffc67e165ec43882f5ff005ec261aeb.jpg",
    link: "mobil-uygulama",
    icon: FaChartLine,
    detail: `Veri Toplama: Analiz için uygun hale getiriyoruz.
Analiz ve Görselleştirme: Modern araçlarla anlamlı veriler sunuyoruz.
Strateji Geliştirme: Verilerinizi stratejik hedeflere dönüştürüyoruz.
Takip ve Destek: Düzenli raporlarla sürecinizi güçlendiriyoruz.`,
    tags: [
      "Tanımlayıcı Analiz",
      "Tahminsel Analiz",
      "Reçeteli Analiz",
      "Veri Görselleştirme",
      "Veri Yönetimi",

    ],
  },

  {
    id: 4,
    title: "UX/UI Tasarım Hizmetleri",
    description: "Veri analizi ve raporlama hizmetleri sunuyoruz.",
    imageUrl:
      "https://i.pinimg.com/236x/44/99/cc/4499ccbb9b1044dc83d45f5e022bd4af.jpg",
    link: "veri-analizi",
    icon: FaPaintBrush,
    detail: `Analiz: Hedeflerinizi ve kitlenizi belirliyoruz.
Prototip Geliştirme: Görselleştirme için wireframe’ler hazırlıyoruz.
Deneyim Tasarımı: Akıcı kullanıcı akışları oluşturuyoruz.
Test & Optimizasyon: Performansı artıracak düzenlemeler yapıyoruz.`,
    tags: [
      "Web ve Mobil Uygulama Tasarımı",
      " Prototip ve Mockup Hazırlama",
      "Responsive Tasarım",
      "Marka Odaklı Tasarım",
      "UX Deneyimi Optimizasyonu",

    ],
  },
];

export default cardData;
