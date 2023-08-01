import { Images } from "../../Assests/Constant";
import { BlueFooter } from "../CommonComponents";
import "./EstimationFees.css";
const EstimationFees = () => {
  return (
    <>
      <div className="feeMainContainer">
        <h1 className="feeHeading">Estimation Fees</h1>
        <p>
          The BlueBook Estimator always like to hear from clients about the
          budget of the project so we have no fix rates about our services. But
          ofcourse, we charge per project, and remain very low so that our
          clients can bid more projects with minimum fees. Estimating fee can be
          like $150, $250, $350, $550 and so on. We do jobs even in $75, $100 or
          it all depend on size/scope of the project.
        </p>

        <div className="feeDetailContainer">
          <div className="feeDetailEachContainer">
            <h2 className="feeSubHeading">Our Process</h2>
            <p className="feeText">
              You can forward us the plans and mention us whether you would be
              bidding whole project or selected trades. After a detailed review
              of drawings, we will send you our fee proposal for your approval.
            </p>
            <p className="feeSubText">
              Only after your approval, we will start the work and complete the
              job by/before your due date.
            </p>
          </div>
          <div>
            <img src={Images.fee} className="feeDetailImage" />
          </div>
          <div className="feeDetailEachContainer">
            <h2 className="feeSubHeading">Our Process</h2>
          </div>
        </div>
      </div>
      <BlueFooter />
    </>
  );
};

export default EstimationFees;
