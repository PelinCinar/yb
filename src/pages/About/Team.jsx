// src/components/Team.js
import React from "react";
import { Card } from "antd";
import { FaLinkedin } from "react-icons/fa";
import teamData from "../../data/teamData";

const Team = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">Yönetim Ekibimiz</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 justify-center">
          {teamData.map((member) => (
            <Card
              key={member.id}
              className={`shadow-lg rounded-lg bg-gradient-to-r from-purple-800 to-blue-800  p-4 flex flex-col items-center ${
                member.id === 1 ? "col-span-2" : ""  // id'si 1 olan kişi için tam genişlik
              }`}
              bordered
              style={{ width: "100%" }}  // Kartlar ekran boyutuna göre tam genişlikte
            >
              {/* Resim, İsim ve Pozisyon kısmı */}
              <div className="flex flex-col items-center mb-3">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="rounded-full w-32 h-32 mb-3 object-cover"  // Resim boyutunu büyüttük
                />
                <h3 className="text-xl font-semibold text-center mb-2 text-white">{member.name}</h3>
                <p className="text-sm text-center font-bold mb-2 text-white">{member.position}</p>
              </div>

              {/* Çizgi */}
              <div className="w-full border-t-2 border-[#5c62f7] mb-2"></div>

              {/* Area kısmı */}
              <p className="text-sm text-center text-gray-100 mb-2">{member.area}</p>

              {/* LinkedIn Bağlantısı */}
              <div className="flex justify-center mt-2">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-[#0077b5] text-lg" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
