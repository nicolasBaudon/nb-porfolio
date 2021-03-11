import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

const WorkItem = ({ item }) => {
  return (
    <Link to="/works">
      <div className={styles.container}>
        <h3>{item.name}</h3>
        <span>{item.description}</span>
      </div>
    </Link>
  );
};

WorkItem.propTypes = {
  item: PropTypes.object,
};

export default WorkItem;
