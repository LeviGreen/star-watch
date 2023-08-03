import { useState } from 'react';
import { AutoComplete } from 'antd';
import {  Button, Card } from './styles';
import './index.css';
import mapquestApiService from "../services/mapquestApi";


function App() {

  const [location, setLocation] = useState()
  const [locationSuggestions, setLocationSuggestions] = useState(null)

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

  const onChange = (value) => {
    if(value.length < 2) { return null; }

    mapquestApiService().getPredictions(value).then((res) => {
      return res.json();
    }).then((body) => {
      var suggestions = formatSuggestions(body.results)
      setLocation(body.results[0])
      setLocationSuggestions(suggestions);
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
            onChange={onChange}
          />
          <Button onClick={() => console.log(location)}>Submit</Button>
        </Card>
      </header>
    </div>
  );
}

export default App;
