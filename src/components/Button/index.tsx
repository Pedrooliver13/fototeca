import { LinkProps } from 'next/link';

import * as S from './styles';

type ButtonProps = {
  href: string;
  secondary?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
};

type Props = ButtonProps & LinkProps;

const Button = ({ children, secondary, disabled, href }: Props) => {
  return (
    <S.Wrapper href={href} secondary={secondary} disabled={disabled}>
      {children}
    </S.Wrapper>
  );
};

export default Button;
