import React from "react";
import { fetchData } from "../../Component/FetchData";
import { API_KEY_similar_exercises } from "../../Component/api/apikey";
const options = {
  method: "GET",
  url: "https://exercisedb.p.rapidapi.com/exercises",
  headers: {
    "X-RapidAPI-Key": API_KEY_similar_exercises,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

const Equipment = () => {
  const [equipment, setEquipment] = React.useState([]);
  const getExercises = async () => {
    const res = await fetchData(options);
    setEquipment(res);
    console.log("res", res);
  };
  React.useEffect(() => {
    getExercises();
  }, []);

  return (
    <div>
      <h1 className="hadding">Exercises <span>that use the same</span> equipment</h1>
      <div className="similarExercises">
        {equipment.slice(35, 80)?.map((item) => {
          return (
            <div className="data-sim" key={item.id}>
              <div className="similar-data">
                <img src={item.gifUrl} alt="" />
                <div>
                  <div className="button-bodypart">
                    <button className="button">{item.bodyPart}</button>
                    <button className="buttons">
                      {item.target.substring(1, 14)}
                    </button>
                  </div>

                  <h2>{item.name.substring(1, 35)}...</h2>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Equipment;
