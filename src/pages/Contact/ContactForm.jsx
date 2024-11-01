import { useFormik } from "formik";
import * as Yup from "yup";
import { Input, Button } from "antd";
import FormImg from "../../assets/form.png";
import Footer from "../Footer/Footer";

const FormComponent = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      subject: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .required("Zorunlu alan!")
        .min(2, "İsim en az 2 karakter olmalı!"),
      email: Yup.string()
        .required("Zorunlu alan!")
        .email("Geçerli bir e-mail giriniz!"),
      phone: Yup.string()
        .required("Zorunlu alan!")
        .matches(/^[0-9]{10,}$/, "Geçerli bir telefon numarası giriniz!"),
      subject: Yup.string().required("Zorunlu alan!"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  return (
    <>
      <section className="flex justify-center items-center h-screen px-5 xl:px-0 bg-gradient-to-b from-[#1e2121] to-[#5c62f7] ">
        <div className="max-w-[1170px] w-full grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* Left Image Section */}
          <div className="flex justify-center lg:justify-end lg:pr-8">
            <img
              src={FormImg}
              alt="Form"
              className="w-full h-full max-h-[500px] object-cover rounded-lg"
            />
          </div>

          {/* Form Section */}
          <div className="bg-[#1e2121] shadow-lg rounded-lg p-12 mt-4">
            <h3 className="text-white text-[25px] leading-9 font-bold mb-10">
              Bizimle iletişime geçin <span className="text-[#ec5d67]"></span>
            </h3>
            <form className="space-y-6" onSubmit={formik.handleSubmit}>
              {/** Full Name Field */}
              <div className="relative">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-white"
                >
                  Ad Soyad
                </label>
                <Input
                  type="text"
                  id="fullName"
                  name="fullName"
                  onChange={formik.handleChange}
                  value={formik.values.fullName}
                  onBlur={formik.handleBlur}
                  className="mt-1 w-full max-w-md "
                />
                <span
                  className={`text-red-600 absolute left-0 -bottom-5 transition-opacity duration-300 ${
                    formik.touched.fullName && formik.errors.fullName
                      ? 'opacity-100'
                      : 'opacity-0'
                  }`}
                >
                  {formik.errors.fullName}
                </span>
              </div>

              {/** Email Field */}
              <div className="relative">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white"
                >
                  E-posta
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                  className="mt-1 w-full max-w-md"
                />
                <span
                  className={`text-red-600 absolute left-0 -bottom-5 transition-opacity duration-300 ${
                    formik.touched.email && formik.errors.email
                      ? 'opacity-100'
                      : 'opacity-0'
                  }`}
                >
                  {formik.errors.email}
                </span>
              </div>

              {/** Phone Field */}
              <div className="relative">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-white"
                >
                  Telefon Numarası
                </label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                  onBlur={formik.handleBlur}
                  className="mt-1 w-full max-w-md"
                />
                <span
                  className={`text-red-600 absolute left-0 -bottom-5 transition-opacity duration-300 ${
                    formik.touched.phone && formik.errors.phone
                      ? 'opacity-100'
                      : 'opacity-0'
                  }`}
                >
                  {formik.errors.phone}
                </span>
              </div>

              {/** Subject Field */}
              <div className="relative">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-white"
                >
                  Konu
                </label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  onChange={formik.handleChange}
                  value={formik.values.subject}
                  onBlur={formik.handleBlur}
                  className="mt-1 w-full max-w-md"
                />
                <span
                  className={`text-red-600 absolute left-0 -bottom-5 transition-opacity duration-300 ${
                    formik.touched.subject && formik.errors.subject
                      ? 'opacity-100'
                      : 'opacity-0'
                  }`}
                >
                  {formik.errors.subject}
                </span>
              </div>

              <Button
                type="submit"
                className="mt-6 w- bg-[#5c62f7] text-[#f8f8f9] py-2 px-4 rounded-lg "
              >
                Hesap Oluştur
              </Button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default FormComponent;
