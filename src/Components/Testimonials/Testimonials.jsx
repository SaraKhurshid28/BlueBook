import { BlueFooter } from "../CommonComponents";
import { Card } from "antd";
import "./Testimonials.css";
import { Images } from "../../Assests/Constant";
const Testimonials = () => {
  const reviewArray = [
    {
      key: 1,
      review:
        "Muhammad, good afternoon. Your breakdown was very explanatory and yes it was very helpful in completing my numbers. I do have more projects coming up but like everything else not here until it comes in. keep you in the loop.",
      name: "CARMINE MOLISSE",
      title: "DIRECTOR",
    },
    {
      key: 2,
      review:
        "My name is Bennie Edgerson-Daye, I am the owner of Bennie Daye Services Inc DBA Bennie Daye Construction based in Brooklyn New York. I have been working with US estimating® since February 2015.US estimating® have done several estimates for my company. I have won several of the bids that US Estimating have Estimated for my company.There turnover time is within 1-3 day know matter how large the  estimate is.I will continue to use US Estimate for all my upcoming estimates. There prices are fare compare to some of the other estimating companies that cannot guarantee your estimate back within a short timeframe, that US estimating can.I highly recommend them to anyone who is looking for a reliable estimating company.",
      name: "MIKE KARAME",
      title: "EXPRESS QUALITY CONSTRUCTION LTD - (CANADA)",
    },
    {
      key: 3,
      review:
        "Thanks for the estimate. We tweaked the numbers using our specs and came in around 75k less. Regardless we won the bid. Should have the next plans to send you soon. ",
      name: "Ricky",
      title: "Owner",
    },
    {
      key: 4,
      review:
        " Very helpful Muhammad. You hit your dates and give me complete details. I'll be sending more when I have something. Again, I have been very pleased with the service received from US Estimating®. They reply promptly to takeoff requests, provide their work by the required deadline and provide detailed quantity takeoffs that I can use in pricing projects",
      name: "Tribco",
      title: "CECO Concrete Construction",
    },
    {
      key: 5,
      review:
        "US Estimating® provided incredibly accurate and lightning fast estimating services for our urgent need. Although our plans were not a precise set having some conflict errors, US Estimating® plowed through the conflicts and provided responsible clarified results that were essential in a short time frame. In the end we were able to rely on the results for a successful implementation. Looking forward to many similar work services in the future.",
      name: "PATRICIA DZIUK",
      title: "WBE CONTRACTOR,SPRING VALLEY (CA).",
    },
    {
      key: 6,
      review:
        "I would recommend them to any estimator, business owner, project manager, or even if you just need financial advice. They are very precise in their measuring and takeoffs, and they are very quick as well. I have been in pinches where I needed numbers now, and I simply contacted them for assistance and got it done in time. Again, I would recommend them to anyone! Not only are they great at what they do, they are very polite and easy to work with. Nothing but good things to say about them!!",
      name: "JULIE D'AGOSTINO",
      title: "PRESIDENT",
    },
  ];
  return (
    <>
      <div className="testMainContainer">
        <div className="testCardContainer">
          {reviewArray.map((item) => {
            return (
              <Card
                className="testCardStyle"
                bodyStyle={{ padding: "0px" }}
                key={item.key}
              >
                <div className="testCardContent">
                  <img
                    src={Images.humanIcon}
                    alt="human Icon"
                    className="testCardImg"
                  />
                  <p className="testCardText">{item.review}</p>
                  <h3 className="testHeading">{item.name}</h3>
                  <h3 className="testHeading">{item.title}</h3>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
      <BlueFooter />
    </>
  );
};

export default Testimonials;
