import { ChildrenProps } from 'types/Base';

import * as S from './styles';

const Gallery = ({ children }: ChildrenProps) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};

export default Gallery;
