import React from "react";
import { fetchData } from "../../Component/FetchData";
import { useParams } from "react-router-dom";
import "./Exerciescard.css";
import { API_KEY_exercises } from "../../Component/api/apikey";
const Exerciescard = () => {
  const [data, setData] = React.useState([]);
  const { name } = useParams();

  const options = {
    method: "GET",
    url: "https://exercisedb.p.rapidapi.com/exercises",
    headers: {
      "X-RapidAPI-Key": API_KEY_exercises,
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  const getDetails = async () => {
    let res = await fetchData(options);
    let fillArr = res.filter((item) => item.name === name);
    console.log(fillArr);
    setData(fillArr[0]);
  };

  React.useEffect(() => {
    getDetails();
  }, []);
  return (
    <div className="exercies-card-data">
      <div className="exrecies-img">
        <img src={data.gifUrl} alt="" />
      </div>
      <div className="exercies-text">
        <h1>{data.name}</h1>
        <h2>Body part- {data.bodyPart}</h2>
        <h2>Machine- {data.equipment}</h2>
        <h2>Target- {data.target}</h2>
      </div>
    </div>
  );
};

export default Exerciescard;
