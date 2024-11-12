import React from "react";
import { useNavigate } from "react-router-dom";

const OfferForm = ({ values, handleChange, handleBlur }) => {
  const navigate = useNavigate();

  const handleSave = (e) => {
    e.preventDefault();
    // Kaydetme işlemleri burada yapılabilir (örneğin, form verilerini bir API'ye gönderme)
    
    // Verileri yönlendirme
    navigate("/offer/view", {
      state: {
        firstName: values.firstName,
        lastName: values.lastName,
        phoneNumber: values.phoneNumber,
        email: values.email,
        companyName: values.companyName,
        subject: values.subject,
        services: values.services,
        acceptTerms: values.acceptTerms,
      }
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <div className="flex-grow flex items-center justify-center p-32">
        <div className="w-full">
          <form className="bg-white p-8 rounded-lg shadow-lg w-full" onSubmit={handleSave}>
            <h2 className="text-2xl font-bold mb-4">Teklif Formu</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="firstName">
                  Ad
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                  className="mt-1 block w-full h-10 border-2 border-gray-300 rounded focus:ring focus:ring-blue-200"
                  placeholder="Adınızı girin"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="lastName">
                  Soyad
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                  className="mt-1 block w-full h-10 border-2 border-gray-300 rounded focus:ring focus:ring-blue-200"
                  placeholder="Soyadınızı girin"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="phoneNumber">
                  Telefon Numarası
                </label>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phoneNumber}
                  className="mt-1 block w-full h-10 border-2 border-gray-300 rounded focus:ring focus:ring-blue-200"
                  placeholder="Telefon numaranızı girin"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                  E-posta
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className="mt-1 block w-full h-10 border-2 border-gray-300 rounded focus:ring focus:ring-blue-200"
                  placeholder="E-posta adresinizi girin"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="companyName">
                  Şirket Adı
                </label>
                <input
                  id="companyName"
                  name="companyName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.companyName}
                  className="mt-1 block w-full h-10 border-2 border-gray-300 rounded focus:ring focus:ring-blue-200"
                  placeholder="Şirket adını girin"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="subject">
                  Konu Başlığı
                </label>
                <textarea
                  id="subject"
                  name="subject"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.subject}
                  className="mt-1 block w-full h-24 border-2 border-gray-300 rounded focus:ring focus:ring-blue-200"
                  placeholder="Konu başlığını girin"
                  rows={4}
                />
              </div>
            </div>

            <h3 className="text-lg font-bold mt-4">Hizmetler</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-2">
              {[
                "Sosyal Medya Yönetimi",
                "Dijital Pazarlama",
                "Grafik & Video Tasarım",
                "Mobil Yazılım",
                "Web Tasarım",
                "Web Yazılım",
                "Veri Analizi",
              ].map((service, index) => (
                <label key={index} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="services"
                    onChange={(e) => {
                      const value = e.target.checked;
                      const newServices = value
                        ? [...values.services, service]
                        : values.services.filter((s) => s !== service);
                      handleChange({ target: { name: "services", value: newServices } });
                    }}
                    checked={values.services.includes(service)}
                    className="form-checkbox h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="ml-2 text-gray-700">{service}</span>
                </label>
              ))}
            </div>

            <div className="mt-11">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="acceptTerms"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  checked={values.acceptTerms}
                  className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="ml-2 text-gray-700">Şartlar ve koşulları kabul ediyorum</span>
              </label>
            </div>

            <button
              type="submit"
              className="mt-6 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Kaydet
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OfferForm;
