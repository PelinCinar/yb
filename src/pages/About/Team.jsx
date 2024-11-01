// src/components/Team.js
import React from "react";
import { Card } from "antd";
import { FaLinkedin } from "react-icons/fa";
import teamData from "../../data/teamData";

const Team = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl font-bold text-center mb-10">Ekibimiz</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamData.map((member) => (
            <Card key={member.id} className="shadow-lg rounded-lg">
              {/* Profil fotoğrafı için boyutu artırdık */}
              <img
                src={member.photo}
                alt={member.name}
                className="rounded-full w-40 h-40 mx-auto mb-4" // Profil fotoğrafı boyutu 40x40
              />
              <h3 className="text-xl font-semibold text-center">{member.name}</h3>
              <p className="text-center text-gray-600">{member.position}</p>
              <p className="text-center text-gray-500">{member.area}</p>
              <div className="flex justify-center mt-4">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-[#0077b5] text-2xl" />
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
