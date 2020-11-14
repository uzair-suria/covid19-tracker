import './App.css';
import Cards from './components/Cards';
import { getData } from './api/covidData';

function App() {
	getData(
		`https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv`,
		`confirmed`,
		(dataNew) => {
			console.log(dataNew);
			console.log(Object.keys(dataNew));
		}
	);
	return (
		<div className="container">
			<Cards />
		</div>
	);
}

export default App;
