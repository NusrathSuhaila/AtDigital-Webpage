import React from "react";
import icon1 from "../../assests/icon1.png";

const Summary = () => {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col d-flex align-items-center">
          <div className="box">
            <h3
              style={{
                fontFamily: "Poppins",
                fontSize: "27px",
                fontWeight: "600",
                lineHeight: "33px",
                letterSpacing: "0.4px",
                textAlign: "left",

                color: "#6B3CC9",
              }}
            >
              Digital Strategy Consulting
            </h3>
            <p
              style={{
                fontFamily: "Inter",
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "19.36px",
                textAlign: "left",
              }}
            >
              Your digital strategy should complement the overall marketing
              strategy of the company. In online marketing, each component will
              never work in isolation and every business needs a different mix.
              We provide a clear concept and strategic overview to find the most
              efficient model for your business.
            </p>
            <div style={{ textAlign: "left" }}>
              <button
                style={{
                  padding: "7px 22px",
                  borderRadius: "5px",
                  color: "white",
                  backgroundColor: "#F28D35",
                  border: "none",
                  fontWeight: 600,
                }}
              >
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <img
            src={icon1}
            alt="About"
            style={{ width: "414px", height: "414px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Summary;
