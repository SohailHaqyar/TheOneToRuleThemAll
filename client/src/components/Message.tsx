import React from "react";

export const Message = ({ isOwner }: { isOwner?: boolean }) => {
  return (
    <div
      className={`${isOwner ? "items-end" : ""} flex flex-col mt-2`}
    >
      <div className="flex">
        {!isOwner && (
          <img
            className="w-8 h-8 mr-2 rounded-full object-cover"
            src="https://source.unsplash.com/random"
            alt=""
          />
        )}
        <p
          className={`p-2 rounded max-w-xl  ${
            isOwner
              ? "bg-gray-300 text-black"
              : "bg-lightGreen-600 text-white"
          }`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Consequuntur, accusamus. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Id, fugit. Quae incidunt
          voluptate perferendis architecto excepturi molestias impedit
          pariatur odio?
        </p>
      </div>
      <div className=" my-4 text-gray-800 text-xs text-center">
        1 hour ago
      </div>
    </div>
  );
};
