const btnElement = document.getElementById("calculateBtn");
const birthdayElement = document.getElementById("birthday");
const resultElement = document.getElementById("result");

function getAge(birthddayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthddayValue);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }

  return age;
}

function calculateAge() {
  const birthddayValue = birthdayElement.value;
  if (birthddayValue === "") {
    alert("Please, eneter your birthday");
  } else {
    const age = getAge(birthddayValue);
    resultElement.innerText = `Your age is ${age} ${
      age > 1 ? "years" : "year"
    } old`;
  }
}

btnElement.addEventListener("click", calculateAge);
