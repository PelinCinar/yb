// src/pages/EducationDetail.js
import React from "react";
import { useParams } from "react-router-dom";
import educationData from "../../data/educationData";
import Footer from "../Footer/Footer";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"; // Social media icons

const EducationDetail = () => {
  const { id } = useParams();
  const education = educationData.find((edu) => edu.id === parseInt(id));

  if (!education) {
    return <h2 className="text-center text-red-500">Eğitim bulunamadı!</h2>;
  }

  // Eğitmen hakkında bilgi render fonksiyonu
  const renderInstructorDetails = () => {
    return (
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-24 mt-4 mb-4">
        {/* Eğitmen Resmi (Square or Banner Style) */}
        <div className="w-full h-72 bg-gray-300 mb-4 relative">
          <img
            src={education.instructor.image}
            alt={`${education.instructor.name} ${education.instructor.surname}`}
            className="absolute inset-0 w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
    );
  };

  // Eğitim detaylarını render etme fonksiyonu
  const renderEducationDetails = () => {
    return (
      <div className="w-full lg:w-1/2 bg-[#5c62f7] p-9 flex flex-col justify-center items-center">
        {/* Eğitim Başlığı */}
        <h1 className="text-4xl font-bold text-white mb-10 text-center  rounded-sm">
          {education.title}
        </h1>
        {/* Eğitim Detayları */}
        <div className="text-white text-2xl">
          <h2 className="bg-black text-pretty rounded-md px-1 py-1 sm:px-1 sm:py-1 lg:px-1 lg:py-1 xl:px-1 xl:py-1 sm:m-1">
            
          </h2>
          <p>{education.detail}</p>
        </div>
        {/* Buton ve Yönlendirme Linki */}
        <div className="mt-8">
          <a
            href={education.link} // Burada linki educationData'dan alıyorsunuz
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-black text-white py-3 px-8 rounded-md hover:bg-[#0e0e0e78]  duration-300">
              Detayları Görüntüle
            </button>
          </a>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row min-h-screen bg-black">
        {/* Sol Kısım: Eğitmen Bilgileri */}
        {renderInstructorDetails()}

        {/* Sağ Kısım: Eğitim Başlık, Açıklama, ve Detaylar */}
        {renderEducationDetails()}
      </div>
      <Footer />
    </div>
  );
};

export default EducationDetail;
