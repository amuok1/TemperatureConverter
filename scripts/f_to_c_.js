function convert() {
    var fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
    if (isNaN(fahrenheit)) {
      alert("Please enter a valid number for Fahrenheit temperature.");
      return;
    }
    var celsius = (fahrenheit - 32) * 5/9;
    document.getElementById("result").innerHTML = fahrenheit + "°F is " + celsius.toFixed(2) + "°C";
  }