import React, { useState } from "react";

function InputForm(props) {
  const { Id, type, placeHolder, onChange, label } = props;
  const [show, setShow] = useState(false);
  if (type === "password") {
    return (
      <div className="form-group">
        <label>
          <span>{label}</span>
        </label>
        <input
          id={Id}
          type={show ? "text" : "password"}
          placeholder={placeHolder}
          onChange={onChange}
        ></input>
        <span>
          <img
            className="show-pass"
            src={
              show
                ? "/assets/icons/icon_eye-closed.png"
                : "/assets/icons/icon_eye.png"
            }
            onClick={() => setShow(!show)}
            alt="hide"
            style={{ width: "30px" }}
          ></img>
        </span>
      </div>
    );
  }
  return (
    <div className="form-group">
      <label>
        <span>{label}</span>
      </label>
      <input
        id={Id}
        type={type}
        placeholder={placeHolder}
        onChange={onChange}
      />
    </div>
  );
}

export default InputForm;
