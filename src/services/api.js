import env from "react-dotenv";

export default () => {

  return {
    getLocationPredictions: (q) =>
      fetch(`${env.MAPQUEST_DOMAIN}/prediction?key=${env.MAPQUEST_API_KEY}&collection=adminArea,poi,address&limit=5&q=${q}`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ),
    getForecast: (lat, lon) =>
      fetch(`/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'X-Api-Key': env.OPENWEATHERMAP_API_KEY
        }
      }
    ),
    getMoonData: (lat, long) =>
      fetch(`${env.IPGEOLOCATION_DOMAIN}/astronomy?apiKey=${env.IPGEOLOCATION_API_KEY}&lat=${lat}&long=${long}`, {
      method: "GET",
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  };
};
