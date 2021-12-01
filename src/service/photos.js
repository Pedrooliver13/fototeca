import client from 'service/api';

export const getPhotos = (page = 1, perPage = 12, query = 'City') => {
  return client.photos
    .search({ query, per_page: perPage, page: page })
    .then((photos) => photos);
};
