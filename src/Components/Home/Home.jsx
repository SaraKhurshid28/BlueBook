import "./Home.css";
import { Section1, Section2, Section3, Section4 } from "./HomeSections";
import { BlueFooter } from "../CommonComponents";
const Home = () => {
  return (
    <>
      <div>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </div>

      <BlueFooter />
    </>
  );
};

export default Home;
