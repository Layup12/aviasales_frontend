import React from "react";
import "./TicketContent.css";
import TicketDirection from "./TicketDirection/TicketDirection";

const TicketContent = (props) => {
  return (
    <div className="ticketContent">
      {props.segments.map((segment) => (
        <TicketDirection segment={segment} />
      ))}
    </div>
  );
};

export default TicketContent;
