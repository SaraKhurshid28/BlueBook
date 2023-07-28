import React, { useState } from "react";
import ".././Home.css";
import { BlueButton, BlueUploadModal } from "../../CommonComponents";
const Section3 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="sec3MainConatiner">
        <h1 className="sec3Heading">Your Plan</h1>
        <hr className="sec3HeadingLine" />
        <p className="sec3Text">
          We can help you to convert your Plan into Reality
        </p>

        <div className="sec3ButtonContainer">
          <BlueButton
            text={"Upload Your Plan"}
            height={window.innerWidth > 700 ? 60 : 40}
            buttonBackground={"blue"}
            onClick={() => {
              setIsModalOpen(!isModalOpen);
            }}
            size={20}
          />
        </div>
      </div>

      <BlueUploadModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
};

export default Section3;
