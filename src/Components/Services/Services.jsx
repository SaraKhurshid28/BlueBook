import { Images } from "../../Assests/Constant";
import { Card } from "antd";
import { BlueFooter, BlueContactBanner } from "../CommonComponents";
import "./Services.css";
const Services = () => {
  const serviceArray = [
    {
      img: Images.servicesImg1,
      title: "Cost Estimation (Labor & Material)",
      key: "cost",
    },
    {
      img: Images.servicesImg,
      title: "Quantities & Materials Takeoffs",
      key: "qmTake",
    },
    {
      img: Images.servicesImg2,
      title: "Construction Work Schedules",
      key: "cws",
    },
  ];

  const tradeArray = [
    {
      img: Images.servicesImg3,
      title: "General Requirements",
      key: "grTO",
    },
    {
      img: Images.servicesImg4,
      title: "Site Construction",
      key: "scTO",
    },
    {
      img: Images.servicesImg5,
      title: "Concrete",
      key: "concrete",
    },
    {
      img: Images.servicesImg6,
      title: "Masonry",
      key: "masonry",
    },
    {
      img: Images.servicesImg7,
      title: "Metals",
      key: "metal",
    },
    {
      img: Images.servicesImg8,
      title: "Wood & Plastic",
      key: "wpTO",
    },
    {
      img: Images.servicesImg9,
      title: "Thermal and Moisture Protection",
      key: "tmprotection",
    },
    {
      img: Images.servicesImg10,
      title: "Doors & Windows",
      key: "d&w",
    },
    {
      img: Images.servicesImg11,
      title: "Finishes",
      key: "finishes",
    },
    {
      img: Images.servicesImg12,
      title: "Specialties",
      key: "specialties",
    },
    {
      img: Images.servicesImg13,
      title: "Equipment",
      key: "equipment",
    },
    {
      img: Images.servicesImg14,
      title: "Furnishings",
      key: "furnishings",
    },
    {
      img: Images.servicesImg15,
      title: "Special Construction",
      key: "spCTO",
    },
    {
      img: Images.servicesImg16,
      title: "Conveying System",
      key: "conSys",
    },
    {
      img: Images.servicesImg17,
      title: "Mechanical",
      key: "mechanical",
    },
    {
      img: Images.servicesImg18,
      title: "Electrical",
      key: "electrical",
    },
    {
      img: Images.servicesImg19,
      title: "Plumbing",
      key: "plumbing",
    },
    {
      img: Images.servicesImg20,
      title: "HVAC",
      key: "HVAC",
    },
  ];
  return (
    <>
      <div className="serviceMainContainer">
        <h1 className="serviceHeading">Services</h1>
        <div className="serviceCardContainer">
          {serviceArray.map((item) => {
            return (
              <Card
                className="secviceCardStyle"
                bodyStyle={{ padding: "0px" }}
                key={item.key}
              >
                <div>
                  <img src={item.img} alt={item.key} className="cardImage" />
                </div>

                <div className="cardTextContainer">
                  <img
                    src={Images.tick}
                    alt={`${item.key}tick`}
                    className="cardTick"
                  />
                  <p>{item.title}</p>
                  <p className="cardSubText">Read More</p>
                </div>
              </Card>
            );
          })}
        </div>
        <h1 className="serviceHeading">Our Trades</h1>
        <div className="serviceCardContainer">
          {tradeArray.map((item) => {
            return (
              <Card
                className="secviceCardStyle"
                bodyStyle={{ padding: "0px" }}
                key={item.key}
              >
                <div>
                  <img src={item.img} alt={item.key} className="cardImage" />
                </div>

                <div className="cardTextContainer">
                  <img
                    src={Images.tick}
                    alt={`${item.key}tick`}
                    className="cardTick"
                  />
                  <p>{item.title}</p>
                  <p className="cardSubText">Read More</p>
                </div>
              </Card>
            );
          })}
        </div>

        <BlueContactBanner
          bannerType={"twoLinesWithOneButton"}
          twoLineText={
            "If You Have Any Further Queries, You Can Call Us At +1 (718) 717 8306 Or Email At bluebookestimators@gmail.com"
          }
          twoLineText2={
            "Or You Can Upload Your Plans In The Link Below To Get A Quote In The Next 5 Minutes."
          }
          buttonText={"Upload Your Plan"}
        />
      </div>
      <BlueFooter />
    </>
  );
};

export default Services;
