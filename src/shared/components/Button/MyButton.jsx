import styles from './MyButton.module.css';
import menuImage from "../../../assets/menu-cct.jpeg";

function MyButton(){

  return(
    <a href={menuImage} alt="Menu image">

    <button className={styles.myButton} >
      <span>Descarga nuestro menú aquí </span>
    </button>
    </a>
  )
}

export default MyButton;