import React, { useState } from "react";
import Card from "./card";

const Cards = ({ courses, category }) => {
    const [likedCourses, setLikedCourses] = useState([])
  const getCourses = () => {
    if (category === "All") {
      let allCourses = [];
      Object.values(courses).forEach((array) => {
        array.forEach((courseData) => {
          allCourses.push(courseData);
        });
      });
      return allCourses;
    } else {
      return courses[category];
    }
  };
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getCourses().map((course) => {
        return <Card course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>;
      })}
    </div>
  );
};

export default Cards;
