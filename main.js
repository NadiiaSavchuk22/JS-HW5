// 1
let employee = {};
employee.name = "Ivan";
employee.position = "office manager";
employee.name = "Petro";
delete employee.name;

const isFired = "isFired" in employee;
if (!isFired) {
  employee.isFired = false;
}

const foreignLanguage = prompt(
  "What foreign language do you speak?",
  "English"
);
const languageLevel = prompt("What is your language proficiency level?", "B1");

if (foreignLanguage && languageLevel) {
  employee[foreignLanguage] = languageLevel;
}

console.log(employee);

// 2

const countProperties = (obj) => {
  let count = 0;
  for (const key in obj) {
    count++;
  }

  return count;
};

console.log("countProperties =", countProperties(employee));

// 3

const isEmpty = (obj) => {
  for (const key in obj) {
    return false;
  }
  return true;
};

console.log("isEmpty:", isEmpty(employee));

const isEmpty2 = (obj) => Object.keys(obj).length === 0;

console.log("isEmpty2:", isEmpty2({}));

// 4

let salaries1 = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

const getSum = (obj) => {
  let sum = 0;

  for (const key in obj) {
    sum += obj[key];
  }
  return sum;
};

console.log("Salaries sum =", getSum(salaries1));

// 5

let salaries2 = {
  John: 100,
  Bill: false,
  Ann: 160,
  Lily: null,
  Pete: 13,
};

const multiplyNumeric = (obj, factor) => {
  for (const key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= factor;
    }
  }
};

multiplyNumeric(salaries2, 2);
console.log(salaries2);
