import React from "react";
import { fetchData } from "../../Component/FetchData";
import BodypartImage from "../../Component/images/BodypartImage.png";
import TargetImage from "../../Component/images/TargetImage.png";
import EquipmentImage from "../../Component/images/EquipmentImage.png";
import "./Detail.css";
import { API_KEY_exercises } from "../../Component/api/apikey";

const Detail = () => {
  const [data, setData] = React.useState([]);

  const options = {
    method: "GET",
    url: "https://exercisedb.p.rapidapi.com/exercises",
    headers: {
      "X-RapidAPI-Key": API_KEY_exercises,
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
      <h1 className="h2">
       
          Exercisse Details
       
      </h1>
      <div className="details-item">
        {data.slice(13, 15)?.map((item) => {
          return (
            <>
              <div className="details-exercies" key="{item.indax}">
                <div className="img-detalis">
                  <img src={item.gifUrl} alt="" />
                </div>
                <div className="details-text">
                  <h1>{item.name.substring(1, 30)}</h1>
                  <span>
                    bup is one of the best exercises to target your .<br /> It
                    will help you improve your mood and gain
                    <br /> energy.
                  </span>

                  <div className="body">
                    <img src={EquipmentImage} alt="" />
                    <h5> weight</h5>
                  </div>
                  <div className="body">
                    <img src={TargetImage} alt="" />
                    <h5>Abs</h5>
                  </div>
                  <div className="body">
                    <img src={BodypartImage} alt="" />
                    <h5>Waist</h5>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Detail;
