import React, { useState } from "react";
import Card from "./Card";
import jobData from "./jobData";
import Filter from "./Filter";

function App() {
  //state-variable: contains all tags entered in the filter-section
  const [filterTagsArr, setFilterTagsArr] = useState([]);

  /*
  handles click-event: adds tag to filterTagsArr when any tag (of any card) is clicked
  */
  function addToFilterArr(e) {
    const newTag = e.currentTarget.textContent;
    setFilterTagsArr((prevFilterArr) => {
      return [...prevFilterArr, newTag];
    });
  }

  /*
  handles click-event: deletes tag to filterTagsArr when any tag (of the filter-section) is clicked
  */
  function removeFromFilterArr(e) {
    const obsoleteTag =
      e.currentTarget.parentElement.parentElement.querySelector(
        ".filter-text"
      ).textContent;

    const newArray = filterTagsArr.filter((item) => {
      if (item != obsoleteTag) {
        return item;
      }
    });

    setFilterTagsArr((prevFilterArr) => newArray);
  }

  /*
  handles click-event: clears filterTagsArr when "Clear all"-button is clicked
  */
  function clearFilterArr() {
    setFilterTagsArr((prevFilterArr) => []);
  }

  const cardElements = jobData.map((item) => {
    //check if current job-role satisfies all filter-tags
    const toShowCard = filterTagsArr.every((filterTag) =>
      item.tags.includes(filterTag)
    );

    return (
      //conditionally render the card if it has all the filter-tags
      toShowCard && (
        <Card
          key={Math.random()}
          data={item}
          filterTagsArray={filterTagsArr}
          handleAddClick={addToFilterArr}
        />
      )
    );
  });
  return (
    <div className="app">
      <Filter
        data={filterTagsArr}
        handleRemoveClick={removeFromFilterArr}
        handleClearClick={clearFilterArr}
      />
      {cardElements}
    </div>
  );
}

export default App;
