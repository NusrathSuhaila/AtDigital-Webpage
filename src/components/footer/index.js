import React from "react";
import company from "../../assests/Company Icon.png";
import tittle from "../../assests/AtDigital.png";
import './style.css';

const Footer = () => {
  return (
    <footer style={{ background: "#6B3CC9", color: "#fff", padding: "20px" }}>
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={company}/><img src={tittle}/>
            <div className="mt-4">
              <h5 style={{ marginTop: "10px", fontWeight: 400 }}>
                Your goal is our target. Not anything in between. We use online
                marketing platforms and tools to achieve single objective - your
                business results.
              </h5>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="col">
                <ul>
                  <li className="list-group-item"><h3>Our Technologies</h3></li>
                  <li className="list-group-item">ReactJS</li>
                  <li className="list-group-item">Gatsby</li>
                  <li className="list-group-item">NextJS</li>
                  <li className="list-group-item">NodeJS</li>
                </ul>
              </div>
              <div className="col text-left">
                <ul>
                  <li className="list-group-item">
                    <h3>Our Services</h3>
                  </li>
                  <li className="list-group-item">Social Media Marketing</li>
                  <li className="list-group-item">Web & Mobile App Development</li>
                  <li className="list-group-item">Data & Analytics</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{ textAlign: "center", marginTop: "20px" }}>
        <div className="row">
          <div className="col">
            <hr style={{ borderColor: "#fff", borderWidth: "1px", width: "630px", margin: "0 auto" }} />
          </div>
        </div>
      </div>
      <div className="container" style={{ textAlign: "center", marginTop: "20px", fontWeight: 500 }}>
        <p>Privacy Policy &nbsp; | &nbsp; Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
