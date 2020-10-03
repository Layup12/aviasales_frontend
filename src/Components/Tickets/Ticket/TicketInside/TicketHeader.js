import React from "react";
// import style from './Ticket.module.css';
import "../../../Main/Main.css";

const TicketHeader = (props) => {
  const price =
    ((props.price / 1000) | 0) +
    " " +
    ("00" + (props.price % 1000)).substr(-3) +
    " P";
  return (
    <div className="ticketHead">
      <div>{price}</div>
      <div className="carrierLogo">
        <img
          src={`https://pics.avs.io/99/36/${props.carrier}.png`}
          alt="Carrier logo"
        />
      </div>
    </div>
  );
};

export default TicketHeader;
