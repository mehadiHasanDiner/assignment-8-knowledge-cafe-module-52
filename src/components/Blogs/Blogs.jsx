import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import Bookmark from "../Bookmark/Bookmark";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [bookMark, setBookMark] = useState([]);

  const handleBookmark = (blogId) => {
    setBookMark(blogId);
    console.log(blogId);
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
        <>
          <Bookmark bookMark={bookMark}></Bookmark>
        </>
      </div>
    </>
  );
};

export default Blogs;
