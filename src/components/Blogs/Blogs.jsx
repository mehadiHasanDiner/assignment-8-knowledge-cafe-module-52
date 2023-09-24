import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import Bookmark from "../Bookmark/Bookmark";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [bookMark, setBookMark] = useState([]);

  const handleBookmark = (bookMarkData) => {
    setBookMark(bookMarkData);
  };
  //   console.log(bookMark);

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  //   console.log(blogs);
  return (
    <>
      <div className="grid xs:grid-cols-1  md:grid-cols-3  gap-4 xs:px-16 md:px-16">
        <div className="col-span-2 mr-8">
          {blogs.map((blog) => (
            <Blog
              blog={blog}
              key={blog.id}
              handleBookmark={handleBookmark}
            ></Blog>
          ))}
        </div>
        <div className="fixed top-16 right-0 pr-16">
          <h1>Spent time on read : 0 min</h1>
          <Bookmark bookMark={bookMark}></Bookmark>
        </div>
      </div>
    </>
  );
};

export default Blogs;
