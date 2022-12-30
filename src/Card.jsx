import React from "react";

function Card(props) {
  const { data } = props;
  const tagElements = data.tags.map(tag=>{
    return (
        <p key={tag} className="tag">{tag}</p>
    )
  })
  return (
    <div className="card">
      <div className="logo-contnr">
        <img src={data.company.logo} alt="logo" />
      </div>
      <div className="job-details-contnr">
        <div className="card--header">
          <p className="company header-element">{data.company.name}</p>
          <p className="new-label header-element">new</p>
          <p className="featured-label header-element">{(data.isFeatured)? "FEATURED" : ""}</p>
        </div>
        <p className="job-profile">{data.profile}</p>
      </div>
      <div className="tags-contnr">{tagElements}</div>
    </div>
  );
}
export default Card;
