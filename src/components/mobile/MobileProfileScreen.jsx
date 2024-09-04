import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const MobileProfileScreen = ({setCurrentScreenTab, userId, userDetails}) => {
  return (
    <>
      <div className="h-screen w-screen flex flex-col">
        <div className="h-[12%] bg-white flex items-center justify-between px-4">
          <div className="h-full flex justify-start items-center gap-4">
            <button className="text-xl" onClick={() => setCurrentScreenTab(0)}>
              <FaArrowLeft />
            </button>
          </div>
        </div>

        <div className="h-[60%] flex flex-col justify-center items-center gap-3">
            <img
              className="border w-28 h-28 object-fill rounded-full"
              src={userDetails?.userImagE || `https://raw.githubusercontent.com/eladnava/material-letter-icons/master/dist/svg/${userDetails?.userNamE.charAt(0).toUpperCase()}.svg`}
            />
            <p className="text-3xl font-medium">
            {userDetails?.userNamE}
            </p>
            <p className="text-2xl text-slate-600">
                {userId}
            </p>
        </div>
      </div>
    </>
  );
};

export default MobileProfileScreen;
