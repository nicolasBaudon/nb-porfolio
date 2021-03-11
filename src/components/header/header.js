import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";
import Menu from "../menu/menu";

const Header = () => {
  return (
    <nav>
      <Grid container spacing={12}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <div className={styles.container}>
            <Link to="/" title="About">
              <img src="/assets/logo.svg" alt="" />
            </Link>
            <Menu />
          </div>
        </Grid>
      </Grid>
    </nav>
  );
};

export default Header;
