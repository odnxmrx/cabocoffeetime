// import React from "react";
import styles from "./Header.module.css";
import cctLogo from '../../../assets/cabo-coffee-time-logo-full-no-bg.png'
import MyButton from "../../../shared/components/Button/MyButton";

function Header(props) {

  // console.log('props on header: ', props.handleClick);

  return (<>
    <section className={styles.heroCover} id="header">
      <div className={styles.heroLeftSpace}>
        <img src={cctLogo} alt="cabo coffee time logo"/>
      </div>
      <div className={styles.heroContent}>
        <h1>CABO COFFEE TIME</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

        <MyButton handleClick={props.handleClick} />
      </div>
    </section>
  </>);
}

export default Header;