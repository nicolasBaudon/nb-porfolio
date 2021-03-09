import Grid from "@material-ui/core/Grid";

import styles from "./styles.module.scss";

const Contact = () => {
  return (
    <section className={styles.container}>
      <Grid container spacing={12}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <h2>About</h2>
          <article>
            <p>
              I’m always interested in hear new opportunities, to work with
              companies / individuals, and collaborate to reach the best product
              possible aplying the best solution for every case.
            </p>
            <p>Feel free to reach me through any resource on your rigth, or:</p>
          </article>
          <a
            href="mailto:nicobaudon01@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Send email
          </a>
        </Grid>
      </Grid>
      <img
        src="/assets/sections-decoration.png"
        alt=""
        className={styles.section_decoration}
      />
    </section>
  );
};

export default Contact;
