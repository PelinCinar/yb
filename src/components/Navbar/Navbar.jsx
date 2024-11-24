import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaRegHandshake } from "react-icons/fa";
import Logo from "../../assets/Logo/logo.png";


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isEducationOpen, setIsEducationOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Sidebar dışına tıklayınca kapanma işlevi
    const handleClickOutside = (e) => {
      if (!e.target.closest("aside") && !e.target.closest(".md:hidden")) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleMouseEnter = (menu) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu("");
  };

  const getNavbarBackgroundColor = () => {
    return isScrolled ? "bg-[#1e2121]" : "bg-transparent";
  };

  const toggleServicesMenu = () => setIsServicesOpen(!isServicesOpen);
  const toggleEducationMenu = () => setIsEducationOpen(!isEducationOpen);

  return (
    <>
      <nav
        className={`fixed w-full z-10 transition-all duration-300 ${getNavbarBackgroundColor()}`}
      >
        <div className="logo-container mx-auto flex justify-between items-center p-4">
          <Link
            to="/"
            className="sidebar-link text-white text-2xl font-bold flex items-center"
          >
            <div className="bg-[#ffffffb3] rounded-full w-16 h-16 flex items-center justify-center ml-4 lg:ml-14">
              <img src={Logo} alt="Logo" className="w-14 h-auto" />
            </div>
          </Link>

          <div className="hidden md:flex flex-1 justify-center gap-9">
            <Link to="/" className="text-white text-lg hover:text-gray-300">
              Anasayfa
            </Link>
            <Link
              to="/about"
              className="sidebar-link text-white text-lg hover:text-gray-300"
            >
              Hakkımızda
            </Link>
            <div
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
              className="relative"
            >
              <button
                onClick={toggleServicesMenu}
                className="sidebar-link text-white text-lg hover:text-gray-300 flex items-center"
              >
                Hizmetlerimiz <MdKeyboardArrowDown className="ml-1" />
              </button>
              {activeMenu === "services" && (
                <div className="absolute top-full left-0 mt-1 bg-[#1e2121] text-white py-4 px-5 w-[180px] min-h-[200px] rounded-lg">
                  {[
                    "Web Tasarımı Hizmetleri",
                    "Mobil Uygulama Geliştirme",
                    "Veri Analizi Hizmetleriı",
                    "UX/UI Tasarım Hizmetleri",
                  ].map((service, index) => (
                    <Link
                      to={`/card/${index + 1}`}
                      key={index}
                      className="block py-1"
                    >
                      {service}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div
              onMouseEnter={() => handleMouseEnter("education")}
              onMouseLeave={handleMouseLeave}
              className="relative"
            >
              <button
                onClick={toggleEducationMenu}
                className="sidebar-link text-white text-lg hover:text-gray-300 flex items-center"
              >
                Eğitimlerimiz <MdKeyboardArrowDown className="ml-1" />
              </button>
              {activeMenu === "education" && (
                <div className="absolute top-full left-0 mt-2 bg-[#1e2121] text-white py-3 px-4 w-[152px] min-h-[150px] rounded-lg">
                  {[
                    "Yapay Zeka Eğitimi",
                    "CV Eğitimi",
                    "Backend Eğitimi",
                    "Frontend Eğitimi",
                    "Yazılım Rehberlik",
                  ].map((education, index) => (
                    <Link
                      to={`/education/${index + 1}`}
                      key={index}
                      className="block py-1"
                    >
                      {education}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link to="/blog" className="sidebar-link text-white text-lg hover:text-gray-300">
              Blog
            </Link>
          </div>

          <div className="btn1-class flex gap-1 ml-auto">
            <Link
              to="/offer"
              className=" sidebar-link border text-white text-sm md:text-base px-4 py-2 rounded-full flex items-center transition duration-200 transform hover:scale-105  bg-gradient-to-r from-purple-500 to-blue-500 sm:text-xs sm:px-2 sm:py-1  md:px-6 md:py-2"
            >
              <FaRegHandshake className="mr-2" /> Teklif Al
            </Link>
            <Link
              to="/contact"
              className=" sidebar-link border text-white text-sm md:text-base px-4 py-2 ml-4 rounded-full"
            >
              İletişim
            </Link>
          </div>

          <button
            className="md:hidden text-white ml-4"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? "☰" : "☰"}
          </button>
        </div>
      </nav>

      <aside
        className={`fixed top-0 left-0 z-20 bg-black text-white w-64 max-w-full h-full overflow-auto transition-transform duration-500 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } shadow-lg`}
      >
        <button
          onClick={() => setIsSidebarOpen(false)}
          className="text-white text-lg absolute top-4 right-4"
        >
          ✖
        </button>
        <div className="p-6 flex flex-col">
          <Link
            to="/"
            className="text-white text-lg mb-4"
            onClick={() => setIsSidebarOpen(false)}
          >
            Anasayfa
          </Link>
          <Link
            to="/about"
            className="text-white text-lg mb-4"
            onClick={() => setIsSidebarOpen(false)}
          >
            Hakkımızda
          </Link>
          <div>
            <button
              onClick={toggleServicesMenu}
              className="text-white text-lg mb-4 flex items-center"
            >
              Hizmetlerimiz <MdKeyboardArrowDown className="ml-2" />
            </button>
            {isServicesOpen && (
              <div className="ml-4">
                {[
                  "Web Tasarım ",
                  "Mobil Uygulama Geliştirme",
                  "Veri Analizi Hizmetleri",
                  "UX/UI Tasarım Hizmetleri",
                ].map((service, index) => (
                  <Link
                    to={`/card/${index + 1}`}
                    key={index}
                    className="text-white text-sm block my-2"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    {service}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div>
            <button
              onClick={toggleEducationMenu}
              className="text-white text-lg mb-4 flex items-center"
            >
              Eğitimlerimiz <MdKeyboardArrowDown className="ml-2" />
            </button>
            {isEducationOpen && (
              <div className="ml-4">
                {[
                  "Yapay Zeka Eğitimi",
                  "CV Eğitimi",
                  "Backend Eğitimi",
                  "Frontend Eğitimi",
                  "Yazılım Rehberlik ",
                ].map((education, index) => (
                  <Link
                    to={`/education/${index + 1}`}
                    key={index}
                    className="text-white text-sm block my-2"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    {education}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link
            to="/blog"
            className="text-white text-lg mb-4"
            onClick={() => setIsSidebarOpen(false)}
          >
            Blog
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
