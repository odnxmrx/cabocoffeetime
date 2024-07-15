import { useState } from 'react'
import styles from './NavBar.module.css'

function Navbar() {
  // adding the states
  const [isActive, setIsActive] = useState(false)
  // add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive)
  }
  // clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false)
  }

  return (
      <header>
        <nav className={`${styles.navbar}`}>
          {/* logo */}
          <a href='#home' className={`${styles.logo}`}>CCT. </a>
          <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
            <li onClick={removeActive}>
              <a href='#home' className={`${styles.navLink}`}>Inicio</a>
            </li>
            <li onClick={removeActive}>
              <a href='#home' className={`${styles.navLink}`}>Nosotros</a>
            </li>
            <li onClick={removeActive}>
              <a href='#home' className={`${styles.navLink}`}>Menú</a>
            </li>
            <li onClick={removeActive}>
              <a href='#home' className={`${styles.navLink}`}>Ubicación</a>
            </li>
          </ul>
          <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`} onClick={toggleActiveClass}>
            <span className={`${styles.bar}`} />
            <span className={`${styles.bar}`} />
            <span className={`${styles.bar}`} />
          </div>
        </nav>
      </header>
  )
}
export default Navbar;
