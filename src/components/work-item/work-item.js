import PropTypes from "prop-types";

import styles from "./styles.module.scss";

const WorkItem = ({ item }) => {
  return (
    <div className={styles.container}>
      <h3>{item.name}</h3>
      <span>{item.description}</span>
    </div>
  );
};

WorkItem.propTypes = {
  item: PropTypes.object,
};

export default WorkItem;
