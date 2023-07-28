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
          bannerType={"oneLine"}
          oneLineText={
            "WE ARE A GLOBAL NETWORK OF CONSTRUCTION COST EXPERTS. Let's Work Together"
          }
          buttonText={"Work Sample"}
          oneLineTextColor={"#FFFF00"}
          oneLineTextIsUpper={true}
        />
      </div>

      <BlueFooter />
    </>
  );
};

export default Home;
