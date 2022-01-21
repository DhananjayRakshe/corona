import './App.css';
import { MenuItem, FormControl, Select } from '@material-ui/core';
import { useState, useEffect } from 'react';
import InfoBox from './InfoBox';
import Map from './Map';

import { Card, CardContent, Typography } from '@material-ui/core';

function App() {
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState('worldwide');


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

  const onCountryChange = (event) => {
    const countryCode = event.target.value;
    //  console.log(countryCode);

    setCountry(countryCode);
  }
  return (
    <div className="app">

      <div className="app__left">
        <div className="app__header">
          <h1>Covid-19 TRACKER</h1>

          <FormControl className="app_dropdown">
            <Select
              variant='outlined'
              value={country}
              onChange={onCountryChange}
            >
              {/* Loop through all countries */}
              <MenuItem value="worldwide">World Wide</MenuItem>
              {
                countries.map((country) => (
                  <MenuItem value={country.value}> {country.name}
                  </MenuItem>
                ))}

            </Select>
          </FormControl>
        </div>

        <div className="app__stats">
          <InfoBox title="Corona Virus cases" cases={123} total={2000} />
          <InfoBox title="Recoverd" cases={1234} total={2500} />
          <InfoBox title="Deaths" cases={5000} total={7000} />
        </div>

        {/* Map */}
        <Map />
      </div>

      <Card className="app__right">
        <CardContent>
          {/* Table */}
          <h3>Live cases by country</h3>
          {/* Graph */}
          <h3>World wide new cases</h3>
        </CardContent>
      </Card>

    </div>
  );
}

export default App;
