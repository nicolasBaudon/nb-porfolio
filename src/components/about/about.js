import Grid from "@material-ui/core/Grid";

import styles from "./styles.module.scss";

const About = () => {
  return (
    <section id="about-container" className={styles.container}>
      <Grid container spacing={12}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <h2>About</h2>
          <img src="/assets/profile.png" alt="" />
          <article>
            <p>
              Hi! I am <strong>Nicolás</strong>. I’m a experienced FrontEnd
              developer with more than 3 years working with frontend and backend
              technologies.
            </p>
            <p>
              I consider myself a proactive and responsible person, with great
              leadership abilities and technical knowledge, as well as social
              skills, capable of working in a team in a productive and efficient
              way; in search of overcoming and able to face any challenge.
            </p>
            <p>
              I believe that technologies can be learned easily as well as other
              technical skills, and that is what differentiates me from the
              others, being able to take on any challenge no matter how much I
              know about it with the desire to learn about it and do the best
              possible.
            </p>
            <p>
              <strong>
                I think I prefer to define myself by the work and the challenges
                I want to do and take, and not by the work I’ve done.{" "}
              </strong>
            </p>
          </article>
          <a href="/CV Nicolas Baudon.pdf" download>
            Descargar CV
          </a>
          <a href="/Resume Nicolas Baudon.pdf" download>
            Download resume
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

export default About;
