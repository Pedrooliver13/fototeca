import { useState } from 'react';
import Image from 'next/image';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import * as S from './styles';

interface CardProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
}

const Card = (props: CardProps) => {
  const [loading, setLoading] = useState(true);

  return (
    <S.Wrapper>
      {loading && <Skeleton height={369} width={369} />}

      <S.Card loading={loading ? 'isLoading' : ''}>
        <Image
          loading="lazy"
          src={props.src}
          alt="Imagem de um card"
          width={369}
          height={369}
          objectFit="cover"
          onLoadingComplete={() => setLoading(false)}
        />
      </S.Card>
    </S.Wrapper>
  );
};

export default Card;
