import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import Bookmark from "../Bookmark/Bookmark";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [bookMark, setBookMark] = useState([]);

  const handleBookmark = (bookMarkData) => {
    setBookMark(bookMarkData);
    console.log(bookMarkData);
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
      <div className=" grid grid-cols-1  md:grid-cols-3  gap-4 px-2 xs:px-32 md:px-32">
        <div className="col-span-2 mr-4 ">
          {blogs.map((blog) => (
            <Blog
              blog={blog}
              key={blog.id}
              handleBookmark={handleBookmark}
            ></Blog>
          ))}
        </div>
        <div>
          <div className="mt-6">
            <h1 className="font-bold border-purple-400 border-4 bg-purple-100 rounded-md p-4 text-center">
              Spent time on read : 0 min
            </h1>
          </div>
          <Bookmark bookMark={bookMark}></Bookmark>
        </div>
      </div>
    </>
  );
};

export default Blogs;
