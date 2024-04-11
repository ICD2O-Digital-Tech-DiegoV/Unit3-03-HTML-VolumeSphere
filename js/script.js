function doMathClicked() {
  // this function does basic math: Area of a Trapezoid
  let  radius = parseInt(document.getElementById("radius").value);
  
  let answer = (4/3) * Math.PI * Math.pow(radius, 3);

  // Make sure not negative
  if (answer <= 0) {
    answer = 0;
    document.getElementById("Radius").innerHTML = "Invalid input. Ensure value is a positive number.";
  } else {
    document.getElementById("result").innerHTML = "Volume of a sphere! = " + answer.toFixed(2);
  }
}