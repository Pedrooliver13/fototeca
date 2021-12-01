import * as S from './styles';

type Props = {
  children: React.ReactNode;
};

const Gallery = ({ children }: Props) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};

export default Gallery;