import { Props } from 'types/Button';

import * as S from './styles';

const Button = ({ children, secondary, disabled, href }: Props) => {
  return (
    <S.Wrapper href={href} secondary={secondary} disabled={disabled}>
      {children}
    </S.Wrapper>
  );
};

export default Button;
