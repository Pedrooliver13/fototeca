import { useState } from 'react';
import Image from 'next/image';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { Props } from 'types/Card';

import * as S from './styles';
import * as C from 'styles/constants';

const Card = (props: Props) => {
  const [loading, setLoading] = useState(true);

  return (
    <S.Wrapper>
      {loading && (
        <Skeleton
          height={349}
          className="skeleton"
          baseColor={C.COLOR_GRAY_LIGHT}
        />
      )}

      <S.Card loading={loading.toString()}>
        <Image
          loading="lazy"
          src={props.src}
          alt="Imagem de um card"
          width={359}
          height={359}
          objectFit="cover"
          onLoadingComplete={() => setLoading(false)}
        />
      </S.Card>
    </S.Wrapper>
  );
};

export default Card;
