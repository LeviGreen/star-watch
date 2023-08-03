import { useState } from 'react';
import { AutoComplete } from 'antd';
import {  Button, Card } from './styles';
import './index.css';
import apiService from "../services/api";

function App() {
  const [location, setLocation] = useState(null)
  const [locationSuggestions, setLocationSuggestions] = useState(null)
  const [forecastData, setForecastData] = useState(null)
  const [moonData, setMoonData] = useState(null)

  const onInputChange = (value) => {
    if(value.length < 2) { return null; }

    getLocationPredictions(value)
  }

  const onButtonClick = () => {
    if(location == null) { return null; }

    var lat = location.place.geometry.coordinates[1]
    var lon = location.place.geometry.coordinates[0]
    getForecast(lat, lon);
    getMoonData(lat, lon);
  }

  function formatSuggestions(results) {
    var suggestions = []
    results.forEach((suggestion) => suggestions.push(
      {
        label: suggestion.displayString,
        value: suggestion.displayString
      }
    ));
    return suggestions;
  }

  function getLocationPredictions(q) {
    apiService().getLocationPredictions(q).then((res) => {
      return res.json();
    }).then((body) => {
      var suggestions = formatSuggestions(body.results)
      setLocation(body.results[0])
      setLocationSuggestions(suggestions);
    }).catch((e) => {
      console.log(e);
    })
  }

  function getForecast(lat, lon) {
    apiService().getForecast(lat, lon).then((res) => {
      return res.json();
    }).then((body) => {
      setForecastData(body)
    }).catch((e) => {
      console.log(e);
    })
  }

  function getMoonData(lat, lon) {
    apiService().getMoonData(lat, lon).then((res) => {
      return res.json();
    }).then((body) => {
      setMoonData(body)
    }).catch((e) => {
      console.log(e);
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <Card>
          <AutoComplete
            className='input'
            placeholder="Enter Location"
            options={locationSuggestions}
            filterOption
            onChange={onInputChange}
          />
          <Button onClick={onButtonClick}>Submit</Button>
        </Card>
        {forecastData != null ? <Card><textarea>{JSON.stringify(forecastData)}</textarea></Card> : <></>}
        {moonData != null ? <Card><textarea>{JSON.stringify(moonData)}</textarea></Card> : <></>}
      </header>
    </div>
  );
}

export default App;
