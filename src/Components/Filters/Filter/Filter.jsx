import React from "react";
import "./Filter.css";
import { FILTER_LABELS } from "../../../Constants/Constants";

const Filter = (props) => {
  const { el, index, filter, changeFilter } = props;
  return (
    <div className="filter">
      <label for={index}>
        <input
          type="checkbox"
          id={index}
          name={el}
          value={FILTER_LABELS[el]}
          checked={filter[el]}
          onClick={changeFilter}
        ></input>
        <p>{FILTER_LABELS[el]}</p>
      </label>
    </div>
  );
};

export default Filter;
