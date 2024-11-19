import React from "react";
import { useParams } from "react-router-dom";
import blogData from "../../data/blogData";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogData.find((item) => item.id === parseInt(id));

  if (!blog) {
    return <p className="text-center text-white">Blog bulunamadı.</p>;
  }

  return (
    <div className="bg-black text-white">
      {/* Sayfa Başında Görseli Tam Ekran Olarak Kullan */}
      <div className="w-full h-[80vh] overflow-hidden relative">
        <img
          src={blog.image}
          alt={blog.title}
          className="object-cover w-full h-full object-center" // Görselin orta kısmını gösterir
        />
      </div>

      {/* Başlık ve Yazar */}
      <div className="flex flex-col items-center justify-center px-4 py-8">
        <h1 className="text-4xl font-bold mb-2 text-center">{blog.title}</h1>
        <p className="text-sm text-gray-400 mb-4 text-center">Yazar: {blog.author}</p>

        {/* İçerik */}
        <p className="text-lg text-gray-300 mb-6 text-center">{blog.content}</p>

        {/* Uzun Açıklama */}
        <div className="max-w-3xl text-gray-300 text-base">
          <p>{blog.area}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
