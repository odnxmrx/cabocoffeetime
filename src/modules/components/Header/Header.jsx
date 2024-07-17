// import React from "react";
import styles from "./Header.module.css";
import cctLogo from '../../../assets/cabo-coffee-time-logo-full-no-bg.png'
import MyButton from "../../../shared/components/Button/MyButton";

function Header() {

  return (<>
    <section className={styles.heroCover} id="header">
      <div className={styles.heroLeftSpace}>
        <img src={cctLogo} alt="cabo coffee time logo"/>
      </div>
      <div className={styles.heroContent}>
        <h1>CABO COFFEE TIME</h1>
        <p>Donde cada taza de café es una obra de arte, elaborada con granos seleccionados y tostados con pasión.</p>

        <MyButton />
      </div>
    </section>
  </>);
}

export default Header;