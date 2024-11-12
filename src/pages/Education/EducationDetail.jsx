// src/pages/EducationDetail.js
import React from "react";
import { useParams } from "react-router-dom";
import educationData from "../../data/educationData";
import Footer from "../Footer/Footer";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"; // Import social media icons

const EducationDetail = () => {
  const { id } = useParams();
  const education = educationData.find((edu) => edu.id === parseInt(id));

  if (!education) {
    return <h2 className="text-center text-red-500">Eğitim bulunamadı!</h2>;
  }

  return (
    <div>
      <div>
        <div className="flex bg-black min-h-screen ">
          {/* Left side: Image and Instructor Name */}
          <div className="w-1/2 flex flex-col justify-center items-center p-10 ">
            {/* Eğitmen Resmi */}
            <img
              src={education.instructor.image}
              alt={`${education.instructor.name} ${education.instructor.surname}`}
              className="w-60 h-60 rounded-none border-4 border-white mb-4" // Resmi kare yapma
            />

            {/* Eğitmen Adı Soyadı */}
            <p className="text-xl text-white font-semibold mb-4">
              {education.instructor.name} {education.instructor.surname}
            </p>

            {/* Social Links */}
            <div className="flex space-x-6 mb-4">
              <a
                href={education.instructor.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-[#5c62f7] text-3xl" />
              </a>
              <a
                href={education.instructor.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-[#5c62f7] text-3xl" />
              </a>
              <a
                href={`mailto:${education.instructor.email}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope className="text-[#5c62f7] text-3xl" />
              </a>
            </div>
          </div>

          {/* Right side: Title, Description, and Details */}
          <div className="w-1/2 bg-[#5c62f7] p-9 flex flex-col justify-center items-center">
            {/* Eğitim Başlığı */}
            <h1 className="text-5xl font-bold text-white mb-10 text-center">
              {education.title}
            </h1>

            {/* Açıklama */}
            <p className="text-white mb-6 font-mono text-2xl text-center">
              {education.description}
            </p>

            {/* Detaylar */}
            <div className="text-white text-2xl ">
              <h2 className="text-pretty mt-20">Detaylar:</h2>
              <p>{education.detail}</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default EducationDetail;
