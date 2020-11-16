import React, { useState, useEffect } from 'react';
import './App.css';
import Cards from './components/Cards';
import { getData } from './api/covidData';

function App() {
	const covidSource = {
		confirmed: `https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv`,
		recovered: `https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_recovered_global.csv`,
		deaths: `https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv`,
	};

	const [country, setCountry] = useState('');
	const [confirmed, setConfirmed] = useState({});
	const [recovered, setRecovered] = useState({});
	const [deaths, setDeaths] = useState({});
	const [countries, setCountries] = useState([]);
	const [dates, setDates] = useState([]);

	useEffect(() => {
		getData(covidSource.confirmed, 'confirmed', (confirmedData) => {
			// console.log(confirmedData);
			console.log(`>>>>>>>>>>>>>>>>Extracting dates<<<<<<<<<<<<<<`);
			setDates(confirmedData.header.dataDates);

			console.log(`>>>>>>>>>>>>>>>>Extracting countries<<<<<<<<<<<<<<`);
			setCountries(confirmedData.header.countryList);

			console.log(`>>>>>>>>>>>>>>>>Extracting confirmed cases<<<<<<<<<<<<<<`);
			let countriesConfirmed = confirmedData;
			delete countriesConfirmed.header;
			setConfirmed(countriesConfirmed);
		});

		getData(covidSource.recovered, 'recovered', (recoveredData) => {
			console.log(`>>>>>>>>>>>>>>>>Extracting recovered cases<<<<<<<<<<<<<<`);
			let countriesRecovered = recoveredData;
			delete countriesRecovered.header;
			setRecovered(countriesRecovered);
		});

		getData(covidSource.deaths, 'recovered', (deathsData) => {
			console.log(`>>>>>>>>>>>>>>>>Extracting fatal cases<<<<<<<<<<<<<<`);
			let countriesDeaths = deathsData;
			delete countriesDeaths.header;
			setDeaths(countriesDeaths);
		});
	}, [covidSource.confirmed, covidSource.deaths, covidSource.recovered]);

	return (
		<div className="container">
			<Cards />
		</div>
	);
}

export default App;
