import React from 'react';

const Vision = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-10 py-16">
        {/* Başlık */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black mb-4 ">Vizyon, Misyon ve Değerlerimiz</h2>
          <p className="text-lg text-black">
            Şirketimizin temel değerlerini ve hedeflerini keşfedin. Dijital dünyada fark yaratmayı ve birlikte büyümeyi
            amaçlıyoruz.
          </p>
        </div>

        {/* Vizyon, Misyon, Değerler */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Vizyonumuz */}
          <div className="bg-[#5c62f7] p-8 shadow-lg rounded-lg transition-all duration-300 hover:shadow-2xl relative z-0">
            <h3 className="text-2xl font-semibold text-white mb-4">Vizyonumuz</h3>
            <p className="text-lg text-white">
              Dijital dünyada fark yaratan projelerle markaların iş süreçlerini güçlendirmek ve insanların hayatlarını
              kolaylaştıran teknolojiler üretmek.
            </p>
          </div>

          {/* Misyonumuz */}
          <div className="bg-[#5c62f7] p-8 shadow-lg rounded-lg transition-all duration-300 hover:shadow-2xl relative z-0">
            <h3 className="text-2xl font-semibold text-white mb-4">Misyonumuz</h3>
            <p className="text-lg text-white">
              Her ölçekte işletmeye ve bireye teknolojinin gücünü sunarak, hayal edilen projeleri gerçeğe dönüştürmek.
              Çalışanlarımızın deneyim kazanmalarını desteklerken, müşterilerimize en iyi hizmeti sağlamak.
            </p>
          </div>

          {/* Değerlerimiz */}
          <div className="bg-[#5c62f7] p-8 shadow-lg rounded-lg transition-all duration-300 hover:shadow-2xl relative z-0">
            <h3 className="text-2xl font-semibold text-white mb-4">Değerlerimiz</h3>
            <ul className="text-lg text-white space-y-4">
              <li>• <strong>Şeffaflık:</strong> Tüm süreçlerimizde açık iletişim ve dürüstlük önceliğimizdir.</li>
              <li>• <strong>İş Birliği:</strong> Müşterilerimizle güçlü bir bağ kurarak birlikte büyümeyi hedefliyoruz.</li>
              <li>• <strong>Sürekli Gelişim:</strong> Hem kendimizi hem de projelerimizi sürekli yeniliklerle ileri taşırız.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
