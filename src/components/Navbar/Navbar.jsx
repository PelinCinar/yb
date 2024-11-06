import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown, Menu } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/slices/themeSlice";
import { BsSun, BsMoon } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaRegHandshake } from "react-icons/fa";
import Logo from "../../assets/Logo/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getNavbarBackgroundColor = () => {
    return isScrolled ? "bg-[#1e2121]" : "bg-transparent";
  };

  const menu = (
    <Menu
      style={{
        borderRadius: "1px",
        padding: "10px 0",
        minWidth: "230px",
        backgroundColor: "black", // Pembe arka plan
      }}
    >
      {[
        "Yazılım Geliştirme",
        "Web Tasarımı",
        "Mobil Uygulama Tasarımı",
        "Veri Analizi",
        "SEO Danışmanlığı",
        "E-Ticaret Çözümleri",
        "Mobil Oyun Geliştirme",
        "Bulut Bilişim Çözümleri",
      ].map((service, index) => (
        <Menu.Item
          key={index}
          style={{ margin: "0", color: "white", font: "bold" }}
        >
          <Link to={`/card/${index + 1}`} className="text-white">
            {service}
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <>
      <nav
        className={`fixed w-full z-10 transition-all duration-300 ${getNavbarBackgroundColor()}`}
      >
        <div className="container mx-auto flex justify-between items-center p-4">
          <Link
            to="/"
            className="text-white text-2xl font-bold flex items-center"
          >
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center ml-20">
              <img src={Logo} alt="Logo" className="w-14 h-auto " />
            </div>
          </Link>

          <div className="hidden md:flex flex-1 justify-center gap-8">
            <Link to="/" className="text-white text-lg hover:text-gray-300">
              Anasayfa
            </Link>
            <Link
              to="/about"
              className="text-white text-lg hover:text-gray-300"
            >
              Hakkımızda
            </Link>
            <Dropdown overlay={menu} trigger={["hover"]}>
              <Link
                to="#"
                className="text-white text-lg hover:text-gray-300 flex items-center"
              >
                Hizmetlerimiz <MdKeyboardArrowDown className="ml-1" />
              </Link>
            </Dropdown>
            <Link to="/" className="text-white text-lg hover:text-gray-300">
              Blog
            </Link>
          </div>

          <div className="flex gap-4 ml-auto">
            <Link
              to="/offer"
              className=" border text-white text-end px-2 py-2 rounded-full flex items-center transition duration-200 transform hover:scale-105"
            >
              <FaRegHandshake className="mr-2" />
              Teklif Al
            </Link>
            <Link
              to="/contact"
              className="border  text-white text-md px-5 py-2 ml-4 rounded-full"
            >
              İletişim
            </Link>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? "✖" : "☰"}
          </button>
        </div>
      </nav>

      <aside
        className={`fixed inset-0 bg-black bg-opacity-80 z-20 transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full">
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
          <Dropdown overlay={menu} trigger={["click"]}>
            <Link
              to="#"
              className="text-white text-lg mb-4"
              onClick={() => setIsSidebarOpen(false)}
            >
              Hizmetlerimiz <MdKeyboardArrowDown className="inline" />
            </Link>
          </Dropdown>
          <Link
            to="/offer"
            className="text-white text-lg mb-4"
            onClick={() => setIsSidebarOpen(false)}
          >
            Teklif Al
          </Link>
          <Link
            to="/contact"
            className="border border-[#5c62f7] bg-[#5c62f7] text-white text-sm rounded-full px-12 py-6"
            onClick={() => setIsSidebarOpen(false)}
          >
            İletişim
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
