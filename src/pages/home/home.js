import Grid from "@material-ui/core/Grid";

import styles from "./styles.module.scss";

function Home() {
  return (
    <main>
      <section className={styles.hero}>
        <Grid container spacing={12}>
          <Grid item lg={12} md={12} sm={12} xs={12} className="center">
            <h1>
              Hello, I’m <span>Nicolás</span>, <br />
              <span>FronEnd</span> Software Engineer.
            </h1>
          </Grid>
        </Grid>
      </section>
      <section className={styles.about}>
        <Grid container spacing={12}></Grid>
      </section>
    </main>
  );
}

export default Home;
