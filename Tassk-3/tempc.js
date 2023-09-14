function convertTemperature() {
    var degreeValue = parseFloat(document.getElementById("degree").value);
    var typeValue = document.getElementById("type").value;
    var result = "";

    if (typeValue === "Celsius") {
        var fahrenheit = (degreeValue * 9/5) + 32;
        result = `${degreeValue}°C is ${fahrenheit.toFixed(2)}°F`;
    } else if (typeValue === "Fahrenheit") {
        var celsius = (degreeValue - 32) * 5/9;
        result = `${degreeValue}°F is ${celsius.toFixed(2)}°C`;
    }

    document.getElementById("result").textContent = result;
}
