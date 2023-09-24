import React from "react";

const Blog = (props) => {
  //   console.log(props.blog);
  const {
    id,
    cover_image,
    author_image,
    author_name,
    blog_title,
    reading_time,
    hashTags,
  } = props.blog;
  const handleBookmark = props.handleBookmark;

  return (
    <>
      <div className="mt-4 ">
        <div className="p-4 shadow-xl rounded-xl">
          <img className="rounded-md w-full" src={cover_image} alt="" />
          <div className="flex justify-between py-2">
            <div className="flex">
              <div className="pr-2">
                <img
                  className="rounded-s-full rounded-e-full"
                  src={author_image}
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-2x font-bold">{author_name}</h3>
                <p>Mar 14 (4 Days ago)</p>
              </div>
            </div>
            <div className=" flex">
              {reading_time} min read{" "}
              <span
                onClick={() => handleBookmark(id)}
                className="cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                  />
                </svg>
              </span>
            </div>
          </div>
          <h1 className="text-2xl font-bold my-2">{blog_title}</h1>
          {hashTags.map((hashTag) => (
            <span
              key={hashTag}
              className="mr-2 badge badge-primary cursor-pointer my-2"
            >
              {hashTag}
            </span>
          ))}
          <p className="text-purple-500 underline cursor-pointer">
            Mark as read
          </p>
          {/* <hr className="border-1 my-4" /> */}
        </div>
      </div>
    </>
  );
};

export default Blog;
