import React, { useEffect } from "react";
import L from "leaflet";
import styles from "./Mapa.module.css";

function Mapa() {

  useEffect(() => {
    // Verifica si ya existe un mapa y elimínalo
    if (L.DomUtil.get('mapa')._leaflet_id != null) {

      L.DomUtil.get('mapa')._leaflet_id = null;

    }

    const mapa = L.map('mapa').setView([42.0036607, -4.5269248], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

      attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'

    }).addTo(mapa);

    L.marker([42.0036607, -4.5269248]).addTo(mapa);

  }, []);

  return (

    <div>

      <div id="mapa" className={styles['mapa']} />

    </div>
  );
}

export default Mapa;
