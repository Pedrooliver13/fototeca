import client from 'service/api';

export const getPhotos = (page = 1, perPage = 12, query = 'Nature') => {
  return client.photos
    .search({ query, per_page: perPage, page: page })
    .then((photos) => photos);
};
