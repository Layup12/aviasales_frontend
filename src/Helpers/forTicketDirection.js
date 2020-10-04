import {
  MINUTES_PER_HOUR,
  MINUTES_PER_DAY,
  TRANSPLANT_CASES,
} from "../Constants/Constants";

function hoursCounter(duration) {
  return Math.floor(duration / MINUTES_PER_HOUR);
}

function minutesCounter(duration) {
  return duration % MINUTES_PER_HOUR;
}

function transplantCases(count, cases) {
  return `${count} ${cases}`;
}

export function toHourConverter(duration) {
  if (duration > MINUTES_PER_HOUR) {
    return `${hoursCounter(duration)}ч ${minutesCounter(duration)}м`;
  }
  return `${duration}м`;
}

export function toHourConverterWithColon(duration) {
  if (duration > MINUTES_PER_HOUR) {
    const hours = `00${hoursCounter(duration)}`.substr(-2);
    const minutes = `00${minutesCounter(duration)}`.substr(-2);
    return `${hours}:${minutes}`;
  }
  return `00:${duration}`;
}

export function transfer(lengthStopsList) {
  return !lengthStopsList
    ? transplantCases(lengthStopsList, TRANSPLANT_CASES.zero)
    : lengthStopsList === 1
    ? transplantCases(lengthStopsList, TRANSPLANT_CASES.one)
    : transplantCases(lengthStopsList, TRANSPLANT_CASES.all);
}

export function finishTimeConverter(startTime, duration) {
  const rigthDuration = duration % MINUTES_PER_DAY;
  const rigthStartTime =
    Number(startTime.substr(0, 2)) * MINUTES_PER_HOUR +
    Number(startTime.substr(3, 2));
  return (rigthDuration + rigthStartTime) % MINUTES_PER_DAY;
}
