import React from "react";
import "./Filter.css";
import { FILTER_LABELS } from "../../../Constants/Constants";

const Filter = (props) => {
  const { el, filter, changeFilter } = props;
  return (
    <div className="filter">
      <label>
        <input
          type="checkbox"
          name={el}
          value={FILTER_LABELS[el]}
          checked={filter[el]}
          onChange={changeFilter}
        ></input>
        <p>{FILTER_LABELS[el]}</p>
      </label>
    </div>
  );
};

export default Filter;
