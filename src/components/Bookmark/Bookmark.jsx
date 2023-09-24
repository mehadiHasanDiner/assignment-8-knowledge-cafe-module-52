import React from "react";

const Bookmark = (props) => {
  const { blog_title } = props.bookMark;
  return (
    <>
      <div className="bg-gray-100 p-4 rounded-lg h-full">
        <h2 className="font-bold text-xl">Bookmarked Blogs : 8</h2>
        <div className="bg-white p-4 my-4">{blog_title}</div>
      </div>
    </>
  );
};

export default Bookmark;
