function getRandomColor() {
  var colors = [
    "#FFCC80",
    "#FFAB91",
    "#E6EE9B",
    "#80DEEA",
    "#F48FB1",
    "#80CBC4",
    "#7634d8",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

export default getRandomColor;