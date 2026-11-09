
const apiKey = "732a5f7185ae0fc059ef30bf861a4e6e";
let chart;

async function getWeather() {

    let city = document.getElementById("city").value;

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {

        let response = await fetch(url);
        let data = await response.json();

        if (!response.ok)
            throw new Error("City not found");

        // Display weather details
        document.getElementById("result").innerHTML =
            "<h2>" + data.name + "</h2>" +
            "Temperature: " + data.main.temp + " °C<br>" +
            "Humidity: " + data.main.humidity + "%<br>" +
            "Wind Speed: " + data.wind.speed + " m/s";

        // Display graph
        if (chart)
            chart.destroy();

        chart = new Chart(document.getElementById("weatherChart"), {
            type: "bar",

            data: {
                labels: ["Temperature", "Humidity", "Wind Speed"],

                datasets: [{
                    label: "Weather Details",
                    data: [
                        data.main.temp,
                        data.main.humidity,
                        data.wind.speed
                    ],
                    backgroundColor: ["blue", "green", "orange"]
                }]
            }
        });

    }
    catch (error) {
        alert(error.message);
    }
}
