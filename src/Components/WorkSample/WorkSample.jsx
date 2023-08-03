import { useState } from "react";
import { BlueFooter } from "../CommonComponents";
import "./WorkSample.css";
const WorkSample = () => {
  const [isGen, setIsGen] = useState(true);
  const [isDiv, setIsDiv] = useState(false);

  const loadDivComp = () => {
    return <div>Division</div>;
  };

  const loadGenComp = () => {
    return <div>General</div>;
  };

  return (
    <>
      <div className="wsMainContainer">
        <div className="wsTabContainer">
          <div
            className={
              isGen
                ? "wsTabItemSelect wsTabItem"
                : "wsTabItemUnSelect wsTabItem"
            }
            onClick={() => {
              setIsGen(!isGen);
              setIsDiv(!isDiv);
            }}
          >
            General Samples
          </div>
          <div
            className={
              isDiv
                ? "wsTabItemSelect wsTabItem"
                : "wsTabItemUnSelect wsTabItem"
            }
            onClick={() => {
              setIsGen(!isGen);
              setIsDiv(!isDiv);
            }}
          >
            Division Samples
          </div>
        </div>
        <div> {isGen ? loadGenComp() : loadDivComp()}</div>
      </div>
      <BlueFooter />
    </>
  );
};

export default WorkSample;
