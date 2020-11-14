import { readRemoteFile } from 'react-papaparse';

export const fetchData = (url) => {
	// const rawData = [];
	readRemoteFile(url, {
		dynamicTyping: true,
		complete: (results) => {
			return results.data;
		},
	});
};
