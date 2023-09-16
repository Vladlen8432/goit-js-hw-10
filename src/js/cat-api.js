import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_iqKGbkevKYdNv8tce3RlUCxPIymxkCZW273eix7EWm65AWTsB4uSPPTCgrKtVRhY';

export async function fetchBreeds() {
  return axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
}

export async function fetchCatByBreed(breedId) {
  return axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
}
