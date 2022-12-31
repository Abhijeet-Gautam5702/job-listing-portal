import React from "react";

function Card(props) {
  const { data } = props;
  const tagElements = data.tags.map((tag) => {
    return (
      <p key={tag} className="tag">
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

          {data.postDay <= 2 && <p className="new-label header-element">NEW</p>}

          {data.isFeatured && (
            <p className="featured-label header-element">FEATURED</p>
          )}
        </div>
        <p className="job-profile">{data.profile}</p>
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
