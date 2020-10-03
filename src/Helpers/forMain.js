import { FILTER_FIELDS } from "../Constants/Constants";

export function sortTicketByCostF(defaultTickets) {
  return defaultTickets.sort((a, b) => {
    return a.price - b.price;
  });
}

export function sortTicketByRateF(defaultTickets) {
  return defaultTickets.sort((a, b) => {
    return a.segments[0].duration - b.segments[0].duration;
  });
}

export function createArray(par, filter) {
  let array = [];
  for (let property in filter) {
    if (property !== par && property !== "all") {
      array.push(filter[property]);
    }
  }
  return array;
}

export function caseAll(name, filter) {
  return {
    ...Object.values(FILTER_FIELDS).reduce((acc, item) => {
      acc[item] = !filter[name];

      return acc;
    }, {}),
  };
}

export function caseAnother(name, filter, array) {
  return {
    ...filter,
    [name]: !filter[name],
    [FILTER_FIELDS.ALL]: ![...array, !filter[name]].includes(false),
  };
}
