import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '51522694-741a1cf8502b1e4019d28362b'; // заміни на свій

export async function getImagesByQuery(query) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
  return response.data;
}
