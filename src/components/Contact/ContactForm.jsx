import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css"; // Phone input style
import Footer from "../../pages/Footer/Footer";
import img from "../../assets/img.jpg";

function ContactForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Ad Soyad gereklidir."),
      email: Yup.string()
        .email("Geçersiz e-posta adresi")
        .required("E-posta gereklidir."),
      phone: Yup.string()
        .matches(
          /^\+90\s?\(?\d{3}\)?\s?\d{3}\s?\d{4}$/,
          "Geçersiz telefon numarası"
        )
        .nullable(),

      message: Yup.string().max(180, "Mesaj 180 karakteri aşamaz."),
    }),
    onSubmit: (values) => {
      if (typeof onSubmit === "function") {
        onSubmit(values); // Veriyi işlemeye gönder
      }
      // Form başarıyla gönderildiyse yönlendir
      navigate("/contact/view", { state: values });
    },
  });

  return (
   <div>
      <div className=" contact-form  min-h-screen flex items-center justify-center bg-[#000000]">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 p-4 lg:p-8 max-w-5xl mt-14">
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

            <form onSubmit={formik.handleSubmit}>
              {/* Input fields */}
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
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full border-b border-gray-300 bg-[#464aba] text-white p-2 focus:outline-none"
                  />
                  {formik.touched.name && formik.errors.name && (
                    <div className="text-red-500 text-xs">
                      {formik.errors.name}
                    </div>
                  )}
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
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full border-b border-gray-300 bg-[#464aba] text-white p-2 focus:outline-none"
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className="text-red-500 text-xs">
                      {formik.errors.email}
                    </div>
                  )}
                </div>
              </div>
              <div className="mb-4 text-black">
                <label
                  htmlFor="phone"
                  className="block text-white font-semibold mb-1"
                >
                  Telefon Numarası
                </label>
                <PhoneInput
                  international
                  countryCallingCodeEditable={false}
                  defaultCountry="TR"
                  value={formik.values.phone}
                  onChange={(value) => formik.setFieldValue("phone", value)} // Use setFieldValue
                  name="phone"
                  className="w-full border-b border-gray-300 bg-[#464aba] text-black p-2 focus:outline-none"
                />
                {formik.touched.phone && formik.errors.phone && (
                  <div className="text-red-500 text-xs">
                    {formik.errors.phone}
                  </div>
                )}
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
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  maxLength="180"
                  className="w-full border-b border-gray-300 bg-[#464aba] text-white p-2 focus:outline-none resize-none h-24"
                ></textarea>
                <div className="text-right text-xs text-white">
                  {formik.values.message.length} / 180
                </div>
                {formik.touched.message && formik.errors.message && (
                  <div className="text-red-500 text-xs">
                    {formik.errors.message}
                  </div>
                )}
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-[#00065e] text-white rounded hover:bg-[#464aba] transition duration-300"
              >
                Gönder
              </button>
            </form>
          </div>
          <div className="image-container flex justify-center items-center lg:justify-start hidden lg:block">
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
      <Footer />
    </div>

  );
}

export default ContactForm;
