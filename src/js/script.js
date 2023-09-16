import { fetchBreeds, fetchCatByBreed } from './cat-api';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';

const breedSelect = document.querySelector('.breed-select');
const catLoader = document.querySelector('.loader');
const catError = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');
let isFirstLoad = true

document.addEventListener('DOMContentLoaded', () => {
  fetchBreeds()
    .then(res => {
      const breedOptions = res.map(breed => ({
        text: breed.name,
        value: breed.id,
      }));

      const slim = new SlimSelect({
        select: '.breed-select',
        placeholder: 'Select a breed',
        data: breedOptions,
      });

      breedSelect.classList.remove('is-hidden');
    })
    .catch(error => {
      console.log(error);
      catError.classList.remove('is-hidden');
    })
    .finally(() => {
      catLoader.classList.add('is-hidden');
    });
});

breedSelect.addEventListener('change', () => {
  if(isFirstLoad) {
    return isFirstLoad = false
  }

  const selectedBreedId = breedSelect.value;
  catLoader.classList.remove("is-hidden")
  catInfo.classList.add("is-hidden")
  catError.classList.add("is-hidden")

  fetchCatByBreed(selectedBreedId)
    .then(res => {
      catInfo.innerHTML = createMurkup(res[0])
      catInfo.classList.remove("is-hidden")
    })
    .catch(error => {
      console.log(error)
      catError.classList.remove("is-hidden")
    })
    .finally(() => {
      catLoader.classList.add('is-hidden');
    });
});

function createMurkup(obj) {
  const img = obj.url;
  const { name, description, temperament } = obj.breeds[0];
  return `
  <img src="${img}" alt="${name}" width="500" height="400" />
      <div>
      <h2>${name}</h2>
      <p>
        ${description}
      </p>
      <p> <span class="temperament">Temperament:</span> ${temperament}</p>
      </div>
  `;
}
