import React from "react";
import "../../Main/Main.css";
import { SORT_LABELS } from "./../../../Constants/Constants";
import cn from "classnames";

const Tab = (props) => {
  const { sort, changeSortTest, el } = props;
  return (
    <button
      name={el}
      className={cn("sortBtn", { active: sort[el] })}
      onClick={changeSortTest}
    >
      {SORT_LABELS[el]}
    </button>
  );
};

export default Tab;
