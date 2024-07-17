import styles from './Footer.module.css';

export default function Footer() {

  return (
    <footer className={styles.myFooter}>
      <div className={styles.leftContainer}>
        <p>Síguenos en <em>Redes Sociales</em>:</p>
        <a href="https://www.instagram.com/cabo_coffee_time/" target='_blank'>
          <i className='uil uil-instagram'></i>Instagram
        </a>
        <br />
        <a href="https://www.facebook.com/profile.php?id=61561255064586" target='_blank'>
        <i className='uil uil-facebook'></i>Facebook
        </a>
        <br />
        <p>
          <a href="https://github.com/odnxmrx" target='_blank'>
            Developed by Armando Gama @ 2024
          </a>
        </p>
      </div>
      <div className={styles.rightContainer}>
        <h3>Cabo Coffee Time </h3><br />
        <p>Horarios: 06:00 AM - 1:00 PM</p>
        <p>Ubicación: Blvrd Cabo Baja, Col. Acuario, 23456 Cabo San Lucas, B.C.S.</p>
        <p>¡Te esperamos!</p>
      </div>
    </footer>
  )
}