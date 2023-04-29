const slider = document.getElementById("slider");
const points = document.querySelectorAll(".point");

slider.addEventListener("input", () => {
  const value = slider.value;
  const percent = (value - 1) * 10;
  slider.style.left = `${percent}%`;
  points.forEach((point) => {
    const pointValue = parseInt(point.id.replace("point", ""));
    if (pointValue < value) {
      point.classList.add("selected");
    } else {
      point.classList.remove("selected");
    }
  });
});
