import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "tailwindcss/tailwind.css";

const Offer = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      companyName: "",
      subject: "",
      acceptTerms: false,
      services: [],
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "En fazla 15 karakter olmalı")
        .required("Ad alanı zorunludur"),
      lastName: Yup.string()
        .max(20, "En fazla 20 karakter olmalı")
        .required("Soyad alanı zorunludur"),
      phoneNumber: Yup.string()
        .matches(/^[0-9]+$/, "Geçerli bir telefon numarası girin")
        .min(10, "En az 10 karakter olmalı")
        .required("Telefon numarası zorunludur"),
      email: Yup.string()
        .email("Geçerli bir e-posta adresi girin")
        .required("E-posta adresi zorunludur"),
      companyName: Yup.string()
        .max(50, "En fazla 50 karakter olmalı")
        .required("Şirket adı zorunludur"),
      subject: Yup.string()
        .max(50, "En fazla 50 karakter olmalı")
        .required("Konu başlığı zorunludur"),
      acceptTerms: Yup.boolean().oneOf([true], "Şartları kabul etmelisiniz"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <div className="flex-grow flex items-center justify-center p-32">
        <div className="w-full">
          <form
            onSubmit={formik.handleSubmit}
            className="bg-white p-8 rounded-lg shadow-lg w-full"
          >
            <h2 className="text-2xl font-bold mb-4">Teklif Formu</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="firstName"
                >
                  Ad
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                  className={`mt-1 block w-full h-10 border-2 ${
                    formik.touched.firstName && formik.errors.firstName
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded focus:ring focus:ring-blue-200`}
                  placeholder="Adınızı girin"
                />
                {formik.touched.firstName && formik.errors.firstName && (
                  <div className="text-red-500 text-sm">
                    {formik.errors.firstName}
                  </div>
                )}
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="lastName"
                >
                  Soyad
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                  className={`mt-1 block w-full h-10 border-2 ${
                    formik.touched.lastName && formik.errors.lastName
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded focus:ring focus:ring-blue-200`}
                  placeholder="Soyadınızı girin"
                />
                {formik.touched.lastName && formik.errors.lastName && (
                  <div className="text-red-500 text-sm">
                    {formik.errors.lastName}
                  </div>
                )}
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="phoneNumber"
                >
                  Telefon Numarası
                </label>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phoneNumber}
                  className={`mt-1 block w-full h-10 border-2 ${
                    formik.touched.phoneNumber && formik.errors.phoneNumber
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded focus:ring focus:ring-blue-200`}
                  placeholder="Telefon numaranızı girin"
                />
                {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                  <div className="text-red-500 text-sm">
                    {formik.errors.phoneNumber}
                  </div>
                )}
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="email"
                >
                  E-posta
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className={`mt-1 block w-full h-10 border-2 ${
                    formik.touched.email && formik.errors.email
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded focus:ring focus:ring-blue-200`}
                  placeholder="E-posta adresinizi girin"
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-red-500 text-sm">
                    {formik.errors.email}
                  </div>
                )}
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="companyName"
                >
                  Şirket Adı
                </label>
                <input
                  id="companyName"
                  name="companyName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.companyName}
                  className={`mt-1 block w-full h-10 border-2 ${
                    formik.touched.companyName && formik.errors.companyName
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded focus:ring focus:ring-blue-200`}
                  placeholder="Şirket adını girin"
                />
                {formik.touched.companyName && formik.errors.companyName && (
                  <div className="text-red-500 text-sm">
                    {formik.errors.companyName}
                  </div>
                )}
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="subject"
                >
                  Konu Başlığı
                </label>
                <textarea
                  id="subject"
                  name="subject"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.subject}
                  className={`mt-1 block w-full h-24 border-2 ${
                    formik.touched.subject && formik.errors.subject
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded focus:ring focus:ring-blue-200`}
                  placeholder="Konu başlığını girin"
                  rows={4}
                />
                {formik.touched.subject && formik.errors.subject && (
                  <div className="text-red-500 text-sm">
                    {formik.errors.subject}
                  </div>
                )}
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
                "Bulut Bilişim Çözümleri",
              ].map((service, index) => (
                <label key={index} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="services"
                    onChange={(e) => {
                      const value = e.target.checked;
                      const newServices = value
                        ? [...formik.values.services, service]
                        : formik.values.services.filter((s) => s !== service);
                      formik.setFieldValue("services", newServices);
                    }}
                    className={`form-checkbox h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500`}
                  />
                  <span className="ml-2 text-gray-700">{service}</span>
                </label>
              ))}
            </div>
            <div className="mt-11">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="acceptTerms"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  checked={formik.values.acceptTerms}
                  className={`form-checkbox h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500`}
                />
                <span className="ml-2 text-gray-700">
                  Kişisel verileriniz,Aydınlatma Metni
                  kapsamında işlenmektedir. Formu doldurarak{" "}
                  <a
                    href="/aydinlatma-metni"
                    className="font-bold text-blue-600 hover:underline"
                  >
                    Aydınlatma Metni
                  </a>
                  ,
                  <a
                    href="/gizlilik-politikasi"
                    className="font-bold text-blue-600 hover:underline"
                  >
                    Gizlilik Politikası
                  </a>
                  ve{" "}
                  <a
                    href="/cerez-politikasi"
                    className="font-bold text-blue-600 hover:underline"
                  >
                    Çerez Politikası
                  </a>
                  'nı okuduğunuzu ve kabul ettiğinizi onaylıyorsunuz.
                </span>
              </label>

              {formik.touched.acceptTerms && formik.errors.acceptTerms && (
                <div className="text-red-500 text-sm">
                  {formik.errors.acceptTerms}
                </div>
              )}
            </div>
            <button
              type="submit"
              className="w-full mt-4 bg-[#5c62f7] text-white py-2 rounded hover:bg-blue-700"
            >
              Gönder
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Offer;
