import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

import "./Showing.css";

const ShowingResults = ({ data }) => {
  const [page, setPage] = useState(1);

  const [currentpage, setCurrentpage] = useState(1);
  const [lastIndex, setLastIndex] = useState(20);

  const pagination = () => {
    setCurrentpage(lastIndex);
    setLastIndex(lastIndex + 20);
  };

  useEffect(() => {
    pagination();
  }, [page]);

  const currentItems = data?.slice(currentpage, lastIndex);
  console.log("data", data);

  return (
    <>
      <h1 className="hadeinng">{`Show Results  (${currentItems?.length})`} </h1>

      
      <div className="exercies-detalis">
        {currentItems?.map((item) => {
          return (
            <>
              <div className="exercies" key={item.indax}>
                <img src={item.gifUrl} alt="" className="img" />
                <div className="btn">
                  <button className="button">{item.bodyPart}</button>
                  <Link to={`data/${item.name}`}>
                    <button className="buttons">{item.target}</button>
                  </Link>
                </div>
                <h3>{item.name.substring(1, 35)}...</h3>
              </div>
            </>
          );
        })}
      </div>
      <div className="next">
        <button disabled={page===1?true:''} onClick={() => setPage(page - 1)} className="btn-show">
          Previous
        </button>
        <p>{page}</p>
        <button onClick={() => setPage(page + 1)} className="btn-show">
          Next
        </button>
      </div>
      <Footer/>
    </>
  );
};

export default ShowingResults;
