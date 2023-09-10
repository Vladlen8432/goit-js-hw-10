import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  "live_iqKGbkevKYdNv8tce3RlUCxPIymxkCZW273eix7EWm65AWTsB4uSPPTCgrKtVRhY";

  

export async function fetchBreeds() {
  return axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
}

export function fetchCatByBreed(breedId) {
  return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`, {
    method: 'GET',
    headers: {
      'x-api-key': 'live_iqKGbkevKYdNv8tce3RlUCxPIymxkCZW273eix7EWm65AWTsB4uSPPTCgrKtVRhY',
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch cat data.');
      }
      return response.json();
    })
    .then(data => data[0])
    .catch(error => {
      throw error;
    });
}