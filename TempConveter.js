document.getElementById("convertBtn").addEventListener("click", function () {
    var celsius = parseFloat(document.getElementById("celsius").value);
  
    //Fahrenheit and Kelvin
    var fahrenheit = (celsius * 9/5) + 32;
    var kelvin = celsius + 273.15;
  
    //results
    document.getElementById("fahrenheit").textContent = ` ${fahrenheit}°F`;
    document.getElementById("kelvin").textContent = ` ${kelvin} K`;
  });