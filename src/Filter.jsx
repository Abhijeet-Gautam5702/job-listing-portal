import dltIcon from "./assets/close.png";

export default function Filter(props) {
  const tagsArr = props.data;

  const tagsElements = tagsArr.map((item) => {
    return (
      <div key={item} className="filter-tag">
        <p className="filter-text">{item}</p>
        <div className="dlt-filter">
          <img src={dltIcon} alt="dlt" onClick={props.handleClick} />
        </div>
      </div>
    );
  });

  return <div className="filter">{tagsElements}</div>;
}
