import React from "react";
import company from "../../assests/Company Icon.png";
import './style.css';
import tittle from "../../assests/AtDigital.png";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{backgroundColor: '#6B3CC9', height:'77px', width:'fixed'}}>
        <div className="container">
          <img src={company} id="companyIcon"/> 
          <img src={tittle} id="Ctittle"/>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0" >
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="#SERVICES">
                  SERVICES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#ABOUT US">
                  ABOUT US
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#CONTACT US">
                  CONTACT US
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#CAREERS">
                  CAREERS
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
