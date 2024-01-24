import './FourthSection.css'

export function FourthSection() {
  return (
    <section className="tesla-fourth-section">
      <div className='test-after'>
        <h1>Antes...</h1>
        <p>Hace más de 4 años que se hizo una prueba del Cybertruck sobre su resistencia ante impactos.
          Este video fue muy viral ya que la propuesta futurista se veía bastante débil de lo que se proponía y sin dudas
          fue una demostración de una falta de seguridad por parte de Tesla...
        </p>
        <iframe className='tesla-second-video' src="https://www.youtube.com/embed/udxR5rBq_Vg" allowFullScreen title="Cybertruck Prueba Antes"></iframe>
      </div>
      <div className='test-before'>
        <h1>Después!</h1>
        <p>Pero las cosas cambiaron meses antes de la salida al mercado, se demostró una comparativa de
          una camioneta genérica con el Cybertruck y los resultados son contundentes. Cuenta con una carrocería
          que emplea láminas de acero inoxidable con aleaciones de cromo-níquel no magnético. Esto hace que su diseño
          sea bastante robusto para pruebas de balas, el mismo video lo comprueba...
        </p>
        <iframe className='tesla-third-video' src="https://www.youtube.com/embed/teRRk-0KHus" allowFullScreen title="Cybertruck Prueba Después"></iframe>
      </div>
    </section>
  );
}