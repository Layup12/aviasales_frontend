import React from "react";
import "./TicketHeader.css";
import { formatPrice } from "./../../../../Helpers/forTickets";

const TicketHeader = (props) => {
  const { price, carrier } = props;
  return (
    <div className="ticketHead">
      <div>{formatPrice(price)}</div>
      <div className="carrierLogo">
        <img
          src={`https://pics.avs.io/99/36/${carrier}.png`}
          alt="Carrier logo"
        />
      </div>
    </div>
  );
};

export default TicketHeader;
