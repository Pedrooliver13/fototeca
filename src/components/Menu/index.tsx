import Logo from 'components/Logo';
import Button from 'components/Button';
import { Container } from 'styles/container';

import * as S from './styles';

const Menu = () => {
  return (
    <Container>
      <S.Wrapper>
        <Logo />

        <ul>
          <li>Home</li>
          <li>How it works</li>
          <li>Reviews</li>
          <li>FAQs</li>
        </ul>

        <Button href="/">Get started</Button>
      </S.Wrapper>
    </Container>
  );
};

export default Menu;
