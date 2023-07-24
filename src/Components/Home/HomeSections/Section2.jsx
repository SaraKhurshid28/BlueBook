import { useEffect, useState } from "react";
import ".././Home.css";
import "./Section.css";
import { BlueButton } from "../../CommonComponents";
import { Card } from "antd";
import { Images } from "../../../Assests/Constant";

const Section2 = () => {
  const servicesArray = [
    {
      icon: `${Images.service1}`,
      title: "Concrete",
      description:
        "Contractors involved within the work onsite for completing the fieldwork and struggle to estimate accurately for bidding proposals. We help them with our accurate estimate report for concrete projects.",
      key: "service1",
      subHeading: "",
    },
    {
      icon: `${Images.service2}`,
      title: "Framing",
      description:
        "Framing takeoff means a basic count of the framing lumber. It is the first step in estimating construction materials for a new residential or construction building. And for estimation we are her to provide you.",
      key: "service2",
      subHeading: "(Wood & Metal)",
    },
    {
      icon: `${Images.service3}`,
      title: "Finishes",
      description:
        "Drywall Installation Cost Estimation including the finishing, taping, labor costs, and materials. In addition, We provide drywall installation services to contractors. Our cost-estimating team has expert contractors.",
      subHeading: "Drywall, Paint, Flooring, Tiles, ACT",
      key: "service3",
    },
    {
      icon: `${Images.service4}`,
      title: "Thermal & Moisture",
      description:
        "Roofing estimating services the cost of installing new roofing, there are several aspects to consider. Although roofing material counts for a major portion of the cost, you must also consider the number of stories, the complexity of the roof, the slope or pitch etc.",
      subHeading: "Roofing and Exterior Work",
      key: "service4",
    },
    {
      icon: `${Images.service5}`,
      title: "Mechanical",
      description:
        "Our mechanical estimating services leverage the best technology and practices to ensure the reliable and precise cost analysis of your projects",
      key: "service5",
      subHeading: "MEP",
    },
    {
      icon: `${Images.service6}`,
      title: "Electrical",
      description:
        "We are aware of how crucial precise electrical cost estimation is to the success of any project, we use the most up-to-date software and technologies to generate these estimates.",
      key: "service6",
      subHeading: "MEP",
    },
    {
      icon: `${Images.service7}`,
      title: "Plumbing",
      description:
        "Plumbers don’t have time and hands-on expertise to overview the drawings and plans to check whether the plans will work in the working environment or not. For this, our estimators take extra time to review and make corrective changes.",
      key: "service7",
      subHeading: "MEP",
    },
    {
      icon: `${Images.service8}`,
      title: "Cost Estimation",
      description:
        "We Understand it is most hectic and time consuming but important task for any construction team. So, We provide you best team for project estimation",
      key: "service8",
      subHeading: "Labour & Material",
    },
  ];

  const servicesArray2 = [
    {
      icon: `${Images.service1}`,
      title: "Concrete",
      description:
        "Contractors involved within the work onsite for completing the fieldwork and struggle to estimate accurately for bidding proposals. We help them with our accurate estimate report for concrete projects.",
      key: "service1",
      subHeading: "",
    },

    {
      icon: `${Images.service4}`,
      title: "Thermal & Moisture",
      description:
        "Roofing estimating services the cost of installing new roofing, there are several aspects to consider. Although roofing material counts for a major portion of the cost, you must also consider the number of stories, the complexity of the roof, the slope or pitch etc.",
      subHeading: "Roofing and Exterior Work",
      key: "service4",
    },
    {
      icon: `${Images.service5}`,
      title: "Mechanical",
      description:
        "Our mechanical estimating services leverage the best technology and practices to ensure the reliable and precise cost analysis of your projects",
      key: "service5",
      subHeading: "MEP",
    },
    {
      icon: `${Images.service6}`,
      title: "Electrical",
      description:
        "We are aware of how crucial precise electrical cost estimation is to the success of any project, we use the most up-to-date software and technologies to generate these estimates.",
      key: "service6",
      subHeading: "MEP",
    },
    {
      icon: `${Images.service7}`,
      title: "Plumbing",
      description:
        "Plumbers don’t have time and hands-on expertise to overview the drawings and plans to check whether the plans will work in the working environment or not. For this, our estimators take extra time to review and make corrective changes.",
      key: "service7",
      subHeading: "MEP",
    },
    {
      icon: `${Images.service8}`,
      title: "Cost Estimation",
      description:
        "We Understand it is most hectic and time consuming but important task for any construction team. So, We provide you best team for project estimation",
      key: "service8",
      subHeading: "Labour & Material",
    },
  ];

  const [isLoadingButton, setIsLoadingButton] = useState(false);
  const [serviceKey, setServiceKey] = useState("");
  const [cardArray, setCardArray] = useState(servicesArray2);

  const onClickButton = () => {
    setIsLoadingButton(true);
    console.log("Calling From in Section 2");
    setIsLoadingButton(false);
  };

  const handleResize = () => {
    if (window.innerWidth > 1500) setCardArray(servicesArray);
    else setCardArray(servicesArray2);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <>
      <div className="sec2MainContainer">
        <div className="sec2TextContainer appJustifyAlignCenterItem">
          <h1 className="sec2Heading">Our Services</h1>
          <p className="sec2Text">
            The Bluebook Estimator specializes in accurate and efficient
            estimation services for contractors and builders. Our team combines
            expertise with cutting-edge software to provide comprehensive
            estimates, material quantity calculations, and project timelines.
            With meticulous attention to detail and a commitment to client
            satisfaction, we ensure that our estimates help you plan and execute
            construction projects with confidence.
          </p>

          <div className="sec2ButtonContainer">
            <BlueButton
              isLoading={isLoadingButton}
              text={"Explore More"}
              height={window.innerWidth > 1020 ? 60 : 50}
              buttonBackground={"black"}
              onClick={onClickButton}
              size={20}
            />
          </div>
        </div>
        <div className="sec2ServicesCardContainer">
          {cardArray.map((item) => {
            return (
              <>
                {item.key === serviceKey ? (
                  <Card
                    key={item.key}
                    className="sec2SelectCardStyle"
                    onMouseLeave={() => setServiceKey("")}
                    bodyStyle={{ padding: "0px" }}
                  >
                    <div className="sec2SelectedCardContainer">
                      <img
                        src={item.icon}
                        className="sec2SelectedCardImageSize"
                        alt={item.title}
                      />
                      <h2 className="sec2SelectedCardHeading">{item.title}</h2>
                      {item.subHeading !== "" ? (
                        <h3 className="sec2SelectedCardSubHeading">
                          {item.subHeading}
                        </h3>
                      ) : (
                        ""
                      )}
                      <p className="sec2SelectedCardText">{item.description}</p>
                      <div className="sec2SelectedCardButton">
                        <BlueButton
                          text={"Read More"}
                          height={25}
                          buttonBackground={"blue"}
                          size={10}
                        />
                      </div>
                    </div>
                  </Card>
                ) : (
                  <Card
                    key={item.key}
                    hoverable
                    className="sec2CardStyle"
                    onMouseMove={() => setServiceKey(item.key)}
                    bodyStyle={{ padding: "0px" }}
                  >
                    <div className="sec2SelectedCardContainer">
                      <img
                        src={item.icon}
                        className="sec2CardImage"
                        alt={item.title}
                      />
                      <h2 className="sec2SelectedCardHeading">{item.title}</h2>
                    </div>
                  </Card>
                )}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Section2;
