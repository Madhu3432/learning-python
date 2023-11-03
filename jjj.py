function convertAgeToDays(age) {
  if (age < 0) {
    return "Age cannot be negative!";
  }

  const daysInYear = 365.25; // accounting for leap years
  const days = age * daysInYear;

  return `Your age in days is approximately ${days.toFixed(2)} days.`;
}

const age = parseFloat(prompt("Enter your age:"));
console.log(convertAgeToDays(age));