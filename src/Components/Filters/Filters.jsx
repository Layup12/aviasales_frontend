import React from "react";
import "./Filters.css";
import Filter from "./Filter/Filter";

const Filters = (props) => {
  const parseFilterInput = Object.keys(props.filter).map((el) => {
    return (
      <Filter
        key={el}
        filter={props.filter}
        el={el}
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
