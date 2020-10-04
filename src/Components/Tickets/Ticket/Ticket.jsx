import React from "react";
import "./Ticket.css";
import TicketHeader from "./TicketContent/TicketHeader";
import TicketContent from "./TicketContent/TicketContent";

const Ticket = (props) => {
  const { price, carrier, segments } = props.ticket;
  return (
    <div className="ticket">
      <TicketHeader price={price} carrier={carrier} />
      <TicketContent segments={segments} />
    </div>
  );
};

export default Ticket;
