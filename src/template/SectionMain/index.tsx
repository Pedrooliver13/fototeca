import Button from 'components/Button';

import * as S from './styles';

type Props = {
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonHref?: string;
};

const SectionMain = ({
  title,
  subtitle,
  buttonText,
  buttonHref = '/'
}: Props) => {
  return (
    <S.Wrapper>
      <div className="content">
        <div className="title">
          <h1>{title}</h1>
          <span>{subtitle}</span>
        </div>

        <div className="buttons">
          <Button href={buttonHref} secondary>
            {buttonText}
          </Button>
        </div>
      </div>
    </S.Wrapper>
  );
};

export default SectionMain;
