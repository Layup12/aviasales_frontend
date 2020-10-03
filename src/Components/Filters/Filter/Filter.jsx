import React from "react";
import "../../Main/Main.css";
import { FILTER_LABELS } from "../../../Constants/Constants";

const Filter = (props) => {
  const { el, filter, changeFilter } = props;
  return (
    <div className="filter">
      <input
        type="checkbox"
        name={el}
        value={FILTER_LABELS[el]}
        checked={filter[el]}
        onClick={changeFilter}
      ></input>
      <p>{FILTER_LABELS[el]}</p>
    </div>
  );
};

export default Filter;
