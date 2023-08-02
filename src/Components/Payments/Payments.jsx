import { Images } from "../../Assests/Constant";
import { BlueFooter } from "../CommonComponents";
import "./Payments.css";
const Payments = () => {
  const imageArray = [
    { key: "ndb", icon: Images.payment1 },
    { key: "strip", icon: Images.payment2 },
    { key: "visa", icon: Images.payment3 },
    { key: "express", icon: Images.payment4 },
    { key: "masterCard", icon: Images.payment5 },
    { key: "chase", icon: Images.payment6 },
    { key: "discover", icon: Images.payment7 },
  ];
  return (
    <>
      <div className="paymentMainContainer">
        <h1 className="paymentHeading">Payment Method</h1>
        <p>
          We like to give priority to our client and for that we have multi
          option to make easy for clients to clear our invoices.
        </p>
        <div className="paymentContainer">
          {imageArray.map((item) => {
            return (
              <div className="paymentImageContainer" key={item.key}>
                <img
                  src={item.icon}
                  className="paymentImageStyle"
                  alt={item.key}
                />
              </div>
            );
          })}
        </div>
        <h1 className="paymentHeading">Refund Policy</h1>
        <p>
          We like to give priority to our client and for that we have multi
          option to make easy for clients to clear our invoices.We always strike
          to provide our Clients their maximum Satisfaction and Value for Money
          services. But we would like to mention that we do not do refund. We
          only do Exchange.
        </p>
      </div>
      <BlueFooter />
    </>
  );
};

export default Payments;
