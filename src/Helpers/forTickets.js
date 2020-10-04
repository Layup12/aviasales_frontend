export function ticketsList(props) {
  const { filter, sort, sortTicketByCost, sortTicketByRate } = props;
  const filtersCount = insideFilter(filter);

  const ticketFilter = ticketsSort(
    sort.costSort,
    sortTicketByCost,
    sortTicketByRate
  ).filter(
    (ticket) =>
      filtersCount.includes(ticket.segments[0].stops.length) &&
      filtersCount.includes(ticket.segments[1].stops.length)
  );

  return ticketFilter.slice(0, 5);
}

export function formatPrice(price) {
  return `${Math.trunc(price / 1000)} ${("00" + (price % 1000)).substr(-3)} Р`;
}

function insideFilter(filter) {
  if (filter.all) {
    return [0, 1, 2, 3, 4, 5];
  }
  return Object.keys(filter)
    .slice(1)
    .reduce((acc, item, index) => {
      if (filter[item]) acc.push(index);

      return acc;
    }, []);
}

function ticketsSort(costSort, sortTicketByCost, sortTicketByRate) {
  return costSort ? sortTicketByCost : sortTicketByRate;
}
