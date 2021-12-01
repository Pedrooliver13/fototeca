import { Container } from 'styles/container';
import * as S from './styles';

const Footer = () => {
  return (
    <S.Wrapper>
      <Container>
        <div className="infos">
          <ul>
            <li>Why Us</li>
            <li>Channel</li>
            <li>Engagement</li>
            <li>Scale</li>
            <li>Watch Demo</li>
          </ul>
          <ul>
            <li>Product</li>
            <li>Features</li>
            <li>Integrations</li>
            <li>Enterprise</li>
            <li>Solutions</li>
          </ul>
          <ul>
            <li>Resources</li>
            <li>Partners</li>
            <li>Developers</li>
            <li>Apps</li>
            <li>Blogs</li>
          </ul>
          <ul>
            <li>Company</li>
            <li>Why Us</li>
            <li>Why Us</li>
            <li>Why Us</li>
          </ul>
          <ul>
            <li>Pricing</li>
            <li>Why Us</li>
            <li>Why Us</li>
          </ul>
          <ul>
            <li>Contact</li>
            <li>+214556905345</li>
            <li>something@email.com</li>
            <li>567, Kansas, San Francisco, USA</li>
          </ul>
        </div>

        <div className="copy">
          <p>
            All rights Reserved &copy; <span>Your Company, 2021</span>
          </p>
          <p>
            Made with <span className="copy_heart">❤</span> by Pedro Oliveira
          </p>
        </div>
      </Container>
    </S.Wrapper>
  );
};

export default Footer;
