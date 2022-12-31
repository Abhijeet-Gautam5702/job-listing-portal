import React from "react";
import Card from "./Card";
import jobData from "./jobData";
import Filter from "./Filter"

function App() {
  const cardElements = jobData.map((item) => {
    return <Card data={item} />;
  });
  return <div className="app">
    <Filter/>
    {cardElements}
  </div>;
}

export default App;
