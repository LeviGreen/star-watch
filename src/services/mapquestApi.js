import env from "react-dotenv";

export default () => {

  return {
    getPredictions: (q) =>
      fetch(`${env.MAPQUEST_API_DOMAIN}/prediction?key=${env.MAPQUEST_API_KEY}&collection=adminArea,poi,address&limit=5&q=${q}`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  };
};
