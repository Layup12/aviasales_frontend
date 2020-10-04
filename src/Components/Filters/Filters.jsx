import React from "react";
import "./Filters.css";
import Filter from "./Filter/Filter";

const Filters = (props) => {
  const parseFilterInput = Object.keys(props.filter).map((el, index) => {
    return (
      <Filter
        filter={props.filter}
        el={el}
        index={index}
        changeFilter={props.changeFilter}
      />
    );
  });

  return (
    <div className="filterBoard">
      <div className="textCount">
        <p>Количество пересадок</p>
      </div>
      {parseFilterInput}
    </div>
  );
};

export default Filters;
