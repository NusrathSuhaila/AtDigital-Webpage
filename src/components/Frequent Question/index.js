import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import './style.css'

const About = () => {
  return (
    <div className="container  align-items-center p-5">
      <div className="card mb-3 p-4" style={{ border: "none", alignItems:'center' }}>
        <div className="card-body">
          <h2
            className="card-title text-center" 
            style={{ color: "#6B3CC9", padding: "10px" }}
          >
            Frequently asked questions
          </h2>
          <div className="accordion" id="accordionExample"   >
            <div className="accordion-item"style={{justifyItems:"center"}}>
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                  style={{
                    fontSize: "20px",
                    fontWeight: 500,
                    color:"#6B3CC9",
                    backgroundColor: "#FAF8FF",
                    border:'none'
                  }}
                >
                 Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div
                  className="accordion-body"
                  style={{
                    fontSize: "18px",
                    fontWeight: 400,
                    color:"#6F6C90",
                    backgroundColor: "#FAF8FF",
                    border:'none'
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur. Faucibus commodo
                  suscipit id ipsum. Elementum ultrices <br/> nulla faucibus odio est
                  sed aliquam. Sapien massa morbi risus sagittis tortor integer.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                  style={{ fontSize: "20px", fontWeight: 500, color:"black", backgroundColor: "#FAF8FF"}}
                >
                  Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div
                  className="accordion-body"
                  style={{
                    fontSize: "18px",
                    fontWeight: 400,
                    color:"#6F6C90",
                    backgroundColor: "#FAF8FF",
                  }}
                >
                  It is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                  style={{ fontSize: "20px", fontWeight: 500,backgroundColor: "#FAF8FF", color:"black" ,border:'none'}}
                >
                  Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div
                  className="accordion-body"
                  style={{
                    fontSize: "18px",
                    fontWeight: 400,
                    color:"#6F6C90",
                    backgroundColor: "#FAF8FF",
                    border:'none'
                  }}
                >
                  It is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. 
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
