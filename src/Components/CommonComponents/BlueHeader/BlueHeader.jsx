import React, { useState } from "react";
import "./BlueHeader.css";
import { Images } from "../../../Assests/Constant";

const BlueHeader = () => {
  const [menuKey, setMenuKey] = useState("home");

  const items = [
    {
      label: "Home",
      key: "home",
    },
    {
      label: "Services",
      key: "services",
    },
    {
      label: "About Us",
      key: "aboutus",
    },
    {
      label: "Testimonials",
      key: "testimonials",
    },
    {
      label: "Work Sample",
      key: "workSample",
    },
    {
      label: "Estimating Fees",
      key: "fee",
    },
    {
      label: "Payment",
      key: "payment",
    },
  ];

  return (
    <>
      <div className="appColor">
        <div className="blueContactSocialConatiner">
          <div className="blueContactConatiner">
            <div className="blueItemConatiner">
              <img
                src={Images.phone}
                className="blueSoicalImageSize"
                alt="phone"
              />
              <p className="blueItemText"> +1 917 300 1079</p>
            </div>
            <div className="blueItemConatiner">
              <img
                src={Images.email}
                className="blueSoicalImageSize"
                alt="email"
              />
              <p className="blueItemText"> bluebookestimators@gmail.com</p>
            </div>
          </div>
          <div className="blueSocialContainer">
            <img
              src={Images.linkedIn}
              className="blueSoicalImageSize"
              alt="email"
            />
            <img
              src={Images.insta}
              className="blueSoicalImageSize"
              alt="insta"
            />
            <img
              src={Images.facebook}
              className="blueSoicalImageSize"
              alt="facebook"
            />
            <img
              src={Images.whatsapp}
              className="blueSoicalImageSize"
              alt="whatsapp"
            />
          </div>
        </div>

        <div className="blueMenuContainer">
          <img src={Images.logo} alt="logo" className="blueMenuImageSize" />

          <div className="blueMenuItem">
            {items.map((item) => {
              return (
                <p
                  className={
                    menuKey === item.key
                      ? "blueMenuItemSelectedStyle"
                      : "blueMenuItemStyle"
                  }
                  key={item.key}
                  onClick={() => {
                    setMenuKey(item.key);
                  }}
                >
                  {item.label}
                </p>
              );
            })}
          </div>

          <div className="blueMenuButton">
            <p>Upload Your Plan Here</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlueHeader;
