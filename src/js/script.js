import { fetchBreeds, fetchCatByBreed } from './cat-api';

document.addEventListener('DOMContentLoaded', async () => {
  const breedSelect = document.querySelector('.breed-select');
  const loader = document.querySelector('.loader');
  const error = document.querySelector('.error');
  const catInfo = document.querySelector('.cat-info');
  const catName = document.querySelector('.cat-name');
  const catDescription = document.querySelector('.cat-description');
  const catTemperament = document.querySelector('.cat-temperament');
  const catImage = document.querySelector('.cat-image');
  let selectedBreedId = null;

  breedSelect.addEventListener('change', async () => {
    selectedBreedId = breedSelect.value;

    try {
      loader.style.display = 'block';
      error.style.display = 'none';
      catInfo.style.display = 'none';

      const catData = await fetchCatByBreed(selectedBreedId);
      const [cat] = catData;

      catName.textContent = cat.breeds[0].name;
      catDescription.textContent = cat.breeds[0].description;
      catTemperament.textContent = `Temperament: ${cat.breeds[0].temperament}`;
      catImage.src = cat.url;

      loader.style.display = 'none';
      catInfo.style.display = 'block';
    } catch (error) {
      loader.style.display = 'none';
      error.style.display = 'block';
    }
  });

  try {
    const breeds = await fetchBreeds();
    const breedOptions = breeds.map(breed => ({
      text: breed.name,
      value: breed.id,
    }));

    const slim = new SlimSelect({
      select: '.breed-select',
      placeholder: 'Select a breed',
      data: breedOptions,
    });
  } catch (error) {
    console.error(error);
    loader.style.display = 'none';
    error.style.display = 'block';
  }
});
