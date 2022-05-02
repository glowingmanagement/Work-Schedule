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
const startTime = 10;
const endTime = 20;
let times = [];
// let todo = JSON.parse(localStorage.getItem("todoList")) || [];

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

const getHours = () => {
  const length = endTime - startTime;
  for (let i = 0; i < length; i++) {
    times.push(i + startTime);
  }
};

// create timeblocks
const createTimeblocks = (timeHour, time) => {
  $(`
    <div class="time-block" >
    <span class="hour">
      ${timeHour}
    </span>
    <textarea class="todo" id=${time}></textarea>
    <button type="button" class="btn save-btn" id="btn-${time}"><i class="fa-solid fa-floppy-disk save-icon"></i></button>
    </div>`).appendTo(".container");

  $(`#btn-${time}`).click(function () {
    storeInput(time);
  });
};

// add blocks
const addBlocks = () => {
  const noOfBlocks = endTime - startTime;

  for (let i = 0; i < noOfBlocks; i++) {
    const displayTime = `${(i + startTime).toString()}.00`;
    createTimeblocks(displayTime, i + startTime);
  }
};

// highlight blocks depending on time
const highlightBlocks = (currentTime) => {
  const currentHour = currentTime.split(":")[0];
  const timeIndex = times.findIndex((element) => element == `${currentHour}`);

  // present time

  $(`#${currentHour}`).addClass("present");

  // past time
  for (let i = 0; i < timeIndex; i++) {
    $(`#${times[i]}`).addClass("past");
  }

  // future time
  for (let i = timeIndex + 1; i < times.length; i++) {
    $(`#${times[i]}`).addClass("future");
  }
};

// store user input in local storage

const storeInput = (time) => {
  const input = $(`#${time}`).val();
  localStorage.setItem(time, input);
  getInputs();
};

const getInputs = () => {
  times.forEach((element) => {
    const item = localStorage.getItem(element);
    $(`#${element}`).val(item);
  });
};

// functions
getHours();
const time = getCurrentDate();
addBlocks();
highlightBlocks(time);
getInputs();
