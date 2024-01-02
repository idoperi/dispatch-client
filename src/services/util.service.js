export const utilService = {
  getRandomColorsList,
  getRandomColor,
  getRandomPastelColor,
  generateColorsArray,
}

function getRandomColorsList(length = 4) {
  console.log("length: ", length)
  const colors = []
  for (let i = 0; i < length; i++) {
    colors.push(getRandomPastelColor())
  }
  return colors
}

function getRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16)
  return "#" + randomColor
}

function getRandomPastelColor() {
  const hue = Math.floor(Math.random() * 360) // Random hue
  const pastel = `hsl(${hue}, 70%, 80%)` // Adjust saturation and lightness for pastel
  return pastel
}

function generateColorsArray(maxLength) {
  const palette = [
    "#FF9800",
    "#030035",
    "#E8E8E8",
    "#343A6E",
    "#DDF3FE",
    "#FF5733",
    "#581845",
    "#C70039",
    "#FFC300",
    "#DAF7A6",
    "#FFC0CB",
    "#900C3F",
    "#FF5733",
    "#8D99AE",
    "#FFD700",
    "#FF7F50",
    "#FF6B81",
    "#AFEEEE",
    "#FF4500",
    "#DFFF00",
    "#00FFFF",
    "#00FF00",
    "#FF00FF",
    "#800000",
    "#800080",
    "#008080",
    "#008000",
    "#000080",
    "#0000FF",
    "#FF0000",
  ]

  const colors = []
  const paletteLength = palette.length

  for (let i = 0; i < maxLength; i++) {
    const colorIndex = i % paletteLength
    colors.push(palette[colorIndex])
  }

  return colors
}

// hi
