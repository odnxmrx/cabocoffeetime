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
      <header style={{position: "absolute", width:"100%", zIndex:9}}>
        <nav className={`${styles.navbar}`}>
          {/* logo */}
          <a href='#home' className={`${styles.logo}`}>Cabo Coffee Time </a>
          <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
            <li onClick={removeActive}>
              <a href='#home' className={`${styles.navLink}`}>Inicio</a>
            </li>
            <li onClick={removeActive}>
              <a href='#nosotros' className={`${styles.navLink}`}>Nosotros</a>
            </li>
            {/* <li onClick={removeActive}>
              <a href='#home' className={`${styles.navLink}`}>Menú</a>
            </li> */}
            <li onClick={removeActive}>
              <a href='#mapa' className={`${styles.navLink}`}>Ubicación</a>
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
