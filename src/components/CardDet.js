import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/CardDet.css";
import Header from "./Header";
const CardDet = (props) => {
  const [data, setData] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    message: "0",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(formData);
    closeModal();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const currentDate = new Date();
  const formattedDate = currentDate.toDateString();

  const location = useLocation();
  useEffect(() => {
    fetchData();
  });
  const fetchData = async () => {
    try {
      const id = location.state;
      const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
      const jsonData = await response.json();
      setData(jsonData);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <Header />

      {isModalOpen ? (
        <>
          <div className="modal" style={{ color: "white" }}>
            <div className="modal-content">
              <div
                className="formtitle"
                style={{ borderBottom: "5px double white" }}
              >
                Book Tickets
              </div>

              <form onSubmit={handleSubmit} style={{ margin: "20px" }}>
                Movie Name &emsp;:&emsp; {data.name} <br />
                Data &emsp;:&emsp; {formattedDate} <br />
                Runtime &emsp;:&emsp; {data.runtime} mins <br />
                <div
                  className="person"
                  style={{ backgroundColor: "rgb(8, 36, 61)" }}
                >
                  Enter number of persons:
                  <textarea
                    style={{ backgroundColor: "white" }}
                    id="message"
                    name="message"
                    type="number"
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>
                <div
                  className="modal-btn"
                  style={{ backgroundColor: "rgb(8, 36, 61)" }}
                >
                  <button
                    type="submit"
                    style={{
                      backgroundColor: "orange",
                    }}
                  >
                    Submit
                  </button>
                  <button
                    type="submit"
                    style={{ backgroundColor: "orange" }}
                    onClick={closeModal}
                  >
                    Clsoe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="show">
            <div className="show-name">
              <h2>{data.name}</h2>
            </div>
            <div className="show-content">
              <div className="show-img">
                <img src={data.medium} alt="show-img" />
              </div>
              <div className="show-sum">
                <span
                  style={{
                    fontWeight: "bold",
                    backgroundColor: "rgb(8, 36, 61)",
                  }}
                >
                  {data.name} <br />
                </span>
                {data.summary}
                <br />
                <div className="det">
                  <div
                    className="show-rating"
                    style={{
                      textAlign: "center",
                      padding: "10px",
                      borderRadius: "20px",
                    }}
                  >
                    Show Ratings <br /> {data.average}
                  </div>
                  <div
                    className="runtime"
                    style={{
                      textAlign: "center",
                      padding: "10px",
                      borderRadius: "20px",
                    }}
                  >
                    Show Runtime <br />
                    {data.runtime} mins
                  </div>
                </div>
              </div>
            </div>
            <div className="btn" onClick={openModal}>
              <button
                style={{ backgroundColor: "orange", border: "none" }}
                onClick={openModal}
              >
                <strong style={{ backgroundColor: "orange", border: "none" }}>
                  Book Ticket
                </strong>
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CardDet;
