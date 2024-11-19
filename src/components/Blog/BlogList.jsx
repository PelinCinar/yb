// BlogList.jsx
import React from "react";
import BlogItem from "./BlogItem";
import blogData from "../../data/blogData";
import Footer from "../../pages/Footer/Footer";

const BlogList = () => {
  return (
    <div>
      <div className="bg-black pt-32 min-h-screen flex flex-col">
        {blogData.map((blog) => (
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
      <Footer />
    </div>
  );
};

export default BlogList;
