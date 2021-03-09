import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Nicolás Baudon © 2021</p>
      <a href="mailto:nicobaudon01@gmail.com" target="_blank" rel="noreferrer">
        nicobaudon01@gmail.com
      </a>
    </footer>
  );
};

export default Footer;
