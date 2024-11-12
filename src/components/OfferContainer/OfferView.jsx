import React from "react";
import { useLocation } from "react-router-dom";

const OfferView = () => {
  const location = useLocation();
  const { firstName, lastName, phoneNumber, email, companyName, subject, services, acceptTerms } = location.state || {};

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <div className="flex-grow flex items-center justify-center p-32">
        <div className="w-full">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full">
            <h2 className="text-2xl font-bold mb-4">Teklif Bilgileri</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Ad:</label>
                <p className="text-gray-700">{firstName}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Soyad:</label>
                <p className="text-gray-700">{lastName}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Telefon Numarası:</label>
                <p className="text-gray-700">{phoneNumber}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">E-posta:</label>
                <p className="text-gray-700">{email}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Şirket Adı:</label>
                <p className="text-gray-700">{companyName}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Konu Başlığı:</label>
                <p className="text-gray-700">{subject}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Hizmetler:</label>
                <ul className="list-disc pl-5 text-gray-700">
                  {services && services.map((service, index) => <li key={index}>{service}</li>)}
                </ul>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Şartlar ve Koşullar:</label>
                <p className="text-gray-700">{acceptTerms ? "Kabul Edildi" : "Kabul Edilmedi"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferView;
