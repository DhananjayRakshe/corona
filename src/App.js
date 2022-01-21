import './App.css';
import { MenuItem, FormControl, Select } from '@material-ui/core';
import { useState, useEffect } from 'react';

function App() {
  const [countries, setCountries] = useState([])

  // Getting all countries name for dropdown list
  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) => ({
          name: country.country,
          value: country.countryInfo.iso2,
        }));
        setCountries(countries);
      });
    };
    getCountriesData();
  }, []);


  return (
    <div className="app">
      <div className="app__header">
        <h1>Covid-19 TRACKER</h1>

        <FormControl className="app_dropdown">
          <Select
            variant='outlined'
            value='abc'
          >
            {/* Loop through all countries */}
            {
              countries.map((country) => (
                <MenuItem value={country.value}> {country.name} </MenuItem>
              ))}

          </Select>
        </FormControl>
      </div>


      {/* Header */}
      {/* Titlt + select input dropdowan field */}

      {/* Info Boxs */}
      {/* Info Boxs */}
      {/* Info Boxs */}

      {/* Table */}
      {/* Graph */}

      {/* Map */}
    </div>
  );
}

export default App;
