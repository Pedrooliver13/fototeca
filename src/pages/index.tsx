import { GetServerSideProps } from 'next';

import Base from 'template/Base';
import Card from 'components/Card';
import Gallery from 'components/Gallery';
import SectionMain from 'template/SectionMain';

import { getPhotos } from 'service/photos';

type Photo = {
  id: number;
  photographer_url: string;
  src: {
    original: string;
    small: string;
    large: string;
  };
};

type Props = {
  total_results: number;
  per_page: number;
  page: number;
  photos: Photo[];
};

export default function Home(props: Props) {
  return (
    <Base>
      <SectionMain
        title="San Francisco Based Product Photography Services"
        subtitle="Get high-quality aesthetic photographs of your valuable products within few days"
        buttonText="Book a photoshoot"
      />

      <Gallery>
        {props?.photos.map((photo: Photo) => (
          <Card key={photo.id} src={photo.src.large} />
        ))}
      </Gallery>
    </Base>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const responses = await getPhotos(Number(query.page));

  if (!responses) return { notFound: true };

  return {
    props: {
      ...responses
    }
  };
};
