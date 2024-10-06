import React, { useState } from "react";
import toast from "react-hot-toast";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";

const Card = ({ course, likedCourses, setLikedCourses }) => {
  const likedHandler = () => {
    if (likedCourses.includes(course.id)) {
      // liked courses
      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.error("Removed from liked courses");
    } else {
      // course not liked before
      if (likedCourses.length === 0) {
        setLikedCourses([course.id]);
      } else {
        setLikedCourses((prev) => [...prev, course.id]);
      }
      toast.success("Added into liked courses");
    }
  };
  return (
    <div className="w-[300px] bg-slate-800 bg-opacity-80 rounded-md overflow-hidden">
      <div className="relative">
        <img src={course.image.url} alt={course.image.alt} />
        <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-20px] grid place-items-center">
          <button onClick={likedHandler}>
            {likedCourses.includes(course.id) ? (
              <FcLike fontSize="1.75rem" />
            ) : (
              <FcLikePlaceholder fontSize="1.75rem" />
            )}
          </button>
        </div>
      </div>

      <div className="p-4 ">
        <p className="text-white font-semibold text-lg leading-6">
          {course.title}
        </p>
        <p className="text-white mt-2">{`${course.description.substring(
          0,
          200
        )}...`}</p>
      </div>
    </div>
  );
};

export default Card;
