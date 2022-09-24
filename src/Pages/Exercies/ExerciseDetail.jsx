import React from "react";
import { fetchData } from "../../Component/FetchData";
import { useParams } from "react-router-dom";
import "./Exercies.css";
import { API_KEY_bodypart } from "../../Component/api/apikey";
const ExerciseDetail = () => {
  const [data, setData] = React.useState([]);

  const { title } = useParams();

  const options = {
    method: "GET",
    url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${title}`,
    headers: {
      "X-RapidAPI-Key": API_KEY_bodypart,
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  const getDetails = async () => {
    const res = await fetchData(options);
    setData(res);
    console.log("res", res);
  };

  React.useEffect(() => {
    getDetails();
  }, []);

  return (
    <>
      <h1 className="h1">
       
         
          {title} all exercies
        
      </h1>

      <div className="exercies-detalis">
        {data?.map((item) => {
          return (
            <>
              <div className="exercies" key={item.id}>
                <img src={item.gifUrl} alt="" />
                <h3>{item.name.substring(1, 30)}...</h3>
                <h3>{item.equipment}</h3>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default ExerciseDetail;
