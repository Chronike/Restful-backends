// script.js
document.addEventListener("DOMContentLoaded", function () {
  const redSlider = document.querySelector("#redSlider");
  const greenSlider = document.querySelector("#greenSlider");
  const blueSlider = document.querySelector("#blueSlider");
  const colorValue = document.querySelector("#colorValue");
  const randomColorButton = document.querySelector("#randomColorButton");

  setDefaultColor();

  redSlider.addEventListener("input", updateColor);
  greenSlider.addEventListener("input", updateColor);
  blueSlider.addEventListener("input", updateColor);
  randomColorButton.addEventListener("click", getRandomColor);

  function setDefaultColor() {
    redSlider.value = 255;
    greenSlider.value = 105;
    blueSlider.value = 180;

    updateColor();
  }

  function updateColor() {
    const redValue = redSlider.value;
    const greenValue = greenSlider.value;
    const blueValue = blueSlider.value;

    document.body.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

    colorValue.textContent = `RGB(${redValue}, ${greenValue}, ${blueValue})`;
  }

  async function getRandomColor() {
    try {
      const response = await fetch("https://dummy-apis.netlify.app/api/color");
      const data = await response.json();
      const { rgb } = data;

      redSlider.value = rgb.r;
      greenSlider.value = rgb.g;
      blueSlider.value = rgb.b;

      updateColor();
    } catch (error) {
      console.error("Error fetching random color:", error);
    }
  }
});
