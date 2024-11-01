import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown, Menu } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/slices/themeSlice";
import { BsSun, BsMoon } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md"; // Aşağı yönlü ok simgesi
import Logo from "../../assets/Logo/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
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
      style={{ borderRadius: '8px', padding: '10px 0', minWidth: '200px' }} // Menü stili
    >
      <Menu.Item key="1">
        <Link to="/card/1">Yazılım Geliştirme</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/services/web-design">Web Tasarımı</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/services/mobile-app-design">Mobil Uygulama Tasarımı</Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link to="/services/data-analysis">Veri Analizi</Link>
      </Menu.Item>
      <Menu.Item key="5">
        <Link to="/services/seo-consulting">SEO Danışmanlığı</Link>
      </Menu.Item>
      <Menu.Item key="6">
        <Link to="/services/ecommerce-solutions">E-Ticaret Çözümleri</Link>
      </Menu.Item>
      <Menu.Item key="7">
        <Link to="/services/mobile-game-development">Mobil Oyun Geliştirme</Link>
      </Menu.Item>
      <Menu.Item key="8">
        <Link to="/services/cloud-solutions">Bulut Bilişim Çözümleri</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <nav className={`fixed w-full z-10 transition-all duration-300 ${getNavbarBackgroundColor()}`}>
        <div className="container mx-auto flex justify-between items-center p-4">
          <Link to="/" className="text-white text-2xl font-bold flex items-center">
            <img src={Logo} alt="Logo" className="w-12 h-auto ml-11" />
          </Link>

          <div className="hidden md:flex flex-1 justify-center gap-8">
            <Link to="/" className="text-white text-lg hover:text-gray-300">Anasayfa</Link>
            <Link to="/about" className="text-white text-lg hover:text-gray-300">Hakkımızda</Link>
            <Dropdown overlay={menu} trigger={['hover']}>
              <Link to="#" className="text-white text-lg hover:text-gray-300 flex items-center">
                Hizmetlerimiz <MdKeyboardArrowDown className="ml-1" />
              </Link>
            </Dropdown>
            <Link to="/edu" className="text-white text-lg hover:text-gray-300">Teklif Al</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/contact" className="border border-[#5c62f7] bg-[#5c62f7] text-white text-sm rounded-full px-3 py-1">İletişim</Link>

            <button className="md:hidden text-white" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              {isSidebarOpen ? "✖" : "☰"}
            </button>

            <button onClick={() => dispatch(toggleTheme())} className="text-white" aria-label="Toggle theme">
              {isDarkMode ? <BsSun size={24} /> : <BsMoon size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <aside className={`fixed inset-0 bg-black bg-opacity-80 z-20 transition-opacity duration-300 ${isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        <div className="flex flex-col items-center justify-center h-full">
          <Link to="/" className="text-white text-lg mb-4" onClick={() => setIsSidebarOpen(false)}>Anasayfa</Link>
          <Link to="/about" className="text-white text-lg mb-4" onClick={() => setIsSidebarOpen(false)}>Hakkımızda</Link>
          <Dropdown overlay={menu} trigger={['click']}>
            <Link to="#" className="text-white text-lg mb-4" onClick={() => setIsSidebarOpen(false)}>
              Hizmetlerimiz <MdKeyboardArrowDown className="inline" />
            </Link>
          </Dropdown>
          <Link to="/edu" className="text-white text-lg mb-4" onClick={() => setIsSidebarOpen(false)}>Teklif Al</Link>
          <Link to="/contact" className="border border-[#5c62f7] bg-[#5c62f7] text-white text-sm rounded-full px-3 py-1" onClick={() => setIsSidebarOpen(false)}>İletişim</Link>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
