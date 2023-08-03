import { useState } from 'react';
import { AutoComplete } from 'antd';
import {  Button, Card } from './styles';
import './index.css';
import apiService from "../services/api";

function App() {

  const [location, setLocation] = useState()
  const [locationSuggestions, setLocationSuggestions] = useState(null)
  const [weatherData, setWeatherData] = useState(null)

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

  const onInputChange = (value) => {
    if(value.length < 2) { return null; }

    apiService().getLocationPredictions(value).then((res) => {
      return res.json();
    }).then((body) => {
      var suggestions = formatSuggestions(body.results)
      setLocation(body.results[0])
      setLocationSuggestions(suggestions);
    }).catch((e) => {
      console.log(e);
    })
  }

  const onButtonClick = () => {
    if(location == null) { return null; }
    
    var lat = location.place.geometry.coordinates[1]
    var lon = location.place.geometry.coordinates[0]
    apiService().getForecast(lat, lon).then((res) => {
      return res.json();
    }).then((body) => {
      setWeatherData(body)
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
        {weatherData != null ? <Card><textarea>{JSON.stringify(weatherData)}</textarea></Card> : <></>}
      </header>
    </div>
  );
}

export default App;
