import React from "react";
import Card from "./Card";
import jobData from "./jobData";

function App() {
  const cardElements = jobData.map((item) => {
    return <Card data={item} />;
  });
  return <div className="app">{cardElements}</div>;
}

export default App;
