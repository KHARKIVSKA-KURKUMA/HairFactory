import masters from "./master.json";
import mastersUk from "./master-uk.json";

const DateFormat = (enrolmentDate) => {
  const dateObj = new Date(enrolmentDate);
  const day = dateObj.getDate().toString().padStart(2, "0");
  const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
  const year = dateObj.getFullYear();
  return `${day}.${month}.${year}`;
};

function findMasterById(id) {
  const master = masters.find((master) => master.id === id);
  return master ? master.name : null;
}

function findMasterByIdUk(id) {
  const master = mastersUk.find((master) => master.id === id);
  return master ? master.name : null;
}

function findMasterByEmail(email) {
  const master = masters.find((master) => master.email === email);
  return master ? master.id : null;
}

const availableHours = Array.from({ length: 15 }, (_, i) => {
  const hour = i + 9;
  const period = hour >= 12 ? "PM" : "AM";
  return {
    value: hour,
    label: `${hour > 12 ? hour - 12 : hour} ${period}`,
  };
});

function convertToTimeFormat(number) {
  if (number === 0) {
    return "12:00 AM";
  } else if (number === 12) {
    return "12:00 PM";
  } else if (number < 12) {
    return `${number}:00 ` + "AM";
  } else {
    return `${number - 12}:00 ` + "PM";
  }
}

function extractDateString(inputDateString) {
  const inputDate = new Date(inputDateString);
  const year = inputDate.getFullYear();
  const month = ("0" + (inputDate.getMonth() + 1)).slice(-2);
  const day = ("0" + inputDate.getDate()).slice(-2);
  return `${year}-${month}-${day}`;
}

function convertTimeTo24HourFormat(timeString) {
  const [timePart, period] = timeString.split(" ");
  const [hours, minutes] = timePart.split(":").map(Number);
  let hour24 = hours;
  if (period === "PM" && hours < 12) {
    hour24 = hours + 12;
  } else if (period === "AM" && hours === 12) {
    hour24 = 0;
  }
  return hour24;
}

export {
  DateFormat,
  findMasterById,
  findMasterByIdUk,
  findMasterByEmail,
  availableHours,
  extractDateString,
  convertTimeTo24HourFormat,
  convertToTimeFormat,
};
