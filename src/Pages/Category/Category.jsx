import React, { useState } from "react";
import { Link } from "react-router-dom";
import { fetchData } from "../../Component/FetchData";
import gym from "../../Component/images/gym.png";
import "./Category.css";
import { API_KEY_bodypart } from "../../Component/api/apikey";

const Cat = () => {
  const [category, setCategory] = useState([]);
  const options = {
    method: "GET",
    url: "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
    headers: {
      "X-RapidAPI-Key": API_KEY_bodypart,
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  const getData = async () => {
    const res = await fetchData(options);
    setCategory(res);

    console.log("res", res);
  };

  React.useEffect(() => {
    getData();
  }, []);
  return (
    <div className="cat">
      {category?.map((res) => {
        return (
          <>
            <div className="cat-img" key={res.indax}>
              <img src={gym} alt="" />
              <Link to={`details/${res}`} className="link">
                <h2 className="head">{res}</h2>
              </Link>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Cat;
