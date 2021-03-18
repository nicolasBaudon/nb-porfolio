import Grid from "@material-ui/core/Grid";

import styles from "./styles.module.scss";
import WorkItem from "../../components/work-item/work-item";

const works = [
  {
    id: "spark",
    name: "Spark Digital",
    description: "Consulting Job - Present",
  },
  { id: "almundo", name: "Almundo.com", description: "Product Job" },
  { id: "wecoach", name: "WeCoach", description: "Freelance React App" },
  {
    id: "e-carta-lista",
    name: "E-carta/E-lista",
    description: "Freelance React App",
  },
  { id: "accessgo", name: "AccessGo", description: "CakePHP App" },
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
                  <WorkItem item={item} />
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
