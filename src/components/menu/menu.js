import { useState, forwardRef } from "react";

import { Spiral as Hamburger } from "hamburger-react";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const Menu = () => {
  const [show, setShow] = useState(false);

  const handleVisibilityModal = () => {
    setShow(!show);
  };

  return (
    <>
      <Dialog
        open={show}
        onClose={handleVisibilityModal}
        fullScreen={true}
        TransitionComponent={Transition}
        className="menu-modal"
      >
        <nav className={styles.nav}>
          <ul className={styles.nav_item_container}>
            <li className={styles.nav_item} onClick={handleVisibilityModal}>
              <Link to="/">About</Link>
            </li>
            <li className={styles.nav_item} onClick={handleVisibilityModal}>
              <Link to="/works">Work</Link>
            </li>
            <li className={styles.nav_item} onClick={handleVisibilityModal}>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </Dialog>
      <div onClick={handleVisibilityModal}>
        <Hamburger toggled={show} toggle={handleVisibilityModal} />
      </div>
    </>
  );
};

export default Menu;
