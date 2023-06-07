import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Cards.css";
const Cards = () => {
  const [data, setData] = useState([]);
  const [clicked, setClicked] = useState(false);

  const handleToggle = () => {
    setClicked(!clicked);
  };

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div>
      {data.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          <div className="cards">
            {data.map((item) => (
              <div className="card">
                <l1 key={item.show.id}>
                  {item.show.image && (
                    <>
                      <div
                        className="card-img"
                        onClick={() =>
                          navigate(`/show/${item.show.id}`, {
                            state: item.show.id,
                          })
                        }
                      >
                        <img
                          src={item.show.image.medium}
                          alt={item.show.name}
                        />
                      </div>
                      <div
                        className="card-name"
                        onClick={() =>
                          navigate(`/show/${item.show.id}`, {
                            state: item.show.id,
                          })
                        }
                      >
                        {item.show.name}
                      </div>
                      <div className="card-rating">
                        <span onClick={handleToggle}>
                          {clicked ? (
                            <span
                              style={{
                                backgroundColor: "brown",
                                cursor: "pointer",
                              }}
                            >
                              &#10084;
                            </span>
                          ) : (
                            <span
                              style={{
                                backgroundColor: "brown",
                                cursor: "pointer",
                              }}
                            >
                              &#9825;
                            </span>
                          )}
                        </span>
                        <span
                          style={{ float: "right", backgroundColor: "brown" }}
                        >
                          {(item.score * 10).toFixed(2)}/10
                        </span>
                      </div>
                    </>
                  )}
                </l1>
              </div>
            ))}
          </div>
        </ul>
      )}
    </div>
  );
};

// <li key={item.show.id}>
//               <h2>{item.show.name}</h2>
//               <p> {item.show.summary} </p>
//               {item.show.image && (
//                 <img src={item.show.image.medium} alt={item.show.name} />
//               )}
//             </li>

export default Cards;
