import React from "react";
import profile from "../../assets/profile.png";

const Header = () => {
  return (
    <>
      <div className="px-2 md:px-32">
        <div className="flex justify-between ">
          <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
          <img className="w-12" src={profile} alt="" />
        </div>
        <hr className="border-1 my-2" />
      </div>
    </>
  );
};

export default Header;
