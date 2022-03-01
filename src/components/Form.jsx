import React, { useReducer, useState } from "react";
import Modal from "./Modal";

function Form({ setItems }) {
  const reducer = (state, action) => {
    switch (action.type) {
      case "UPDATE_INPUT":
        return { ...state, [action.name]: action.val };
      case "CLEAR":
        return { task: "", description: "" };
      default:
        throw new Error();
    }
  };

  const [isError, setIsError] = useState(false);

  const [formState, dispatchFormState] = useReducer(reducer, {
    task: "",
    description: "",
  });

  const onChangeHandler = (e) => {
    dispatchFormState({
      type: "UPDATE_INPUT",
      name: e.target.name,
      val: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (formState.task === "" && formState.description === "") {
      setIsError(true);
      return;
    }
    const newItem = {
      ...formState,
      id: Math.random(),
    };
    setItems((items) => [...items, newItem]);
    dispatchFormState({ type: "CLEAR" });
    setIsError(false);
  };

  return (
    <>
      {isError && <Modal message="invalid input" setIsError={setIsError} />}
      <form onSubmit={onSubmitHandler}>
        <label>
          task
          <input
            type="text"
            name="task"
            value={formState.task}
            onChange={onChangeHandler}
          />
        </label>
        <label>
          description
          <input
            type="text"
            name="description"
            value={formState.description}
            onChange={onChangeHandler}
          />
        </label>
        <input type="submit" value="submit" />
      </form>
    </>
  );
}

export default Form;
