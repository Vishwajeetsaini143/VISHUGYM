import React from "react";
import { fetchData } from "../../Component/FetchData";
import { API_KEY_exercises_videos } from "../../Component/api/apikey";
import "./Exercisevideo.css";

const options = {
  method: "GET",
  url: "https://youtube-search-and-download.p.rapidapi.com/trending",
  params: { type: "mu", hl: "en", gl: "US" },
  headers: {
    "X-RapidAPI-Key": API_KEY_exercises_videos,
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

// console.log('opt',options)
const ExerciseVideo = () => {
  const [videos, setVideos] = React.useState([]);
  const getData = async () => {
    const res = await fetchData(options);
    setVideos(res.contents);
    console.log(res.contents);

    console.log("res", res);
  };
  console.log(videos);
  React.useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1 className="h1">
        
          Exercisse Videos
        
      </h1>

      <div className="video-detalis">
        {videos?.slice(6, 13).map((item) => {
          return (
            <div className="video-data" key={item.name}>
              <div className="video-img">
                <img
                  src={item.video.thumbnails[0].url}
                  alt={item.video.title}
                />
              </div>
              <div>
                <h3>{item.video.title.substring(1, 29)}...</h3>
                <h3>{item.video.channelName}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ExerciseVideo;
