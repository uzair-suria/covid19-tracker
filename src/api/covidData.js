import { readRemoteFile } from 'react-papaparse';

/**
 * getData function takes two arguments required to fetch the COVID-19 CSV data data from https://github.com/CSSEGISandData/COVID-19/tree/master/csse_covid_19_data/csse_covid_19_time_series
 * @param {string} url - url to the time series CSV
 * @param {string} dataType - Type of data expected (confirmed, recovered, deaths)
 * @param {function} callback - use this callback to consume data on component side
 */
export const getData = (url, dataType, callback) => {
	const cleanData = (data, dataType) => {
		let filteredData = {};
		let cumData = []; // to be used for fragmented countries
		for (let i = 0; i < data.length; i++) {
			if (i === 0) {
				filteredData = {
					header: {
						dataDates: data[i]
							.slice(4, data[i].length)
							.map((date) => new Date(date).toDateString().slice(4)),
					},
				};
			} else if (data[i][1] === data[i - 1][1]) {
				let currArray = data[i].slice(4, data[i].length);
				let prevArray = filteredData[data[i][1]][dataType];

				cumData = prevArray.map((num, index) => num + currArray[index]);
				filteredData = {
					...filteredData,
					[data[i][1]]: {
						[dataType]: cumData,
					},
				};
			} else {
				filteredData = {
					...filteredData,
					[data[i][1]]: {
						[dataType]: data[i].slice(4, data[i].length),
					},
				};
			}
		}
		return filteredData;
	};

	readRemoteFile(url, {
		dynamicTyping: true,
		complete: (results) => {
			console.log(`Cleaning data...`);
			const cleanedData = cleanData(results.data, dataType);
			console.log(`Data cleaned!`, cleanedData);
			callback(cleanedData);
		},
	});
};
