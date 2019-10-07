import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/photos';

export function getPhotosFromServer() {
		return axios.get(url);
}