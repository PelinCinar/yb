import React from "react";
import { Card } from "antd";
import {
  FaUserFriends,
  FaRegClock,
  FaRegBuilding,
  FaShieldAlt,
} from "react-icons/fa";
import Team from "./Team";
import Footer from "../Footer/Footer";
import Vision from "./Vision";

const About = () => {
  return (
    <>
      <section className="bg-black py-28">
        <div className="container mx-auto px-10 mt-10">
          {/* Başlık ve altındaki açıklama */}
          <h2 className="text-5xl font-bold text-[#5c62f7] text-center mb-6">
            Biz Kimiz?
          </h2>
         
          <p className="text-center text-lg text-gray-300 mb-8">
            “YB Digital: Teknolojiyle Geleceği İnşa Ediyoruz”
          </p>
          <div className="border-t-4 border-[#5c62f7] w-16 mx-auto mb-6"></div> {/* Çizgi */}
          <p className="text-center text-lg text-gray-300 mb-16">
            YB Digital, teknoloji ve yazılım alanında yenilikçi çözümler sunan,
            uzmanlardan ve öğrenmeye açık bireylerden oluşan dinamik bir
            ekiptir. Startup projeler geliştiren, dijital dönüşüme liderlik eden
            ve işletmelere özgün çözümler sunan bir teknoloji şirketiyiz.
          </p>

          {/* Kartlar */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* İlk 4 Card */}
            <Card className="shadow-lg rounded-lg bg-[white]" bordered>
              <div className="flex items-center mb-4">
                <FaUserFriends className="text-4xl text-[#5c62f7] mr-3" />
                <h3 className="text-xl font-semibold">
                  Hızlı ve Güvenilir Çözümler
                </h3>
              </div>
              <p className="text-gray-600">
                Projelerinizi zamanında teslim ederken kalite standartlarımızdan
                asla ödün vermiyoruz.
              </p>
            </Card>
            <Card className="shadow-lg rounded-lg bg-white" bordered>
              <div className="flex items-center mb-4">
                <FaRegClock className="text-4xl text-[#5c62f7] mr-3" />
                <h3 className="text-xl font-semibold">Uzmanlık ve Yenilik</h3>
              </div>
              <p className="text-gray-600">
                Alanında deneyimli ekibimiz, en güncel teknolojilerle
                ihtiyacınıza özel çözümler geliştirir.
              </p>
            </Card>
            <Card className="shadow-lg rounded-lg bg-white" bordered>
              <div className="flex items-center mb-4">
                <FaRegBuilding className="text-4xl text-[#5c62f7] mr-3" />
                <h3 className="text-xl font-semibold">Esneklik</h3>
              </div>
              <p className="text-gray-600">
                İş ihtiyaçlarınıza uygun ölçeklenebilir ve kişiselleştirilmiş
                hizmetler sunarız.
              </p>
            </Card>
            <Card className="shadow-lg rounded-lg bg-[white]" bordered>
              <div className="flex items-center mb-4">
                <FaShieldAlt className="text-4xl text-[#5c62f7] mr-3" />
                <h3 className="text-xl font-semibold">Güvenilirlik</h3>
              </div>
              <p className="text-gray-600">
                Veri güvenliğine ve iş ahlakına önem vererek, projelerinizi
                titizlikle hayata geçiririz.
              </p>
            </Card>
          </div>

          {/* Beyaz Çizgi ve Ayırıcı Alan */}
        </div>
      </section>
      <Vision />
      <Team />
      <Footer />
    </>
  );
};

export default About;
