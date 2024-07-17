import styles from './MyButton.module.css';
// import { useNavigate } from 'react-router-dom';

function MyButton(props){


  console.log('ques props en myButton?: ', props)


  return(
    <button className={styles.myButton} onClick={() => props.handleClick()}  >
      <span>Descarga nuestro menú aquí </span>
    </button>
  )
}

export default MyButton;