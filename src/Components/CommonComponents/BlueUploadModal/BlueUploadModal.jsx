import "./BlueUploadModal.css";
import { Modal } from "antd";
import { Form, Input, Upload, Spin, Button } from "antd";
import { UploadOutlined, LoadingOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Images } from "../../../Assests/Constant";
import BlueButton from "../BlueButton/BlueButton";

const BlueUploadModal = (props) => {
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 32,
        color: "black",
      }}
      spin
    />
  );

  const [details, setDetails] = useState({
    name: "",
    email: "",
    link: "",
    contact: "",
    file: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isLink, setIsLink] = useState(false);

  const onChangeUpload = (name, event) => {
    console.log(name, event);
  };

  const onRemoveUpload = async (name, event) => {
    console.log(name, event);
  };

  return (
    <>
      <Modal
        open={props.isModalOpen}
        className="modalMainContainer"
        footer={false}
        onCancel={() => {
          props.setIsModalOpen(!props.isModalOpen);
        }}
      >
        <div className="modalTitle">Upload your Drawings here</div>

        <p className="modalSubHeading">
          Note: Please fill all the mandatory fields and please upload plan or
          email us the link of your plan
        </p>

        <div className="modalInputContainer">
          <Form
            name="basic"
            layout="vertical"
            initialValues={{
              remember: true,
            }}
            autoComplete="off"
          >
            <Form.Item label="Your Name" name="name" className="modalInput">
              <Input
                placeholder="Please enter your name"
                name="name"
                value={details.name}
                onChange={() => {}}
              />
            </Form.Item>

            <Form.Item label="Your Email" name="email" className="modalInput">
              <Input
                placeholder="Please enter your email address"
                name="email"
                value={details.email}
                onChange={() => {}}
              />
            </Form.Item>

            <Form.Item
              label="Your Contact Number (Required)"
              name="contact"
              className="modalInput"
            >
              <Input
                placeholder="Please enter your contact number"
                name="contact"
                value={details.contact}
                onChange={() => {}}
              />
            </Form.Item>

            <div>
              {isLink ? (
                <Form.Item label="Your Link" name="link" className="modalInput">
                  <Input
                    placeholder="Please enter your link"
                    name="link"
                    value={details.link}
                    onChange={() => {}}
                  />
                </Form.Item>
              ) : (
                <Form.Item className="modalUpload">
                  <Upload
                    beforeUpload={() => false}
                    name="file"
                    onChange={(event) => onChangeUpload(event, "file")}
                    onRemove={(event) => onRemoveUpload(event, "file")}
                    showUploadList={details.file?.length > 0 ? true : false}
                    fileList={details.file?.length > 0 ? details.file : []}
                  >
                    <Button
                      className="uploadStyle"
                      type="primary"
                      icon={<UploadOutlined />}
                    >
                      {isLoading ? <Spin indicator={antIcon} /> : "Upload File"}
                    </Button>
                  </Upload>
                </Form.Item>
              )}

              <div
                className="modalLinkText"
                onClick={() => {
                  setIsLink(!isLink);
                }}
              >
                <p>Or</p>
                <p className="modalLinkSubText">
                  {isLink ? "Click to upload file" : "Click to provide link"}
                </p>

                {!isLink ? (
                  <div className="modalLinkSocial">
                    <img
                      src={Images.googleDrive}
                      alt="google drive"
                      width={25}
                      height={25}
                    />
                    <img
                      src={Images.dropbox}
                      alt="drop box"
                      width={25}
                      height={25}
                    />
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </Form>

          <div className="appJustifyCenterItem">
            <div style={{ width: "50%", margin: "20px 0px" }}>
              <BlueButton
                text={"Submit"}
                height={window.innerWidth > 700 ? 60 : 40}
                buttonBackground={"noColor"}
                size={20}
              />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default BlueUploadModal;
