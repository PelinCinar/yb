import React from "react";
import { Card } from "antd";
import { FaUserFriends } from "react-icons/fa";
import { FaRocket, FaHandshake } from "react-icons/fa";

const Vision = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-10 py-16">
        {/* Başlık */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black mb-4">Vizyon, Misyon ve Değerlerimiz</h2>
          <p className="text-lg text-black">
            Şirketimizin temel değerlerini ve hedeflerini keşfedin. Dijital dünyada fark yaratmayı ve birlikte büyümeyi
            amaçlıyoruz.
          </p>
        </div>

        {/* Vizyon, Misyon, Değerler */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {/* Vizyonumuz */}
          <Card className="shadow-lg rounded-lg bg-gradient-to-r from-purple-700 to-blue-600 text-white p-6 hover:shadow-2xl">
            <div className="flex items-center mb-4">
              <FaRocket className="text-4xl text-white mr-3" />
              <h3 className="text-xl font-semibold">Vizyonumuz</h3>
            </div>
            <p>
              Dijital dünyada fark yaratan projelerle markaların iş süreçlerini güçlendirmek ve insanların hayatlarını
              kolaylaştıran teknolojiler üretmek.
            </p>
          </Card>

          {/* Misyonumuz */}
          <Card className="shadow-lg rounded-lg bg-gradient-to-r from-blue-500 to-green-400 text-white p-6 hover:shadow-2xl">
            <div className="flex items-center mb-4">
              <FaUserFriends className="text-4xl text-white mr-3" />
              <h3 className="text-xl font-semibold">Misyonumuz</h3>
            </div>
            <p>
              Projelerinizi zamanında teslim ederken kalite standartlarımızdan asla ödün vermiyoruz. Güven ve hızla
              büyüyoruz.
            </p>
          </Card>

          {/* Değerlerimiz */}
          <Card className="shadow-lg rounded-lg bg-gradient-to-r from-green-500 to-yellow-500 text-white p-6 hover:shadow-2xl">
            <div className="flex items-center mb-4">
              <FaHandshake className="text-4xl text-white mr-3" />
              <h3 className="text-xl font-semibold">Değerlerimiz</h3>
            </div>
            <ul className="space-y-2">
              <li>• <strong>Şeffaflık:</strong> Tüm süreçlerimizde açık iletişim ve dürüstlük önceliğimizdir.</li>
              <li>• <strong>İş Birliği:</strong> Müşterilerimizle güçlü bir bağ kurarak birlikte büyümeyi hedefliyoruz.</li>
              <li>• <strong>Sürekli Gelişim:</strong> Hem kendimizi hem de projelerimizi sürekli yeniliklerle ileri taşırız.</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Vision;
