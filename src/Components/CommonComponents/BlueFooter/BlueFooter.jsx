import { Images } from "../../../Assests/Constant";
import "./BlueFooter.css";
import { PhoneOutlined } from "@ant-design/icons";

const BlueFooter = () => {
  return (
    <>
      <div className="footerMainContainer">
        <div className="footerEachContainer">
          <div>
            <hr className="footerHeadLine" />
            <h1 className="footerHeadStyle">The Bluebook Estimator </h1>
            <hr className="footerHeadLine" />
          </div>
          <p className="footerDespText">
            The Blue Book Estimator ®, is a professional cost estimation
            consultancy specializing in providing detailed construction cost
            estimates. Our cost consultants provide our clients, both public and
            private institutions with different office locations throughout the
            United States with expert, data-driven guidance on their
            construction projects.
          </p>
        </div>
        <div className="footerEachContainer">
          <div>
            <hr className="footerHeadLine" />
            <h1 className="footerHeadStyle">Navigation </h1>
            <hr className="footerHeadLine" />
          </div>
          <div className="footerNavigationMenu">
            <h3 className="footerNavItem">Services</h3>
            <h3 className="footerNavItem">Projects</h3>
            <h3 className="footerNavItem">Contact Us</h3>
            <h3 className="footerNavItem">Work Sample</h3>
          </div>
        </div>
        <div className="footerEachContainer">
          <div>
            <hr className="footerHeadLine" />

            <h1 className="footerHeadStyle">Contact</h1>
            <hr className="footerHeadLine" />
          </div>
          <div
            className={
              window.innerWidth > 600
                ? "footerNavigationMenu"
                : "footerNavigationMenuMob"
            }
          >
            <div className="footerContactContainer">
              <img
                src={Images.locationSymbol}
                alt="location"
                className="footerIconSize"
              />
              <p className="footerText">
                <span style={{ fontWeight: "900" }}>Head Office:</span> 102-12,
                Arlington, VA 22201 United States
              </p>
            </div>
            <div className="footerContactContainer">
              <PhoneOutlined />
              <p className="footerText">+1 (718) 717 8306</p>
            </div>

            <div className="footerContactContainer">
              <img
                src={Images.emailSymbol}
                alt="location"
                className="footerIconSize"
              />
              <p className="footerText">bluebookestimators@gmail.com</p>
            </div>

            <div className="footerContactSocialContainer">
              <img
                src={Images.facebookBlack}
                alt="facebook black"
                className="footerSocial"
              />
              <img
                src={Images.whatsappBlack}
                alt="whatsapp black"
                className="footerSocial"
              />
              <img
                src={Images.linkedInBlack}
                alt="linkedIn black"
                className="footerSocial"
              />
              <img
                src={Images.instaBlack}
                alt="insta black"
                className="footerSocial"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlueFooter;
