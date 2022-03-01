import React from "react";

function Modal(props) {
  return (
    <>
      <div>{props.message}</div>
      <button
        type="text"
        value="close"
        onClick={() => props.setIsError((state) => !state)}
      />
    </>
  );
}

export default Modal;
