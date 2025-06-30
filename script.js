const toggleIngredientsBtn = document.getElementById("toggleIngredients");
const ingredients = document.getElementById("ingredients");

toggleIngredientsBtn.addEventListener("click", () => {
  ingredients.classList.toggle("hidden");
  toggleIngredientsBtn.textContent = ingredients.classList.contains("hidden") 
    ? "Show Ingredients 💖" 
    : "Hide Ingredients 💅";
});

const toggleStepsBtn = document.getElementById("toggleSteps");
const steps = document.getElementById("steps");

toggleStepsBtn.addEventListener("click", () => {
  steps.classList.toggle("hidden");
  toggleStepsBtn.textContent = steps.classList.contains("hidden") 
    ? "Show Steps 🍓" 
    : "Hide Steps 🎀";
});

const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextStep");
const stepItems = document.querySelectorAll("#steps li");
const progress = document.getElementById("progress");

let currentStep = 0;

startBtn.addEventListener("click", () => {
  steps.classList.remove("hidden");
  nextBtn.classList.remove("hidden");
  highlightStep(currentStep);
  confettiBurst();
});

nextBtn.addEventListener("click", () => {
  if (currentStep < stepItems.length - 1) {
    stepItems[currentStep].style.backgroundColor = "";
    currentStep++;
    highlightStep(currentStep);
    confettiBurst();
  } else {
    stepItems[currentStep].style.backgroundColor = "";
    nextBtn.textContent = "All Done! 🎉";
    nextBtn.disabled = true;
    confettiBurst();
  }
});

function highlightStep(index) {
  stepItems[index].style.backgroundColor = "#ffe4f2";
  stepItems[index].style.borderRadius = "10px";
  progress.style.width = ((index + 1) / stepItems.length) * 100 + "%";
}

function confettiBurst() {
  confetti({
    particleCount: 100,
    spread: 80,
    origin: { y: 0.6 },
    colors: ['#ff69b4', '#ffb6c1', '#ffe4e1', '#ff85b3']
  });
}
