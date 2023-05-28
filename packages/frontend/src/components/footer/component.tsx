import { Container } from 'components/primitives';
import classes from './styles.module.css';

export const Footer = () => (
  <footer className={classes.footer}>
    <Container>
      <div className={classes.footer__content}>
        <span>{'© 2023 DA. All rights reserved... but not sure.'}</span>
      </div>
    </Container>
  </footer>
);
