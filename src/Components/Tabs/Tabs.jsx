import React from "react";
// import style from './Tabs.module.css';
import "../Main/Main.css";
import Tab from "./Tab/Tab";

const Tabs = (props) => {
  const { sort, changeSortTest } = props;
  const parseSortBtn = Object.keys(sort).map((el) => {
    return <Tab sort={sort} changeSortTest={changeSortTest} el={el} />;
  });
  return <div className="sortBoard">{parseSortBtn}</div>;
};

export default Tabs;
