import React from "react";
// import style from './Ticket.module.css';
import "../../../../Main/Main.css";

const MINUTES_PER_HOUR = 60;
const MINUTES_PER_DAY = 1440;

const TicketWay = (props) => {
  const segment = props.segment;

  const toHourConverter = (duration) => {
    if (duration > MINUTES_PER_HOUR) {
      const hours = Math.floor(duration / MINUTES_PER_HOUR);
      const minutes = duration % MINUTES_PER_HOUR;
      return `${hours}ч ${minutes}м`;
      // return (
      //   Math.floor(duration / MINUTES_PER_HOUR) +
      //   "ч " +
      //   (duration % MINUTES_PER_HOUR) +
      //   "м"
      // );
    }
    return `${duration}м`;
  };

  const toHourConverterWithColon = (duration) => {
    if (duration > MINUTES_PER_HOUR) {
      const hours = `00${Math.floor(duration / MINUTES_PER_HOUR)}`.substr(-2);
      const minutes = `00${duration % MINUTES_PER_HOUR}`.substr(-2);
      return `${hours}:${minutes}`;
      // return (
      //   ("00" + Math.floor(duration / MINUTES_PER_HOUR)).substr(-2) +
      //   ":" +
      //   ("00" + (duration % MINUTES_PER_HOUR)).substr(-2)
      // );
    }
    return `00:${duration}`;
  };

  const transfer = (lengthStopsList) => {
    if (lengthStopsList === 0) {
      return lengthStopsList + " пересадок";
    }
    if (lengthStopsList === 1) {
      return lengthStopsList + " пересадка";
    }
    return lengthStopsList + " пересадки";
  };

  const finishTimeConverter = (startTime, duration) => {
    const rigthDuration = duration % MINUTES_PER_DAY;
    const rigthStartTime =
      Number(startTime.substr(0, 2)) * MINUTES_PER_HOUR +
      Number(startTime.substr(3, 2));
    const finishTime = (rigthDuration + rigthStartTime) % MINUTES_PER_DAY;
    return (
      <div className="lower">
        {startTime} &ndash; {toHourConverterWithColon(finishTime)}
      </div>
    );
  };

  return (
    <div className="ticketWay">
      <div className="route">
        <div className="upper">
          {segment.origin} &ndash; {segment.destination}
        </div>
        {finishTimeConverter(segment.date.substr(11, 5), segment.duration)}
      </div>
      <div className="lenght">
        <div className="upper">В пути</div>
        <div className="lower">{toHourConverter(segment.duration)}</div>
      </div>
      <div className="stops">
        <div className="upper">{transfer(segment.stops.length)}</div>
        <div className="lower">{segment.stops.join(", ")}</div>
      </div>
    </div>
  );
};

export default TicketWay;
