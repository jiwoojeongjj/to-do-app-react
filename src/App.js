import React, { useState } from "react";
import Form from "./components/Form";
import OutputList from "./components/OutputList";

function App() {
  const [items, setItems] = useState([]);

  return (
    <>
      <Form setItems={setItems}></Form>
      <OutputList items={items} setItems={setItems}></OutputList>
    </>
  );
}

export default App;
