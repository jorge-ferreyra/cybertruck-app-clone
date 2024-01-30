import './FooterSection.css'
import './ResponsiveFooterSectionES.css'

export function FooterSection () {
  return(
    <section className='tesla-footer-section'>
      <article className='divisions'>
        <div className='info-tesla'>
          <h1>Tesla</h1>
          <a href="https://www.tesla.com/es_mx" target='blank'>Página Oficial</a>
          <a href="https://www.tesla.com/es_MX/inventory/new/my" target='blank'>Vehículos Disponibles</a>
          <a href="https://shop.tesla.com/es_mx" target='blank'>Tienda</a>
          <a href="https://www.tesla.com/es_mx/events" target='blank'>Eventos</a>
          <a href="https://www.tesla.com/es_mx/about" target='blank'>Acerca De</a>
        </div>
        <div className='info-cybertruck'>
          <h1>Cybertruck</h1>
          <a href="https://www.tesla.com/es_mx/cybertruck" target='blank'>Página Oficial</a>
          <a href="https://www.tesla.com/es_mx/cybertruck/design#payment" target='blank'>Ordenar</a>
          <a href="https://www.tesla.com/es_mx/contact" target='blank'>Contacto</a>
          <a href="https://www.tesla.com/es_mx/legal" target='blank'>Términos Legales y de Privacidad</a>
        </div>
        <div className='info-profile'>
          <h1>Página hecha por Jorge Ferreyra</h1>
          <h2>Redes Sociales</h2>
          <a href="https://www.linkedin.com/in/jorge-ferreyra-" target='blank'>LinkedIn</a>
          <a href="https://github.com/jorge-ferreyra" target='blank'>GitHub</a>
        </div>
      </article>
    </section>
  )
}