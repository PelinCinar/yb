import React, { useState, useEffect } from "react";
import BlogItem from "./BlogItem";
import blogData from "../../data/blogData";
import Footer from "../../pages/Footer/Footer";

const BlogList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Toplam sayfa sayısını hesapla
  const totalPages = Math.ceil(blogData.length / itemsPerPage);

  // Mevcut sayfadaki blogları al
  const currentItems = blogData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Sayfa değiştiriciler
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Klavye olaylarını dinle
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        handleNextPage();
      } else if (e.key === "ArrowLeft") {
        handlePrevPage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentPage, totalPages]);

  return (
    <div>
      <div className="bg-black pt-32 min-h-screen flex flex-col items-center">
        {/* Kartların Listesi */}
        <div className="w-full">
          {currentItems.map((blog) => (
            <BlogItem
              key={blog.id}
              id={blog.id}
              title={blog.title}
              author={blog.author}
              content={blog.content}
              image={blog.image}
            />
          ))}
        </div>

        {/* Sayfalama Butonları */}
        <div className="flex justify-center mt-8">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`px-4 py- mx-2 mb-1 bg-gray-700 text-white rounded-lg ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-600"
            }`}
          >
           &#8592;
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 mx-2 mb-1 bg-gray-700 text-white rounded-lg ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-600"
            }`}
          >
             &#8594;
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogList;
