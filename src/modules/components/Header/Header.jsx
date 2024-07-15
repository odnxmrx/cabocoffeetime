// import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (<>
    <section className={styles.heroCover}>
      <div className={styles.heroContent}>
        <h1>its coffee olock</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button>Learn More</button>
      </div>
    </section>
  </>);
}

export default Header;