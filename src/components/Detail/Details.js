
import "./details.scss";
import profile from "../assests/profile.png";
import rainy from "../assests/rain.png";
import temperature from "../assests/pressure.png";
import wind from "../assests/wind.png";
import humidity from "../assests/humidity.png";
import line from "../assests/line.png";
import React, { useEffect, useState } from "react";

const Details = () => {
  const [cardTitle, setCardTitle] = useState([]);
  const [name, setName] = useState([])

  useEffect(() => {
    const storedCardTitle = localStorage.getItem("MovieDetails");
    if (storedCardTitle) {
      const showTitle = JSON.parse(storedCardTitle);
      setCardTitle(showTitle);
    }

    const storedName = localStorage.getItem("formData");
    if (storedName) {
      const showName = JSON.parse(storedName);
      setName(showName);
    }



  }, []);

  return (
    <>
      <section className="main-container">
        <div className="sub-container">
          <div className="left-container">
            <div className="top-profile">
              <div className="profile-temp">
                <div className="profile-box">
                  <div className="image-box">
                    <img src={profile} alt="" />
                  </div>
                  <div className="content-box">
                    <div className="profile-info">
                      <p>Lokesh shah</p>
                      <p>lokesh@gmail.com</p>
                      <p className="username">Lokesh</p>
                    </div>
                    <div className="movie-info">
                            <button>action</button>
                            <button>action</button>
                            <button>action</button>
                            <button>action</button>
                            <button>action</button>
                            <button>action</button>
                            <button>action</button>
                            <button>action</button>
                    </div>
                  </div>
                </div>
                <div className="temp-box">
                  <div className="upper">
                    <p>2-02-2023</p>
                    <p>03:33 PM</p>
                  </div>
                  <div className="lower">
                    <div className="first">
                      <div className="row">
                      <img src={rainy} alt=""/>
                      <p>Heavy rain</p>
                      </div>
                    <div className="line">
                      <img src={line} alt="" />
                    </div>
                    </div>
                    <div className="second">
                      <div className="row">
                      <p>24&deg;C</p>
                      <p><img src={temperature} alt=""/><span>1010 mbar pressure</span></p>
                      </div>
                    <div className="line">
                      <img src={line} alt="" />
                    </div>
                    </div>
                    <div className="third">
                      <div className="third-one">
                      <img src={wind} alt="" />
                      <p>3.7km/hr<br/> wind</p>
                      </div>
                      <div className="third-two">
                      <img src={humidity} alt="" />
                      <p>87% <br/>Humidity</p>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div className="notes-container"></div>
            </div>
            <div className="bottom-profile"></div>
          </div>
          <div className="right-container"></div>
        </div>
        <div className="bottom-container">
          <button>Browse</button>
        </div>
      </section>
    </>
  );
};


export default Details;
