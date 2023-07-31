import "./BlueUploadModal.css";
import { Modal } from "antd";
import { Form, Input, Upload, Spin, Button } from "antd";
import { UploadOutlined, LoadingOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
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

  const [details, setDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);

  const [isLink, setIsLink] = useState(false);

  const onChangeUpload = (event, name) => {
    setIsLoading(true);
    setDetails({ ...details, [name]: event.fileList });
    setIsLoading(false);
  };

  const onRemoveUpload = async (name, event) => {
    console.log("remove file from list working in Blue Upload Modal File");
  };

  const onChangeValue = (event) => {
    const { value, name } = event.target;
    setDetails({ ...details, [name]: value });
  };

  const onFormSubmit = () => {
    setIsLoadingSubmit(true);
    console.log("Submit button working in Blue Upload Modal File");

    setIsLoadingSubmit(false);
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
            onFinish={onFormSubmit}
          >
            <Form.Item label="Your Name" name="name" className="modalInput">
              <Input
                placeholder="Please enter your name"
                name="name"
                value={details.name}
                onChange={onChangeValue}
              />
            </Form.Item>

            <Form.Item label="Your Email" name="email" className="modalInput">
              <Input
                placeholder="Please enter your email address"
                name="email"
                value={details.email}
                onChange={onChangeValue}
              />
            </Form.Item>

            <Form.Item
              label="Your Contact Number (Required)"
              name="contact"
              className="modalInput"
              rules={[
                {
                  required: true,
                  message: "please enter contact details before submit",
                },
              ]}
            >
              <Input
                placeholder="Please enter your contact number"
                name="contact"
                value={details.contact}
                onChange={onChangeValue}
              />
            </Form.Item>

            <div>
              {isLink ? (
                <Form.Item label="Your Link" name="link" className="modalInput">
                  <Input
                    placeholder="Please enter your link"
                    name="link"
                    value={details.link}
                    onChange={onChangeValue}
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

            <div className="appJustifyCenterItem">
              <div style={{ width: "40%" }}>
                <Form.Item>
                  <Button className="modalSubmitButton" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </div>
            </div>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default BlueUploadModal;
