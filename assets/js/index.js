// variables
const weekDay = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// get current date and time
const getCurrentDate = () => {
  const day = moment().day();
  const displayDay = weekDay[day];
  const date = moment().toString().split(" ");
  const displayDate = date[2] + " " + date[1] + " " + date[3];
  const toDisplay = displayDay + ", " + displayDate;
  $("#current-day").append(toDisplay);
  return toDisplay;
};

// create timeblocks
const createTimeblocks = () => {};

// highlight blocks depending on time
const highlightBlocks = () => {};

// store user input in local storage

const storeInput = () => {};

getCurrentDate();
