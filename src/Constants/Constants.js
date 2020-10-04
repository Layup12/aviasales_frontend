const FILTER_FIELDS = {
  ALL: "all",
  ZERO: "zero",
  ONE: "one",
  TWO: "two",
  THREE: "three",
};

const FILTER_LABELS = {
  [FILTER_FIELDS.ALL]: "Все",
  [FILTER_FIELDS.ZERO]: "Без пересадок",
  [FILTER_FIELDS.ONE]: "1 пересадка",
  [FILTER_FIELDS.TWO]: "2 пересадки",
  [FILTER_FIELDS.THREE]: "3 пересадки",
};

const SORT_LABELS = {
  costSort: "Самый дешевый",
  rateSort: "Самый быстрый",
};

const MINUTES_PER_HOUR = 60;

const MINUTES_PER_DAY = 1440;

const TRANSPLANT_CASES = {
  [FILTER_FIELDS.ZERO]: "пересадок",
  [FILTER_FIELDS.ONE]: "пересадка",
  [FILTER_FIELDS.ALL]: "пересадки",
};

export {
  FILTER_FIELDS,
  FILTER_LABELS,
  SORT_LABELS,
  MINUTES_PER_HOUR,
  MINUTES_PER_DAY,
  TRANSPLANT_CASES,
};
