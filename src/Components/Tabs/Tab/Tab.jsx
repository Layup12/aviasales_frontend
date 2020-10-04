import React from "react";
import "./Tab.css";
import { SORT_LABELS } from "./../../../Constants/Constants";
import cn from "classnames";

const Tab = (props) => {
  const { sort, changeSortTest, el } = props;
  return (
    <button
      name={el}
      className={cn({ active: sort[el], default: !sort[el], [`${el}`]: true })}
      onClick={changeSortTest}
    >
      {SORT_LABELS[el]}
    </button>
  );
};

export default Tab;
