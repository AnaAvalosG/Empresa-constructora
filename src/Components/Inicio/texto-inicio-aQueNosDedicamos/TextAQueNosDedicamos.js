import styles from "./TextoAQueNosDedicamos.module.css"


function TextoAQueNosDedicamos(){
    return(
        <>
      
        <div className={styles["aQueNosDedicamos"]}>
        <h2>¿A que nos dedicamos?</h2>
        <p >Somos una empresa de construccion de viviendas con mas de 5 años de trayectoria ubicados en la ciudad
          de Alicante, España y con mas de 1000 hogares contruidos.
          Buscamos hacer de tu hogar un lugar donde te encuentres comodo y se aproveche el mayor espacio
          posible.
          <br /> <br /> <br />
          Somos expertos en obra nueva, en renovar y acondicionar todo tipo de espacios.
        </p>
      </div>
      </>
    )
}

export default TextoAQueNosDedicamos;