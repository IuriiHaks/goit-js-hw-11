import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const form = document.querySelector('.form');

form.addEventListener('submit', async e => {
  e.preventDefault();
  const query = e.target.elements['search-text'].value.trim();

  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search term',
    });
    return;
  }

  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(query);

    if (!data.hits.length) {
      iziToast.info({
        title: 'Sorry',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    } else {
      createGallery(data.hits);
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Try again later.',
    });
  } finally {
    hideLoader();
  }
});
