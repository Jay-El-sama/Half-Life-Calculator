function calculate() {
  const initial = parseFloat(document.getElementById('initialAmount').value);
  const time = parseFloat(document.getElementById('elapsedTime').value);
  const halfLife = parseFloat(document.getElementById('halfLife').value);

  const timeMultiplier = parseFloat(document.getElementById('timeUnit').value);
  const halfLifeMultiplier = parseFloat(document.getElementById('halfLifeUnit').value);
  const unit = document.getElementById('amountUnit').value;

  const resultDiv = document.getElementById('result');

  if (isNaN(initial) || isNaN(time) || isNaN(halfLife) || halfLife <= 0) {
    resultDiv.textContent = "❌ Please enter valid numbers for all fields.";
    return;
  }

  const timeInHours = time * timeMultiplier;
  const halfLifeInHours = halfLife * halfLifeMultiplier;

  const remaining = initial * Math.pow(0.5, timeInHours / halfLifeInHours);
  resultDiv.textContent = `✅ Remaining Amount: ${remaining.toFixed(4)} ${unit}`;
}

function toggleTutorial() {
  const tutorial = document.getElementById("tutorial");
  tutorial.classList.toggle("hidden");
}