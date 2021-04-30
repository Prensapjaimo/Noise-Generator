const canvas = document.querySelector("#mycanvas");
const ctx = canvas.getContext("2d");
const sizeselector = document.querySelector("#rectsize");

//Arbitrary canvas size
canvas.height = 600;
canvas.width = 600;

//Display a color when no noise generated
ctx.fillStyle = "grey";
ctx.fillRect(0, 0, canvas.width, canvas.height);

let chosen; //Keep track of the type of noise, to then generate it when changed square size

//Main function
const createnoise = (type) => {
  ctx.beginPath();
  chosen = type;
  for (let i = 0; i < canvas.width; i++) {
    for (let j = 0; j < canvas.height; j++) {
      if (type === "bw") {
        ctx.fillStyle = Math.random() >= 0.5 ? "white" : "black";
      } else if (type === "gs") {
        let color = Math.random() * 255;
        ctx.fillStyle = `rgb(${color},${color},${color})`;
      } else if (type === "color") {
        let red = Math.random() * 255;
        let green = Math.random() * 255;
        let blue = Math.random() * 255;
        ctx.fillStyle = `rgb(${red},${green},${blue})`;
      }
      ctx.fillRect(i * rectSize, j * rectSize, rectSize, rectSize);
    }
  }
};

//Setting up the range input
sizeselector.min = 1;
sizeselector.max = canvas.height;
sizeselector.step = 1;

//Change the size of the squares
let rectSize = 5;
const setRectSize = () => {
  rectSize = sizeselector.value;
  createnoise(chosen);
};
