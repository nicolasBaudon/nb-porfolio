import { useParams } from "react-router-dom";

import styles from "./styles.module.scss";

const Work = () => {
  const { id } = useParams();

  return <div className={styles.container}>{id}</div>;
};

export default Work;
