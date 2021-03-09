import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";

import styles from "./styles.module.scss";

const Hero = ({ scroll }) => {
  return (
    <section className={styles.container}>
      <Grid container spacing={12}>
        <Grid item lg={12} md={12} sm={12} xs={12} className="center">
          <h1>
            Hello, I’m <span>Nicolás</span>, <br />
            <span>FronEnd</span> Software Engineer.
          </h1>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12} className="center">
          <div className={styles.slide} onClick={scroll}>
            <span>About</span>
            <img src="/assets/arrow.svg" alt="" />
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

Hero.propTypes = {
  scroll: PropTypes.func,
};

export default Hero;
