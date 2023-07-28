import "./BlueUploadModal.css";
import { Modal } from "antd";
const BlueUploadModal = (props) => {
  const handleOk = () => {
    props.setIsModalOpen(false);
  };
  const handleCancel = () => {
    props.setIsModalOpen(false);
  };
  return (
    <>
      <Modal
        title="Basic Modal"
        open={props.isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default BlueUploadModal;
