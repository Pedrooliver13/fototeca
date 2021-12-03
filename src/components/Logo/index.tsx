import Link from 'next/link';

import * as S from './styles';

const Logo = () => {
  return (
    <S.Wrapper>
      <Link href="/">
        <img src="img/logo.svg" alt="Logo marca" />
      </Link>
    </S.Wrapper>
  );
};

export default Logo;
