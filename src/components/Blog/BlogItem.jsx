import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const BlogItem = ({ id, title, author, content, image }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/blog/${id}`)}
      className="cursor-pointer flex items-center bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 w-full max-w-5xl mx-auto mb-4"
    >
      <img src={image} alt={title} className="w-1/3 h-48 object-cover" />
      <div className="p-6 w-2/3">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">{title}</h2>
        <p className="text-sm text-gray-500 mb-4">Yazar: {author}</p>
        <p className="text-gray-700">{content}</p>
      </div>
    </div>
  );
};

BlogItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default BlogItem;
