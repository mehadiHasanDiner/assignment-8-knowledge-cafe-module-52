import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

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
    bookmark,
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
              <span>
                {bookmark ? (
                  <FontAwesomeIcon
                    onClick={() => handleBookmark(id)}
                    className="cursor-pointer"
                    icon={faBookmark}
                  />
                ) : (
                  <FontAwesomeIcon
                    onClick={() => handleBookmark(id)}
                    className="cursor-pointer"
                    icon={faBookmark}
                  />
                )}
              </span>
            </div>
          </div>
          <h1 className="text-2xl font-bold my-2">{blog_title}</h1>
          {hashTags.map((hashTag, index) => (
            <span
              key={index}
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
