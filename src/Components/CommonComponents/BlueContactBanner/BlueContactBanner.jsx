import BlueButton from "../BlueButton/BlueButton";
import "./BlueContactBanner.css";
const BlueContactBanner = (props) => {
  console.log(props);
  return (
    <>
      <div className="bannerMainContainer">
        {props.bannerType == "oneLine" ? (
          <div className="bannerOneLineMainContainer">
            <p
              className="bannerOneLineTextStyle"
              style={{
                color: props.oneLineTextColor,
                textTransform: props.oneLineTextIsUpper ? "uppercase" : "none",
              }}
            >
              {props.oneLineText}
            </p>
            <div className="bannerOneLineButtonStyle">
              <BlueButton
                text={props.buttonText}
                height={60}
                buttonBackground={"red"}
                size={window.innerWidth > 1020 ? 16 : 14}
              />
            </div>
          </div>
        ) : props.bannerType == "twoLinesWithOneButton" ? (
          <div className="bannerTwoLineTextMainContainer">
            <p className="bannerTwoLineTextStyle">{props.twoLineText}</p>
            <p className="bannerTwoLineTextStyle">{props.twoLineText2}</p>
            <div className="bannerTwoLineButtonStyle">
              <BlueButton
                text={props.buttonText}
                height={window.innerWidth > 1020 ? 80 : 40}
                buttonBackground={"red"}
                size={window.innerWidth > 1020 ? 16 : 14}
              />
            </div>
          </div>
        ) : (
          <div className="bannerTwoLineTextMainContainer">
            <p className="bannerTLTBTextStyle">{props.twoLineTwoButtonText}</p>
            <p className="bannerTLTBText2Style">
              {props.twoLineTwoButtonText2}
            </p>
            <div className="bannerTLTButtonContainer">
              <div
                className="bannerTLTButtonStyle"
                style={{ marginRight: "5%" }}
              >
                <BlueButton
                  text={props.buttonText}
                  height={window.innerWidth > 1020 ? 80 : 40}
                  buttonBackground={"red"}
                  size={window.innerWidth > 1020 ? 18 : 14}
                />
              </div>
              <div className="bannerTLTButtonStyle">
                <BlueButton
                  text={props.buttonText2}
                  height={window.innerWidth > 1020 ? 80 : 40}
                  buttonBackground={"red"}
                  size={window.innerWidth > 1020 ? 18 : 14}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BlueContactBanner;

// sample for two Line and 1 button

{
  /* <BlueContactBanner
bannerType={"twoLinesWithOneButton"}
twoLineText={
  "If You Have Any Further Queries, You Can Call Us At +1347 480-1903 Or Email At Info@blueBookestimator.Com"
}
twoLineText2={
  "Or You Can Upload Your Plans In The Link Below To Get A Quote In The Next 5 Minutes."
}
buttonText={"Upload Your Plan"}
/> */
}

// sample for one Line

{
  /* <BlueContactBanner
bannerType={"oneLine"}
oneLineText={
  "WORKING WITH US WE ARE A GLOBAL NETWORK OF CONSTRUCTION COST EXPERTS"
}
buttonText={"Upload your plan and get quote with 30% off"}
oneLineTextColor={"#FFFF00"}
oneLineTextIsUpper={true}
/> */
}

// Two lines with 2 button sample

// <BlueContactBanner
// twoLineTwoButtonText={"Offer:"}
// twoLineTwoButtonText2={
//   "Contact Us & get 30% Off On Your First Estimate!"
// }
// buttonText={"Contact us"}
// buttonText2={"Work Sample"}
// />
