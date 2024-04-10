import React from "react";
import com from "../../assests/com.png";

const About = () => {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <img
            src={com}
            alt="About"
            style={{ width: "414px", height: "414px" }}
          />
        </div>
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
              Web & Mobile App Development
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
              Your web and mobile Apps are pieces of the puzzle to grow your
              business. We use frameworks which tailor content and engagement
              methods to respond to different intents shown by your potential
              customers who interact with your business online.
            </p>
            <div style={{ textAlign: "left" }}>
              <button
                style={{
                  padding: "7px 22px",
                  borderRadius: "5px",
                  color: "white",
                  backgroundColor: "#F28D35",
                  border: "none",
                  fontWeight:600
                }}
              >
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
