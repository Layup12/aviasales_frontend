import React from "react";
import "./TicketDirection.css";
import * as TDH from "./../../../../../Helpers/forTicketDirection";

const TicketDirection = (props) => {
  const { origin, destination, duration, stops, date } = props.segment;

  return (
    <div className="ticketDirection">
      <div className="route">
        <div className="upper">
          {origin} &ndash; {destination}
        </div>
        <div className="lower">
          {date.substr(11, 5)} &ndash;{" "}
          {TDH.toHourConverterWithColon(
            TDH.finishTimeConverter(date.substr(11, 5), duration)
          )}
        </div>
      </div>
      <div className="length">
        <div className="upper">В пути</div>
        <div className="lower">{TDH.toHourConverter(duration)}</div>
      </div>
      <div className="stops">
        <div className="upper">{TDH.transfer(stops.length)}</div>
        <div className="lower">{stops.join(", ")}</div>
      </div>
    </div>
  );
};

export default TicketDirection;
