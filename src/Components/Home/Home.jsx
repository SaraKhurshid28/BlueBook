import "./Home.css";
import { Section1, Section2, Section3, Section4 } from "./HomeSections";
import { BlueContactBanner, BlueFooter } from "../CommonComponents";
const Home = () => {
  return (
    <>
      <div>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <BlueContactBanner
          twoLineTwoButtonText={"Offer:"}
          twoLineTwoButtonText2={
            "Contact Us & get 30% Off On Your First Estimate!"
          }
          buttonText={"Contact us"}
          buttonText2={"Work Sample"}
        />
      </div>

      <BlueFooter />
    </>
  );
};

export default Home;
