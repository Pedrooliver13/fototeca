import client from 'service/api';

export const getPhotos = async (pearPage = 40, page = 1, query = 'Nature') => {
  return client.photos
    .search({ query, per_page: pearPage, page: page })
    .then((photos) => photos);
};
