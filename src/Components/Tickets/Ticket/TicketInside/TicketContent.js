import React from "react";
import "../../../Main/Main.css";
import TicketWay from "./TicketContent/TicketWay";

const TicketContent = (props) => {
  return (
    <div className="ticketContent">
      {props.segments.map((segment) => (
        <TicketWay segment={segment} />
      ))}
    </div>
  );
};

export default TicketContent;
