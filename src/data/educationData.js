// src/data/educationData.js
import { FaBrain, FaLaptopCode, FaUserGraduate, FaCode } from "react-icons/fa";
import Edu1 from "../assets/Education/edu1.jpg"
import Edu2 from "../assets/Education/edu2.jpg"
import Edu3 from "../assets/Education/edu3.jpg"
import Edu4 from "../assets/Education/edu4.jpg"
import Edu5 from "../assets/Education/edu5.jpg"





const educationData = [
  {
    id: 1,
    title: "Yapay Zeka Eğitimi",
    icon: FaBrain,
    description:
      "Yapay zeka alanında kapsamlı bir eğitim ile AI dünyasına adım atın.",
    detail:
      "Bu eğitimde makine öğrenimi, derin öğrenme ve veri bilimi konularını ele alıyoruz. Katılımcılar, projeler üzerinden uygulamalı öğrenim ile AI modelleri geliştirebilecek yetkinliklere sahip olacaklar.",
    instructor: {
      image: Edu1, // Eğitmen resmi için yol
    },
  },
  {
    id: 2,
    title: "CV Hazırlama Eğitimi",
    icon: FaUserGraduate,
    description:
      "Profesyonel bir CV hazırlama eğitimi ile iş dünyasına güçlü bir adım atın.",
    detail:
      "Bu eğitimde etkileyici bir CV hazırlamak için en iyi uygulamalar, tasarım önerileri ve sektöre özel ipuçları üzerinde durulacaktır.",
    instructor: {
      name: "Elif Kaya",
      surname: "Demir",
      image: Edu2,
      linkedin: "https://www.linkedin.com/in/elif-kaya",
      github: "https://github.com/elif-kaya",
      email: "elif.kaya@example.com",
    },
  },
  {
    id: 3,
    title: "Backend Geliştirme Eğitimi",
    icon: FaLaptopCode,
    description:
      "Backend teknolojilerinde uzmanlaşarak server-side geliştirmede yetkin olun.",
    detail:
      "Node.js, Express.js ve veri tabanı yönetim sistemleri gibi backend teknolojilerinde temel ve ileri düzey konuları kapsayan bu eğitim.",
    instructor: {
      name: "Mehmet Çelik",
      surname: "Güzel",
      image: Edu3,
      linkedin: "https://www.linkedin.com/in/mehmet-celik",
      github: "https://github.com/mehmet-celik",
      email: "mehmet.celik@example.com",
    },
  },
  {
    id: 4,
    title: "Frontend Geliştirme Eğitimi",
    icon: FaCode,
    description:
      "Kullanıcı dostu ve etkileyici arayüzler geliştirme eğitimi ile frontend dünyasına hakim olun.",
    detail:
      "HTML, CSS, JavaScript, React gibi modern frontend teknolojilerini içeren bu eğitim.",
    instructor: {
      name: "Ayşe Tuncay",
      surname: "Koç",
      image: Edu4,
      linkedin: "https://www.linkedin.com/in/ayse-tuncay",
      github: "https://github.com/ayse-tuncay",
      email: "ayse.tuncay@example.com",
    },
  },
  {
    id: 5,
    title: "Yazılım Rehberlik",
    description:
      "Kullanıcı dostu ve etkileyici arayüzler geliştirme eğitimi ile frontend dünyasına hakim olun.",
    detail:
      "HTML, CSS, JavaScript, React gibi modern frontend teknolojilerini içeren bu eğitim.",
    instructor: {
      name: "Ayşe Tuncay",
      surname: "Koç",
      image: Edu5,
      linkedin: "https://www.linkedin.com/in/ayse-tuncay",
      github: "https://github.com/ayse-tuncay",
      email: "ayse.tuncay@example.com",
    },
  },
];

export default educationData;
