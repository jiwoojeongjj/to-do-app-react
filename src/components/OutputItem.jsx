import React from "react";

function OutputItem({ item, setItems }) {
  return (
    <div>
      <div>
        <p> {item.task}</p>
        <p> {item.description}</p>
      </div>
      <button
        onClick={() =>
          setItems((listItems) =>
            listItems.filter((listItem) => listItem.id !== item.id)
          )
        }
      >
        x
      </button>
    </div>
  );
}

export default OutputItem;
