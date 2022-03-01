import React from "react";
import OutputItem from "./OutputItem";

function OutputList({ items, setItems }) {
  return (
    <>
      {items.map((item) => (
        <OutputItem key={item.id} item={item} setItems={setItems} />
      ))}
    </>
  );
}

export default OutputList;
