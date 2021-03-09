import styles from "./styles.module.scss";

const SocialsSidebar = () => {
  return (
    <aside className={styles.container}>
      <ul>
        <li>
          <a
            href="mailto:nicobaudon01@gmail.com"
            target="_blank"
            rel="noreferrer"
            title="Email me"
          >
            <img src="/assets/email.svg" alt="" />
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/nicolas-baudon"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn profile"
          >
            <img src="/assets/linkedin.svg" alt="" />
          </a>
        </li>
        <li>
          <a
            href="tel:+5492617018524"
            target="_blank"
            rel="noreferrer"
            title="Call me"
          >
            <img src="/assets/phone.svg" alt="" />
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default SocialsSidebar;
