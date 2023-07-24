import React, { useState } from "react";
import ".././Home.css";
import { BlueButton } from "../../CommonComponents";
const Section3 = () => {
  const [isLoadingButton, setIsLoadingButton] = useState(false);

  const onClickButton = () => {
    setIsLoadingButton(true);
    console.log("Calling From in Section 3");
    setIsLoadingButton(false);
  };
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
            isLoading={isLoadingButton}
            text={"Upload Your Plan"}
            height={window.innerWidth > 700 ? 60 : 40}
            buttonBackground={"blue"}
            onClick={onClickButton}
            size={20}
          />
        </div>
      </div>
    </>
  );
};

export default Section3;
