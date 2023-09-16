import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_iqKGbkevKYdNv8tce3RlUCxPIymxkCZW273eix7EWm65AWTsB4uSPPTCgrKtVRhY';

const BASE_URL = "https://api.thecatapi.com/v1"

export function fetchBreeds() {
  return axios
    .get(`${BASE_URL}/breeds`)
    .then(response => response.data)
}

export function fetchCatByBreed(breedId) {
  return axios
    .get(`${BASE_URL}/images/search?breed_ids=${breedId}`)
    .then(response => response.data)
}
