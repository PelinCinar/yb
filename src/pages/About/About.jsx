import React from "react";
import { Card } from "antd";
import { FaUserFriends, FaRegClock, FaRegBuilding } from "react-icons/fa";
import Team from "./Team";

const About = () => {
  return (
    <>
    <section className="bg-[#5252769a] py-20">
      <div className="container mx-auto px-5 mt-12">
        <h2 className="text-3xl font-bold text-white text-center mb-10">Biz kimiz ?</h2>
        <p className="text-center text-lg mb-8">
          Biz, müşteri memnuniyetini ön planda tutarak kaliteli hizmet sunan bir
          ekibiz. Misyonumuz, en iyi hizmeti sağlamak ve her zaman sizin için
          burada olmaktır.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="shadow-lg rounded-lg" bordered>
            <div className="flex items-center mb-4">
              <FaUserFriends className="text-4xl text-[#c19242] mr-3" />
              <h3 className="text-xl font-semibold">Uzman Ekibimiz</h3>
            </div>
            <p>
              Alanında uzman profesyonellerden oluşan ekibimiz, her zaman
              yanınızdadır.
            </p>
          </Card>
          <Card className="shadow-lg rounded-lg" bordered>
            <div className="flex items-center mb-4">
              <FaRegClock className="text-4xl text-[#c19242] mr-3" />
              <h3 className="text-xl font-semibold">Zamanında Hizmet</h3>
            </div>
            <p>
              Projelerinizi zamanında ve en iyi şekilde teslim etmek için
              çalışıyoruz.
            </p>
          </Card>
          <Card className="shadow-lg rounded-lg" bordered>
            <div className="flex items-center mb-4">
              <FaRegBuilding className="text-4xl text-[#c19242] mr-3" />
              <h3 className="text-xl font-semibold">Güvenilirlik</h3>
            </div>
            <p>
              Müşterilerimizin güvenini kazanmak için şeffaf ve güvenilir bir
              hizmet sunuyoruz.
            </p>
          </Card>
        </div>
      </div>

    </section>
    <Team/>
    </>
  );
};

export default About;
