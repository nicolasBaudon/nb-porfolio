import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";
import WorkItem from "../../components/work-item/work-item";

const works = [
  { name: "Spark Digital", description: "Consulting Job - Present" },
  { name: "Almundo.com", description: "Product Job" },
  { name: "WeCoach", description: "Freelance React App" },
  { name: "E-carta/E-lista", description: "Freelance React App" },
  { name: "AccessGo", description: "CakePHP App" },
];

const Works = () => {
  return (
    <section className={styles.container}>
      <Grid container spacing={12}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <h2>Works</h2>
          <nav>
            <ul>
              {works.map((item, i) => (
                <li key={i}>
                  <Link to="/contact">
                    <WorkItem item={item} />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Grid>
      </Grid>
    </section>
  );
};

export default Works;
