import React from "react";
import Ticket from "../Tickets/Ticket/Ticket";
import { ticketsList } from "./../../Helpers/forTickets";
import "../Main/Main.css";

const TicketsList = (props) => {
  const pasrseTicketsList = ticketsList(props).map((ticket) => {
    return (
      <Ticket
        key={ticket.carrier + ticket.price + ticket.segments[0].date}
        ticket={ticket}
      />
    );
  });

  return <div className="ticketBoard">{pasrseTicketsList}</div>;
};

export default TicketsList;
