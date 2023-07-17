import axios from 'axios';

export const API_KEY = '36861525-e0c9def87db19971deb2e17d1'; 
export const API_URL = 'https://pixabay.com/api/';
export const perPage = 12;

export async function getImages (searchQuery, page = 1) {
    return axios({
        method: 'GET',
        url: `${API_URL}`,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        params: {
            key: `${API_KEY}`,
            q: `${searchQuery}`,
            image_type: 'photo',
            orientation: 'horizontal',
            per_page: +`${perPage}`,
            page: +`${page}`,
            safesearch: true
        },
    })
}





