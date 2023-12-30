document.addEventListener("DOMContentLoaded", () => {
  const heightInput = document.querySelector('input[placeholder="Height / cm"]');
  const weightInput = document.querySelector('input[placeholder="Weight / kg"]');
  const ageInput = document.querySelector('input[placeholder="Age"]');
  const sexInput = document.querySelector('input[placeholder="Sex"]');
  const calculateButton = document.querySelector('button[type="submit"]');
  const resultElement = document.getElementById("result");

  calculateButton.addEventListener("click", (e) => {
    e.preventDefault();

    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);
    const age = parseFloat(ageInput.value);
    const sex = sexInput.value;
    const bmi = calculateBMI(height, weight);
    resultElement.textContent = `Your BMI is ${bmi.toFixed(2)}.`;
  });

  const calculateBMI = (height, weight) => {
    const heightInMeter = height / 100;
    return weight / (heightInMeter * heightInMeter);
  };
});
