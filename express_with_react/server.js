const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;

// Route to get weather data for a given city
app.get("/weather/:city", async (req, res) => {
  try {
    // Get the city name from the request parameter
    const city = req.params.city;

    // Call the weather API with the city name
    const response = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=9ee0f7b5de614141b7485133231903%20&q=${city}&aqi=no`
    );

    // Extract the relevant weather data from the response
    const data = response.data;

    // Send the weather data back to the client
    res.send(data);
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).send("An error occurred while fetching weather data.");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});