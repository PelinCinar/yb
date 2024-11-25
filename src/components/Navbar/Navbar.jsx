import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaRegHandshake } from "react-icons/fa";
import Logo from "../../assets/Logo/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    const handleClickOutside = (e) => {
      if (!e.target.closest(".mobile-menu") && !e.target.closest(".menu-toggle")) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleMouseEnter = (menu) => setActiveMenu(menu);
  const handleMouseLeave = () => setActiveMenu("");

  const getNavbarBackgroundColor = () => (isScrolled ? "bg-[#1e2121]" : "bg-transparent");

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const menuItems = [
    { name: "Anasayfa", path: "/" },
    { name: "Hakkımızda", path: "/about" },
    {
      name: "Hizmetlerimiz",
      subMenu: [
        "Web Tasarımı Hizmetleri",
        "Mobil Uygulama Geliştirme",
        "Veri Analizi Hizmetleri",
        "UX/UI Tasarım Hizmetleri",
      ],
      basePath: "/card",
    },
    {
      name: "Eğitimlerimiz",
      subMenu: [
        "Yapay Zeka Eğitimi",
        "CV Eğitimi",
        "Backend Eğitimi",
        "Frontend Eğitimi",
        "Yazılım Rehberlik",
      ],
      basePath: "/education",
    },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <>
      <nav className={`fixed w-full z-10 transition-all duration-300 ${getNavbarBackgroundColor()}`}>
        <div className="container mx-auto flex justify-between items-center p-4">
          <Link to="/" className="flex items-center">
            <div className="bg-[#ffffffb3] rounded-full w-16 h-16 flex items-center justify-center">
              <img src={Logo} alt="Logo" className="w-14 h-auto" />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-center gap-9">
            {menuItems.map((item, index) => (
              <div
                key={index}
                onMouseEnter={() => item.subMenu && handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
                className="relative"
              >
                {item.subMenu ? (
                  <>
                    <button className="text-white text-lg hover:text-gray-300 flex items-center">
                      {item.name} <MdKeyboardArrowDown className="ml-1" />
                    </button>
                    {activeMenu === item.name && (
                      <div className="absolute top-full left-0 mt-1 bg-[#1e2121] text-white py-4 px-5 w-[180px] rounded-lg">
                        {item.subMenu.map((subItem, subIndex) => (
                          <Link
                            to={`${item.basePath}/${subIndex + 1}`}
                            key={subIndex}
                            className="block py-1 hover:text-gray-300"
                          >
                            {subItem}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link to={item.path} className="text-white text-lg hover:text-gray-300">
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex gap-1 ml-auto">
            <Link
              to="/offer"
              className="border text-white text-sm md:text-base px-4 py-2 rounded-full flex items-center transition duration-200 transform hover:scale-105 bg-gradient-to-r from-purple-500 to-blue-500"
            >
              <FaRegHandshake className="mr-2" /> Teklif Al
            </Link>
            <Link
              to="/contact"
              className="border text-white text-sm md:text-base px-4 py-2 ml-4 rounded-full"
            >
              İletişim
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="menu-toggle md:hidden text-white ml-4" onClick={toggleMobileMenu}>
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu absolute left-0 right-0 bg-black text-white py-4 px-5 z-20">
          <div className="flex flex-col">
            {menuItems.map((item, index) => (
              <div key={index} className="mb-4">
                {item.subMenu ? (
                  <>
                    <button
                      className="text-white text-lg flex items-center"
                      onClick={() => handleMouseEnter(item.name)}
                    >
                      {item.name} <MdKeyboardArrowDown className="ml-2" />
                    </button>
                    {activeMenu === item.name && (
                      <div className="ml-4">
                        {item.subMenu.map((subItem, subIndex) => (
                          <Link
                            to={`${item.basePath}/${subIndex + 1}`}
                            key={subIndex}
                            className="text-white text-sm block my-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className="text-white text-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
