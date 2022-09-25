import React from "react";
import "./SearchExercises.css";
const SearchExercises = ({handleChange}) => {


  return (
    <div className="SearchExercises">
      <h1 className="heading-wraper">
        Awesome Excersice You
        <br /> Should Know
      </h1>
      <div className="input-wraper">
        <input type="text" placeholder="Search Exercises" onChange={handleChange} />
        <button className="serach-btn">Search</button>
      </div>
    </div>
  );
};

export default SearchExercises;
