/** @format */

// QUESTION 1
document.querySelector("#which_president").addEventListener("click", (e) => {
  let selectedPresident = document.querySelector("input[type=radio]:checked");
  if (selectedPresident.id === "George Washington")
    document.querySelector("#correct_president").textContent =
      "Correct! George Washington is the first President of the United States!";
  else {
    let presName =
      selectedPresident.id[0].toUpperCase() + selectedPresident.id.substring(1);
    document.querySelector(
      "#correct_president"
    ).textContent = `Incorrect, ${presName} is not the first President of the United States.`;
  }
});

// QUESTION 2
document.querySelector("#which_president2").addEventListener("click", (e) => {
  let selectedPresident2 = document.querySelector("input[type=radio]:checked");
  if (selectedPresident2.id === "Abraham Lincoln")
    document.querySelector("#correct_president2").textContent =
      "Correct! Abraham Lincoln is the President on the United States penny!";
  else {
    let presName =
      selectedPresident2.id[0].toUpperCase() + selectedPresident2.id.substring(1);
    document.querySelector(
      "#correct_president2"
    ).textContent = `Incorrect, ${presName} is not the President on the United States penny.`;
  }
});

// QUESTION 3
document.querySelector("#which_president3").addEventListener("click", (e) => {
  let selectedPresident3 = document.querySelector("input[type=radio]:checked");
  if (selectedPresident3.id === "Joe Biden")
    document.querySelector("#correct_president3").textContent =
      "Correct! Joe Biden is the current President of the United States!";
  else {
    let presName =
      selectedPresident3.id[0].toUpperCase() + selectedPresident3.id.substring(1);
    document.querySelector(
      "#correct_president3"
    ).textContent = `Incorrect, ${presName} is not the current President of the United States.`;
  }
});

// QUESTION 4
document.querySelector("#which_president4").addEventListener("click", (e) => {
  let selectedPresident4 = document.querySelector("input[type=radio]:checked");
  if (selectedPresident4.id === "National union party")
    document.querySelector("#correct_president4").textContent =
      "Correct! The National union party is the political party Abraham Lincoln was associated with!";
  else {
    let presName =
      selectedPresident4.id[0].toUpperCase() + selectedPresident4.id.substring(1);
    document.querySelector(
      "#correct_president4"
    ).textContent = `Incorrect, the ${presName} is not the political party Abraham Lincoln was associated with.`;
  }
});

// QUESTION 5
document.querySelector("#which_president5").addEventListener("click", (e) => {
  let selectedPresident5 = document.querySelector("input[type=radio]:checked");
  if (selectedPresident5.id === "Ulysses S. Grant")
    document.querySelector("#correct_president5").textContent =
      "Correct! Ulysses S. Grant is the President on the $50 United States bill!";
  else {
    let presName =
      selectedPresident5.id[0].toUpperCase() + selectedPresident5.id.substring(1);
    document.querySelector(
      "#correct_president5"
    ).textContent = `Incorrect, ${presName} is not the President on the $50 United States bill.`;
  }
});

// QUESTION 6
document.querySelector("#which_president6").addEventListener("click", (e) => {
  let selectedPresident6 = document.querySelector("input[type=radio]:checked");
  if (selectedPresident6.id === "Mike Pence")
    document.querySelector("#correct_president6").textContent =
      "Correct! Mike Pence was the Vice President of Donald Trump!";
  else {
    let presName =
      selectedPresident6.id[0].toUpperCase() + selectedPresident6.id.substring(1);
    document.querySelector(
      "#correct_president6"
    ).textContent = `Incorrect, ${presName} was not the Vice President of Donald Trump.`;
  }
});

// QUESTION 7
document.querySelector("#which_president7").addEventListener("click", (e) => {
  let selectedPresident7 = document.querySelector("input[type=radio]:checked");
  if (selectedPresident7.id === "Andrew Jackson")
    document.querySelector("#correct_president7").textContent =
      "Correct! Andrew Jackson is the President on the $20 United States bill!";
  else {
    let presName =
      selectedPresident7.id[0].toUpperCase() + selectedPresident7.id.substring(1);
    document.querySelector(
      "#correct_president7"
    ).textContent = `Incorrect, ${presName} is not the President on the $20 United States bill.`;
  }
});

// QUESTION 8
document.querySelector("#which_president8").addEventListener("click", (e) => {
  let selectedPresident8 = document.querySelector("input[type=radio]:checked");
  if (selectedPresident8.id === "Calvin Coolidge")
    document.querySelector("#correct_president8").textContent =
      "Correct! Calvin Coolidge is the only President to be born on Independence day!";
  else {
    let presName =
      selectedPresident8.id[0].toUpperCase() + selectedPresident8.id.substring(1);
    document.querySelector(
      "#correct_president8"
    ).textContent = `Incorrect, ${presName} is not the only President to be born on Independence day.`;
  }
});

// QUESTION 9
document.querySelector("#which_president9").addEventListener("click", (e) => {
  let selectedPresident9 = document.querySelector("input[type=radio]:checked");
  if (selectedPresident9.id === "George W. Bush")
    document.querySelector("#correct_president9").textContent =
      "Correct! George W. Bush is the only President to have twins!";
  else {
    let presName =
      selectedPresident9.id[0].toUpperCase() + selectedPresident9.id.substring(1);
    document.querySelector(
      "#correct_president9"
    ).textContent = `Incorrect, ${presName} is not the only President to have twins.`;
  }
});

// QUESTION 10
document.querySelector("#which_president10").addEventListener("click", (e) => {
  let selectedPresident10 = document.querySelector("input[type=radio]:checked");
  if (selectedPresident10.id === "John Tyler")
    document.querySelector("#correct_president10").textContent =
      "Correct! John Tyler is the first Vice President to become President after the death of a President!";
  else {
    let presName =
      selectedPresident10.id[0].toUpperCase() + selectedPresident10.id.substring(1);
    document.querySelector(
      "#correct_president10"
    ).textContent = `Incorrect, ${presName} is not the first Vice President to become President after the death of a President.`;
  }
});