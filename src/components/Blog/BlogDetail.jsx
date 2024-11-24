import React from "react";
import { useParams } from "react-router-dom";
import blogData from "../../data/blogData";
import Footer from "../../pages/Footer/Footer"; // Make sure you have the Footer component

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogData.find((item) => item.id === parseInt(id));

  if (!blog) {
    return <h2 className="text-center text-red-500">Blog bulunamadı!</h2>;
  }

  const renderBlogDetails = () => {
    return (
      <div className="w-full lg:w-1/2 bg-black p-9 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-white mb-10 text-center rounded-sm">
          {blog.title}
        </h1>
        <div className="text-white text-xl mb-8">
          <p>{blog.content}</p>
        </div>
        <div className="text-white text-lg mb-6">
          <p>{blog.area}</p>
        </div>
      </div>
    );
  };

  const renderBlogImage = () => {
    return (
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-12 mt-16">
        <div className="w-full h-[60vh] bg-gray-800 mb-4 relative rounded-xl overflow-hidden">
          <img
            src={blog.image}
            alt={blog.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        {/* Yazar Bilgisi */}
        <p className="text-white text-sm">Yazar: {blog.author}</p>
      </div>
    );
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row min-h-screen bg-black">
        {/* Sol Kısım: Blog Görseli ve Yazar */}
        {renderBlogImage()}

        {/* Sağ Kısım: Blog Başlık ve İçeriği */}
        {renderBlogDetails()}
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetail;
