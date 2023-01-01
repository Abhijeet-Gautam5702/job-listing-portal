import React from "react";

function Card(props) {
  const { data, filterTagsArray, handleAddClick } = props;

  function tmpFunc() {
    window.alert("Please try again later");
  }

  const tagElements = data.tags.map((tag) => {
    return (
      <p key={tag} className="tag" onClick={handleAddClick}>
        {tag}
      </p>
    );
  });
  return (
    <div className="card">
      <div className="logo-contnr">
        <img src={data.company.logo} alt="logo" />
      </div>
      <div className="job-details-contnr">
        <div className="card--header">
          <p className="company header-element">{data.company.name}</p>

          {
            /* conditionally render new-label is post is <=2 days old */
            data.postDay <= 2 && <p className="new-label header-element">NEW</p>
          }

          {
            /* conditional render feature-label */
            data.isFeatured && (
              <p className="featured-label header-element">FEATURED</p>
            )
          }
        </div>
        <p className="job-profile" onClick={tmpFunc}>
          {data.profile}
        </p>
        <div className="other-details">
          <p className="post-day detail">{data.postDay}d ago</p>•
          <p className="contract detail">{data.contract}</p>•
          <p className="location detail">{data.location}</p>
        </div>
      </div>
      <div className="tags-contnr">{tagElements}</div>
    </div>
  );
}
export default Card;
