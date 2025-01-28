import React from "react";
import "../index.css";
import logo from "../assets/logo.png";
import video1 from "./../videos/video1.mp4";
import video2 from "./../videos/video2.mp4";
import video3 from "./../videos/3.mp4";
import video4 from "./../videos/4.mp4";
import video5 from "./../videos/5.mp4";
import video6 from "./../videos/6.mp4";
import video7 from "./../videos/7.mp4";

const Title = () => {
  return (
    <div className="title">
      <div className="main-container">
        <div className="content-container">
          {/* Image Container */}
          <div className="image-container">
            <img src={logo} alt="Logo" className="logo" />
            <div className="text-overlay">
              <h2>Fin Genius</h2>
              <p>para1</p>
              <p>para2</p>
            </div>
          </div>

          {/* Video Container */}
          <div className="video-container">
            <div className="row1 rows">
              <div className="col1">
                <video autoPlay muted loop controls>
                  <source src={video1} />
                </video>
              </div>

              <div className="col2">
                <video autoPlay muted loop controls>
                  <source src={video2} />
                </video>
              </div>
            </div>
            <div className="row2 rows">
              <div className="col1">
                <video autoPlay muted loop controls>
                  <source src={video3} />
                </video>
              </div>

              <div className="col2">
                <video autoPlay muted loop controls>
                  <source src={video4} />
                </video>
              </div>

              <div className="col3">
                <video autoPlay muted loop controls>
                  <source src={video5} />
                </video>
              </div>
            </div>
            <div className="row3 rows">
              <div className="col1">
                <video autoPlay muted loop controls>
                  <source src={video6} />
                </video>
              </div>

              <div className="col2">
                <video autoPlay muted loop controls>
                  <source src={video7} />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;
