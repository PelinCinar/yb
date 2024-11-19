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
  const [activeSidebarMenu, setActiveSidebarMenu] = useState(""); 

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Close sidebar if clicked outside
    const handleClickOutside = (e) => {
      if (!e.target.closest('aside') && !e.target.closest('.md:hidden')) {
        setIsSidebarOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? "" : menu); 
  };

  const toggleSidebarMenu = (menu) => {
    setActiveSidebarMenu(activeSidebarMenu === menu ? "" : menu); 
  };

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
      <nav className={`fixed w-full z-10 transition-all duration-300 ${getNavbarBackgroundColor()}`}>
        <div className="container mx-auto flex justify-between items-center p-4">
          <Link to="/" className="text-white text-2xl font-bold flex items-center">
            <div className="bg-[#ffffffb3] rounded-full w-16 h-16 flex items-center justify-center ml-4 lg:ml-14">
              <img src={Logo} alt="Logo" className="w-14 h-auto" />
            </div>
          </Link>

          <div className="hidden md:flex flex-1 justify-center gap-9">
            <Link to="/" className="text-white text-lg hover:text-gray-300">Anasayfa</Link>
            <Link to="/about" className="text-white text-lg hover:text-gray-300">Hakkımızda</Link>
            <div 
              onMouseEnter={() => handleMouseEnter('services')} 
              onMouseLeave={handleMouseLeave}
              className="relative"
            >
              <button onClick={toggleServicesMenu} className="text-white text-lg hover:text-gray-300 flex items-center">
                Hizmetlerimiz <MdKeyboardArrowDown className="ml-1" />
              </button>
              {activeMenu === 'services' && (
                <div className="absolute top-full left-0 mt-1 bg-[#1e2121] text-white py-4 px-5  w-[180px] min-h-[200px] rounded-lg">
                  {["Web Tasarımı Hizmetleri", "Mobil Uygulama Geliştirme", "Veri Analizi Hizmetleriı","UX/UI Tasarım Hizmetleri"].map((service, index) => (
                    <Link to={`/card/${index + 1}`} key={index} className="block py-1">{service}</Link>
                  ))}
                </div>
              )}
            </div>
            <div 
              onMouseEnter={() => handleMouseEnter('education')} 
              onMouseLeave={handleMouseLeave}
              className="relative"
            >
              <button onClick={toggleEducationMenu} className="text-white text-lg hover:text-gray-300 flex items-center">
                Eğitimlerimiz <MdKeyboardArrowDown className="ml-1" />
              </button>
              {activeMenu === 'education' && (
                <div className="absolute top-full left-0 mt-1 bg-[#1e2121] text-white py-2 px-4 w-[150px] min-h-[15px] rounded-lg">
                  {["Yapay Zeka Eğitimi", "CV Eğitimi", "Backend Eğitimi", "Frontend Eğitimi"].map((education, index) => (
                    <Link to={`/education/${index + 1}`} key={index} className="block py-1">{education}</Link>
                  ))}
                </div>
              )}
            </div>
            <Link to="/blog" className="text-white text-lg hover:text-gray-300">Blog</Link>
          </div>

          <div className="flex gap-4 ml-auto">
            <Link to="/offer" className="border text-white text-sm md:text-base px-4 py-2 rounded-full flex items-center transition duration-200 transform hover:scale-105">
              <FaRegHandshake className="mr-2" /> Teklif Al
            </Link>
            <Link to="/contact" className="border text-white text-sm md:text-base px-4 py-2 ml-4 rounded-full">İletişim</Link>
          </div>

          <button className="md:hidden text-white ml-4" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            {isSidebarOpen ? "✖" : "☰"}
          </button>
        </div>
      </nav>

      <aside className={`fixed top-0 left-0 w-1/2 h-full bg-black z-20 transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex flex-col items-start p-6">
          <Link to="/" className="text-white text-lg mb-4" onClick={() => setIsSidebarOpen(false)}>Anasayfa</Link>
          <Link to="/about" className="text-white text-lg mb-4" onClick={() => setIsSidebarOpen(false)}>Hakkımızda</Link>
          <div>
            <button onClick={toggleServicesMenu} className="text-white text-lg mb-4 flex items-center">Hizmetlerimiz <MdKeyboardArrowDown className="ml-2" /></button>
            {isServicesOpen && (
              <div className="ml-4">
                {["Yazılım Geliştirme", "Web Tasarımı", "Mobil Uygulama Tasarımı", "Veri Analizi", "SEO Danışmanlığı", "E-Ticaret Çözümleri"].map((service, index) => (
                  <Link to={`/card/${index + 1}`} key={index} className="text-white text-sm block my-2" onClick={() => setIsSidebarOpen(false)}>{service}</Link>
                ))}
              </div>
            )}
          </div>
          <div>
            <button onClick={toggleEducationMenu} className="text-white text-lg mb-4 flex items-center">Eğitimlerimiz <MdKeyboardArrowDown className="ml-2" /></button>
            {isEducationOpen && (
              <div className="ml-4">
                {["Yapay Zeka Eğitimi", "CV Eğitimi", "Backend Eğitimi", "Frontend Eğitimi"].map((education, index) => (
                  <Link to={`/education/${index + 1}`} key={index} className="text-white text-sm block my-2" onClick={() => setIsSidebarOpen(false)}>{education}</Link>
                ))}
              </div>
            )}
          </div>
          <Link
  to="/offer"
  className="text-white text-base px-2 py-1 rounded-lg border bg-gradient-to-r from-purple-500 to-blue-500 hover:text-black transition"
  onClick={() => setIsSidebarOpen(false)}
>
  Teklif Al
</Link>
<Link
  to="/contact"
  className="text-white text-base px-2 py-1 rounded-lg border border-white hover:bg-white hover:text-black transition"
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
