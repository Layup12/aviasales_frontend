import React from "react";
// import style from './Ticket.module.css';
import "../../Main/Main.css";
import TicketHeader from "./TicketInside/TicketHeader";
import TicketContent from "./TicketInside/TicketContent";

const Ticket = (props) => {
  return (
    <div className="ticket">
      <TicketHeader price={props.ticket.price} carrier={props.ticket.carrier} />
      <TicketContent segments={props.ticket.segments} />
    </div>
  );
};

export default Ticket;
