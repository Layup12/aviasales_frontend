import React from "react";
import Ticket from "../Tickets/Ticket/Ticket";
import { ticketsList } from "./../../Helpers/forTickets";
// import style from './Ticket.module.css';
import "../Main/Main.css";

const TicketsList = (props) => {
  const pasrseTicketsList = ticketsList(props).map((ticket) => {
    return <Ticket ticket={ticket} />;
  });

  return <div className="ticketBoard">{pasrseTicketsList}</div>;
};

export default TicketsList;
