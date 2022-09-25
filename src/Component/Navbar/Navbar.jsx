import React, { useState, useEffect } from "react";
import Logo from "../../Component/images/Logo.png";
import "./Navbar.css";
import banner from "../../Component/images/banner.png";

import SearchExercises from "../../Pages/SearchExercises/SearchExercises";
import Cat from "../../Pages/Category/Category";
import ShowingResults from "../../Pages/Showing/ShowingResults";
import { Link } from "react-router-dom";
import { fetchData } from "../FetchData";
import { API_KEY_exercises } from "../api/apikey";

const options = {
  method: "GET",
  url: "https://exercisedb.p.rapidapi.com/exercises",
  headers: {
    "X-RapidAPI-Key": API_KEY_exercises,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};
const Navbar = () => {
  const [data, setData] = useState([]);

  const getDetails = async () => {
    const res = await fetchData(options);
    setData(res);
    console.log("res", res);
  };

  useEffect(() => {
    getDetails();
  }, []);

  const handleChange = (e) => {
    console.log("query", e.target.value);

    const searchedExercises = data.filter(
      (item) =>
        item.name.toLowerCase().includes(e.target.value) ||
        item.target.toLowerCase().includes(e.target.value) ||
        item.equipment.toLowerCase().includes(e.target.value) ||
        item.bodyPart.toLowerCase().includes(e.target.value)
    );
    if (searchedExercises) {
      setData(searchedExercises);
    } else {
      setData(data);
    }
  };

  return (
    <>
    
   
      <div className="navbar">
        <div className="navbar-leftside">
          <div className="nav">
            <img src={Logo} alt="" />
            <ul>
              <li className="li">Home</li>
              <Link to="/Exercies" className="link">
                <li>Excersice</li>
              </Link>
            </ul>
          </div>

          <div className="details">
            <p className="navbar-para">Fitness Club</p>

            <h1>
              Sweat, Smile
              <br className="br" />
              And Repeat{" "}
            </h1>
            <p className="para">
              Check out the most effective exercies personalized to you With
              preparing for a stellar workout-sesh comes with a million
              thoughts. The things you think about before, during and
              post-workout may be on totally different spectrums when it comes
              to similarities between them. If you haven't thought of any of
              these phrases during any stage of your workout, 100% the girl{" "}
              <br />
              or guy next to you is thinking it...
            </p>
            <button>Explore Excersice</button>
            <h1 className=" Excersice">Excersice</h1>
          </div>
        </div>

        <div className="right-side">
     
          <div className="navbar-banner">
            <img src={banner} alt="" />
          </div>
        </div>
      </div>

      <SearchExercises handleChange={handleChange} />
      <Cat />
      <ShowingResults data={data} />
    </>
  );
};

export default Navbar;
