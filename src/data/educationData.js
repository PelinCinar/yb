// src/data/educationData.js
import { FaBrain, FaLaptopCode, FaUserGraduate, FaCode } from "react-icons/fa";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"; // Import icons for social links
import foto from "../assets/img.jpg";

const educationData = [
  {
    id: 1,
    title: "Yapay Zeka Eğitimi",
    icon: FaBrain,
    description: "Yapay zeka alanında kapsamlı bir eğitim ile AI dünyasına adım atın.",
    detail: "Bu eğitimde makine öğrenimi, derin öğrenme ve veri bilimi konularını ele alıyoruz. Katılımcılar, projeler üzerinden uygulamalı öğrenim ile AI modelleri geliştirebilecek yetkinliklere sahip olacaklar.",
    instructor: {
      name: "Ahmet Yılmaz",
      surname: "Öztürk",
      image: foto, // Eğitmen resmi için yol
      linkedin: "https://www.linkedin.com/in/ahmet-yilmaz",
      github: "https://github.com/ahmet-yilmaz",
      email: "ahmet.yilmaz@example.com",
    },
  },
  {
    id: 2,
    title: "CV Hazırlama Eğitimi",
    icon: FaUserGraduate,
    description: "Profesyonel bir CV hazırlama eğitimi ile iş dünyasına güçlü bir adım atın.",
    detail: "Bu eğitimde etkileyici bir CV hazırlamak için en iyi uygulamalar, tasarım önerileri ve sektöre özel ipuçları üzerinde durulacaktır.",
    instructor: {
      name: "Elif Kaya",
      surname: "Demir",
      image: "path/to/elif-kaya.jpg",
      linkedin: "https://www.linkedin.com/in/elif-kaya",
      github: "https://github.com/elif-kaya",
      email: "elif.kaya@example.com",
    },
  },
  {
    id: 3,
    title: "Backend Geliştirme Eğitimi",
    icon: FaLaptopCode,
    description: "Backend teknolojilerinde uzmanlaşarak server-side geliştirmede yetkin olun.",
    detail: "Node.js, Express.js ve veri tabanı yönetim sistemleri gibi backend teknolojilerinde temel ve ileri düzey konuları kapsayan bu eğitim.",
    instructor: {
      name: "Mehmet Çelik",
      surname: "Güzel",
      image: "path/to/mehmet-celik.jpg",
      linkedin: "https://www.linkedin.com/in/mehmet-celik",
      github: "https://github.com/mehmet-celik",
      email: "mehmet.celik@example.com",
    },
  },
  {
    id: 4,
    title: "Frontend Geliştirme Eğitimi",
    icon: FaCode,
    description: "Kullanıcı dostu ve etkileyici arayüzler geliştirme eğitimi ile frontend dünyasına hakim olun.",
    detail: "HTML, CSS, JavaScript, React gibi modern frontend teknolojilerini içeren bu eğitim.",
    instructor: {
      name: "Ayşe Tuncay",
      surname: "Koç",
      image: "path/to/ayse-tuncay.jpg",
      linkedin: "https://www.linkedin.com/in/ayse-tuncay",
      github: "https://github.com/ayse-tuncay",
      email: "ayse.tuncay@example.com",
    },
  },
];

export default educationData;
