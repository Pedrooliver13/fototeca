import client from 'service/api';

export const getPhotos = async (query = 'Nature', pearPage = 40) => {
  return client.photos
    .search({ query, per_page: pearPage, page: 3 })
    .then((photos) => photos);
};
