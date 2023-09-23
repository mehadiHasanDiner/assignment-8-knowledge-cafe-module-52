import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  //   console.log(blogs);
  return (
    <>
      <div className="grid xs:grid-cols-1  md:grid-cols-3  gap-4 xs:px-16 md:px-16">
        <div className="col-span-2 mr-16">
          {blogs.map((blog) => (
            <Blog blog={blog} key={blog.id}></Blog>
          ))}
        </div>
        <div>
          <h1>Spent time on read : 0 min</h1>
        </div>
      </div>
    </>
  );
};

export default Blogs;
