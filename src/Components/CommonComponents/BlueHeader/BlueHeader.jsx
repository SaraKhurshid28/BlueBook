import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BlueHeader.css";
import { Images } from "../../../Assests/Constant";
import { Drawer, Button } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import BlueUploadModal from "../BlueUploadModal/BlueUploadModal";

const BlueHeader = () => {
  const navigate = useNavigate();
  const [menuKey, setMenuKey] = useState("home");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      key: "worksample",
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

  useEffect(() => {
    if (!window.location.pathname.includes(menuKey))
      setMenuKey(window.location.pathname.replace("/", ""));
  }, [window.location.href]);

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
              <p className="blueItemText"> +1 (718) 717 8306 </p>
            </div>
            <div className="blueItemConatiner">
              <img
                src={Images.email}
                className="blueSoicalImageSize"
                alt="email"
              />
              <p className="blueItemText">bluebookestimators@gmail.com</p>
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
                    navigate(`/${item.key}`);
                  }}
                >
                  {item.label}
                </p>
              );
            })}
          </div>

          <div
            className="blueMenuButton"
            onClick={() => {
              setIsModalOpen(!isModalOpen);
            }}
          >
            <p>Upload Your Plan Here</p>
          </div>
        </div>

        <div>
          <Button
            className="mobDrawerButton"
            type="primary"
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          >
            {isDrawerOpen ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
        </div>
      </div>

      <Drawer
        title={
          <img src={Images.logo} alt="logo" className="blueMenuImageSize" />
        }
        placement="left"
        width={130}
        open={isDrawerOpen}
        closeIcon={false}
        destroyOnClose={true}
        onClose={() => setIsDrawerOpen(!isDrawerOpen)}
        bodyStyle={{
          padding: "0%",
          marginTop: "-7%",
          background: "#337ab7",
        }}
        headerStyle={{ padding: "0%" }}
      >
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
                  navigate(`/${item.key}`);
                }}
              >
                {item.label}
              </p>
            );
          })}
        </div>

        <div
          className="blueMenuButton"
          onClick={() => {
            setIsModalOpen(!isModalOpen);
          }}
        >
          <p>Upload Your Plan Here</p>
        </div>
      </Drawer>

      <BlueUploadModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
};

export default BlueHeader;
