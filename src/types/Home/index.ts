export type Photo = {
  id: number;
  photographer_url: string;
  src: {
    original: string;
    small: string;
    large: string;
  };
};

export type Props = {
  total_results: number;
  per_page: number;
  page: number;
  photos: Photo[];
};
