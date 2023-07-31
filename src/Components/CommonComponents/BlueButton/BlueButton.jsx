import { Button, Spin } from "antd";
import "./BlueButton.css";
const BlueButton = (props) => {
  return (
    <>
      <Button
        style={{
          height: props.height === 0 ? "auto" : `${props.height}px`,
          fontSize: `${props.size}px`,
        }}
        className={`${
          props.buttonBackground === "blue"
            ? "blueButton"
            : props.buttonBackground === "red"
            ? "redButton"
            : props.buttonBackground === "noColor"
            ? "noColorButton"
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
