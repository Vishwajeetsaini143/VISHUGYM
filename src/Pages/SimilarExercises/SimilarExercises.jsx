import React from "react";
import { fetchData } from "../../Component/FetchData";
import "./SimilarExercises.css";
import { API_KEY_similar_exercises } from "../../Component/api/apikey";
const options = {
  method: "GET",
  url: "https://exercisedb.p.rapidapi.com/exercises",
  headers: {
    "X-RapidAPI-Key": API_KEY_similar_exercises,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};
console.log(options);

const SimilarExercises = () => {
  const [similar, setSimilar] = React.useState([]);
  const getData = async () => {
    const res = await fetchData(options);
    setSimilar(res);
    console.log("res", res);
  };
  React.useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1 className="hadding">Exercises that <span>target the same muscle </span> group</h1>
      <div className="similarExercises">
        {similar.slice(5, 35)?.map((item) => {
          return (
            <div className="data-sim" key={item.id}>
              <div className="similar-data">
                <img src={item.gifUrl} alt="" />
                <div>
                  <div className="button-bodypart">
                    <button className="button">{item.bodyPart}</button>
                    <button className="buttons">{item.target}</button>
                  </div>

                  <h2 className="h2-name">{item.name.substring(1, 35)}...</h2>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SimilarExercises;
