import { useState } from 'react';
import Image from 'next/image';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import * as S from './styles';

interface CardProps {
  src: string;
}

const Card = (props: CardProps) => {
  const [loading, setLoading] = useState(true);

  return (
    <S.Wrapper>
      <div
        style={
          loading ? { opacity: 0, height: 0, width: 0 } : { display: 'block' }
        }
      >
        <Image
          loading="lazy"
          src={props.src}
          alt="Imagem de um card"
          width={369}
          height={369}
          objectFit="cover"
          onLoad={() => setLoading(false)}
        />
      </div>

      {loading && <Skeleton height={369} width={369} />}
    </S.Wrapper>
  );
};

export default Card;
