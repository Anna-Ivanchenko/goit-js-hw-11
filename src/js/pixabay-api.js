import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '54908313-686938f30eb04142f9ec31b4f';

export function getImagesByQuery(query) {
    return axios.get(`${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`)
        .then(response => {
            return response.data;
        });
}
