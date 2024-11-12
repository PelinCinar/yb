import React from "react";
import { Card } from "antd";
import { FaUserFriends, FaRegClock, FaRegBuilding } from "react-icons/fa";
import Team from "./Team";
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <>
      <section className="bg-black py-28 ">

        <div className="container mx-auto px-10 mt-1"> Increased top margin here
          <h2 className="text-4xl font-bold text-[#5c62f7] text-center mb-4">Biz Kimiz?</h2>
          <p className="text-center text-lg text-gray-300 mb-12">
            Müşteri memnuniyetini ön planda tutarak kaliteli hizmet sunan bir ekibiz. 
            Misyonumuz, en iyi hizmeti sağlamak ve her zaman sizin için burada olmaktır.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-lg rounded-lg bg-[white]" bordered>
              <div className="flex items-center mb-4">
                <FaUserFriends className="text-4xl text-[#5c62f7] mr-3" />
                <h3 className="text-xl font-semibold">Uzman Ekibimiz</h3>
              </div>
              <p className="text-gray-600">
                Alanında uzman profesyonellerden oluşan ekibimiz, her zaman yanınızdadır.
              </p>
            </Card>
            <Card className="shadow-lg rounded-lg bg-white" bordered>
              <div className="flex items-center mb-4">
                <FaRegClock className="text-4xl text-[#5c62f7] mr-3" />
                <h3 className="text-xl font-semibold">Zamanında Hizmet</h3>
              </div>
              <p className="text-gray-600">
                Projelerinizi zamanında ve en iyi şekilde teslim etmek için çalışıyoruz.
              </p>
            </Card>
            <Card className="shadow-lg rounded-lg bg-white" bordered>
              <div className="flex items-center mb-4">
                <FaRegBuilding className="text-4xl text-[#5c62f7] mr-3" />
                <h3 className="text-xl font-semibold">Güvenilirlik</h3>
              </div>
              <p className="text-gray-600">
                Müşterilerimizin güvenini kazanmak için şeffaf ve güvenilir bir hizmet sunuyoruz.
              </p>
            </Card>
            <Card className="shadow-lg rounded-lg bg-[white]" bordered>
              <div className="flex items-center mb-4">
                <FaUserFriends className="text-4xl text-[#5c62f7] mr-3" />
                <h3 className="text-xl font-semibold">Uzman Ekibimiz</h3>
              </div>
              <p className="text-gray-600">
                Alanında uzman profesyonellerden oluşan ekibimiz, her zaman yanınızdadır.
              </p>
            </Card>
            <Card className="shadow-lg rounded-lg bg-white" bordered>
              <div className="flex items-center mb-4">
                <FaRegClock className="text-4xl text-[#5c62f7] mr-3" />
                <h3 className="text-xl font-semibold">Zamanında Hizmet</h3>
              </div>
              <p className="text-gray-600">
                Projelerinizi zamanında ve en iyi şekilde teslim etmek için çalışıyoruz.
              </p>
            </Card>
            <Card className="shadow-lg rounded-lg bg-white" bordered>
              <div className="flex items-center mb-4">
                <FaRegBuilding className="text-4xl text-[#5c62f7] mr-3" />
                <h3 className="text-xl font-semibold">Güvenilirlik</h3>
              </div>
              <p className="text-gray-600">
                Müşterilerimizin güvenini kazanmak için şeffaf ve güvenilir bir hizmet sunuyoruz.
              </p>
            </Card>
          </div>
        </div>
      </section>
      <Team />
      <Footer/>
    </>
  );
};

export default About;
