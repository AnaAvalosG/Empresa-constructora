//daremos la bienvenida al usuario e incluiremos el
//contenido que consideremos oportuno y que pueda aportar un valor añadido.
import styles from "./inicio.module.css";


const Inicio = () => {
    return (
      <>
        <div className={styles["div-inicio-titulo"]}>
          <br></br>
            <h1 className={styles["h1-titulo"]}>Reco construcciones</h1> 
           <h2 className={styles["h2-titulo"]}>Always in process</h2>
        </div>
        
        <div>
          <h2 >¿A que nos dedicamos?</h2>
          <p>Somos una empresa de construccion de viviendas con mas de 5 años de trayectoria ubicados en la ciudad 
            de Alicante, España y con mas de 1000 hogares contruidos.
            Buscamos hacer de tu hogar un lugar donde te encuentres comodo y se aproveche el mayor espacio 
            posible.  
            <br /> <br /> <br />
            Somos expertos en obra nueva, en renovar y acondicionar todo tipo de espacios.
          </p>
        </div>

        <div>
<h2>Proyectos realizados</h2>
        </div>
        </>
    );
  }

  export default Inicio;