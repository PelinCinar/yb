import { useState } from "react";
import img from "../../assets/img.jpg";
import Footer from "../Footer/Footer";


function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
<div>
<div className="min-h-screen flex items-center justify-center bg-[#000000]">
      {/* Container */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 p-4 lg:p-8 max-w-5xl mt-14">
        {/* Form Section */}
        <div className="bg-[#464aba] p-6 lg:p-12 rounded-lg shadow-lg flex-1">
          <h1 className="text-white text-2xl lg:text-3xl font-bold text-center mb-2">
            YB DIGITAL
          </h1>
          <h2 className="text-white text-lg lg:text-xl text-center mb-4">
            İletişim Formu
          </h2>
          <p className="text-white text-center mb-6 font-medium">
            İletişim formunu kullanarak bizimle iletişime geçebilirsiniz.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col lg:flex-row lg:gap-4">
              <div className="mb-4 flex-1">
                <label
                  htmlFor="name"
                  className="block text-white font-semibold mb-1"
                >
                  Ad Soyad *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border-b border-gray-300 bg-[#464aba] text-white p-2 focus:outline-none"
                />
              </div>
              <div className="mb-4 flex-1">
                <label
                  htmlFor="email"
                  className="block text-white font-semibold mb-1"
                >
                  E-posta Adresi *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border-b border-gray-300 bg-[#464aba] text-white p-2 focus:outline-none"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-white font-semibold mb-1"
              >
                Telefon Numarası
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border-b border-gray-300 bg-[#464aba] text-white p-2 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-white font-semibold mb-1"
              >
                Mesaj
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                maxLength="180"
                className="w-full border-b border-gray-300 bg-[#464aba] text-white p-2 focus:outline-none resize-none h-24"
              ></textarea>
              <div className="text-right text-xs text-white">
                {formData.message.length} / 180
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-[#00065e] text-white rounded hover:bg-[#464aba] transition duration-300"
            >
              Gönder
            </button>
          </form>
        </div>
        <div className="image-container flex justify-center items-center lg:justify-start">
          <div className="border-4 border-white rounded-lg shadow-lg overflow-hidden w-[400px] h-[601px]">
            <img
              src={img}
              alt="İletişim Görseli"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
      </div>

    </div>
    <Footer/>
</div>

  );
}

export default ContactForm;
