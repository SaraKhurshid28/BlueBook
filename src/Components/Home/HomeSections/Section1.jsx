import { useState } from "react";
import { Images } from "../../../Assests/Constant";
import { BlueButton } from "../../CommonComponents";
import ".././Home.css";
import { useNavigate } from "react-router-dom";

const Section1 = () => {
  const navigator = useNavigate();

  return (
    <>
      <div className="sec1MainContainer">
        <div className="sec1ContentConatiner">
          <h1 className="sec1Heading">Our Vision</h1>
          <p className="sec1Text">
            The Bluebook Estimator is providing professionals fast and accurate
            building cost estimates and material takeoffs. And provide grade
            cost estimates throughout all the design phases of public and
            private commercial and institutional construction projects. Our
            Project Estimator can be customized such that additional information
            can input to meet the needs of our clients business.
          </p>
          <h1 className="sec1Heading">Our Mission</h1>
          <p className="sec1Text">
            Our mission is to develop and maintain a long-term successful
            business relationship with our clients by providing them full
            satisfaction in regards to Turnaround time, Price and most
            importantly reliable Accuracy. To learn more about our services,
            industry experience and work samples, feel free.
          </p>
          <div className="appJustifyAlignCenterItem">
            <div className="sec1ButtonContainer">
              <BlueButton
                text={"About Us"}
                height={window.innerWidth > 1020 ? 60 : 40}
                buttonBackground={"blue"}
                onClick={() => {
                  navigator("/aboutus");
                }}
                size={20}
              />
            </div>
          </div>
        </div>
        <div>
          <img
            src={Images.home1Image}
            alt="homeImage1"
            className="sec1ImageConatiner"
          />
        </div>
      </div>
    </>
  );
};

export default Section1;
