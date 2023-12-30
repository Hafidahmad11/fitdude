document.addEventListener("DOMContentLoaded", () => {
  const trainingSelect = document.getElementById("training-type");
  const submitButton = document.getElementById("submit-button");
  const exerciseList = document.getElementById("exercise-list");

  submitButton.addEventListener("click", () => {
    const selectedTraining = trainingSelect.value;
    const exerciseMap = {
      biceps: ["Hammer Curls", "Barbell Curl", "Dumbbell Curl"],
      triceps: ["Tricep Dips", "Skull Crushers", "Close Grip Bench Press"],
      chest: ["Bench Press", "Dumbbell Flyes", "Push-Ups"],
      legs: ["Squats", "Lunges", "Leg Press"],
      back: ["Deadlifts", "Lat Pulldowns", "Bent Over Rows"],
    };
    exerciseList.innerHTML = "";
    if (exerciseMap[selectedTraining]) {
      const exercises = exerciseMap[selectedTraining];
      const exerciseItems = exercises.map((exercise) => `<li>${exercise}</li>`);
      exerciseList.innerHTML = `<ul>${exerciseItems.join("")}</ul>`;
    } else {
      exerciseList.innerHTML = "<p>Tidak ada data latihan untuk jenis pelatihan ini.</p>";
    }
  });
});
