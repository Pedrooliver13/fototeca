import { GetServerSideProps } from 'next';

import Base from 'templates/Base';
import Card from 'components/Card';
import Gallery from 'components/Gallery';
import SectionMain from 'components/SectionMain';
import Pagination from 'components/Pagination';
import { Props, Photo } from 'types/Home';

import { getPhotos } from 'service/photos';

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

      <Pagination currentPage={props.page} totalResults={props.total_results} />
    </Base>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const responses = await getPhotos(Number(query.page) || 1);

  if (!responses) return { notFound: true };

  return {
    props: {
      ...responses
    }
  };
};
