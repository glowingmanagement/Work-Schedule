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
  // get current day
  const day = moment().day();
  const displayDay = weekDay[day];
  // get current date
  const date = moment().toString().split(" ");
  const displayDate = date[2] + " " + date[1] + " " + date[3];
  const toDisplay = displayDay + ", " + displayDate;
  $("#current-day").append(toDisplay);
  return date[4];
};

// create timeblocks
const createTimeblocks = (timeHour) => {
  $(`
    <div class="time-block">
    <span class="hour">
      ${timeHour}
    </span>
    <textarea class="todo">To Do Items</textarea>
    <button type="button" class="btn save-btn"><i class="fa-solid fa-floppy-disk save-icon"></i></button>
    </div>`).appendTo(".container");
};

// highlight blocks depending on time
const highlightBlocks = () => {};

// store user input in local storage

const storeInput = () => {};

const time = getCurrentDate();
createTimeblocks("7.00");
createTimeblocks("8.00");
createTimeblocks("9.00");
createTimeblocks("10.00");
