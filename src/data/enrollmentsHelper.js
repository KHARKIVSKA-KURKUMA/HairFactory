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

export { DateFormat, findMasterById, findMasterByIdUk, findMasterByEmail };
