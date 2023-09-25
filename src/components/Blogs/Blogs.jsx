import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Blog from "../Blog/Blog";
import Bookmark from "../Bookmark/Bookmark";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [bookMark, setBookMark] = useState([]);
  const [readingTime, setReading] = useState(0);

  const handleReadingTime = (blogId) => {
    const blogReadTime = blogs.find((b) => b.id === blogId);
    const totalTime = readingTime + blogReadTime.reading_time;
    setReading(totalTime);
  };

  const handleBookmark = (blogId) => {
    let newBookmarked = [];
    const isBookmarked = bookMark.find((blog) => blog.id === blogId);
    if (!isBookmarked) {
      blogs.forEach((blogItem) => {
        if (blogItem.id === blogId) {
          newBookmarked.push({ ...blogItem, bookmark: true });
        } else {
          newBookmarked.push({ ...blogItem });
        }
      });
      setBlogs(newBookmarked);

      const foundBookmarked = blogs.find((blog) => blog.id === blogId);
      const updatedBookmarked = [...bookMark, foundBookmarked];
      setBookMark(updatedBookmarked);
      // console.log(updatedBookmarked);
    } else {
      toast.error("This blog is already added!");
    }
  };
  // console.log(blogs);

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
              handleReadingTime={handleReadingTime}
            ></Blog>
          ))}
        </div>
        <>
          <Bookmark readingTime={readingTime} bookMark={bookMark}></Bookmark>
          <ToastContainer />
        </>
      </div>
    </>
  );
};

export default Blogs;
