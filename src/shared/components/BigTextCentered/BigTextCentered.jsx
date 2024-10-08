import styles from './BigTextCentered.module.css'

function BigTextCentered() {

  return (
    <section className={styles.sectionCover} id='nosotros'>
      <div className={styles.centeredItems}>
        <h3>Bienvenidos a Nuestra Cafetería en</h3>
        <h2>CABO SAN LUCAS</h2>
        <p>Nuestro acogedor espacio invita a la conversación, la creatividad y la conexión. <br /> Ven y descubre el sabor auténtico del café, acompañado de la calidez y hospitalidad que solo Cabo puede ofrecer. <br /> ¡Te esperamos para compartir momentos inolvidables!</p>
      </div>
    </section>
  )
}

export default BigTextCentered;