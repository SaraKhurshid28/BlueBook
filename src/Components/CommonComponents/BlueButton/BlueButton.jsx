import { Button, Spin } from "antd";
import "./BlueButton.css";
const BlueButton = (props) => {
  return (
    <>
      <Button
        style={{
          height: `${props.height}px`,
        }}
        className={`${
          props.buttonBackground === "blue"
            ? "blueButton"
            : props.buttonBackground === "red"
            ? "redButton"
            : "blackButton"
        } buttonContainer`}
        onClick={props.onClick}
      >
        {props.isLoading ? <Spin /> : props.text}
      </Button>
    </>
  );
};

export default BlueButton;
