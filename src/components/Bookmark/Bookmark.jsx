import React from "react";

const Bookmark = (props) => {
  // console.log(props);
  const readingTime = props.readingTime;
  const bookMark = props.bookMark;

  return (
    <div>
      <div className="mt-6 sticky top-0">
        <div>
          <h1 className="font-bold border-purple-400 border-4 bg-purple-100 rounded-md p-4 text-center">
            Spent time on read : {readingTime} min
          </h1>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg h-screen my-4">
          <h2 className="font-bold text-xl">
            Bookmarked Blogs : {bookMark.length}
          </h2>

          {bookMark.map((title, index) => (
            <div key={index} className="bg-white p-4 my-4 rounded-lg">
              {title.blog_title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookmark;
