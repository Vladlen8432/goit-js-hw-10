import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  "live_iqKGbkevKYdNv8tce3RlUCxPIymxkCZW273eix7EWm65AWTsB4uSPPTCgrKtVRhY";

export function fetchBreeds() {
  return axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
}

export function fetchCatByBreed(breedId) {
  return axios
    .get('https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}')
    .then(responce => responce.data)
    .catch(error => {
      throw error;
    });
}
