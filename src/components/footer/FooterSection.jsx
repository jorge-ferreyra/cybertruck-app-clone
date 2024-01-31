/* eslint-disable react/prop-types */
import './FooterSection.css'
import './ResponsiveFooterSectionES.css'

export function FooterSection ({ lang }) {
  return(
    <section className='tesla-footer-section'>
      <article className='divisions'>
        <div className='info-tesla'>
          <h1>Tesla</h1>
          <a href="https://www.tesla.com/es_mx" target='blank'>{lang.footerSection.page}</a>
          <a href="https://www.tesla.com/es_MX/inventory/new/my" target='blank'>{lang.footerSection.vehicles}</a>
          <a href="https://shop.tesla.com/es_mx" target='blank'>{lang.footerSection.store}</a>
          <a href="https://www.tesla.com/es_mx/events" target='blank'>{lang.footerSection.events}</a>
          <a href="https://www.tesla.com/es_mx/about" target='blank'>{lang.footerSection.about}</a>
        </div>
        <div className='info-cybertruck'>
          <h1>Cybertruck</h1>
          <a href="https://www.tesla.com/es_mx/cybertruck" target='blank'>{lang.footerSection.page}</a>
          <a href="https://www.tesla.com/es_mx/cybertruck/design#payment" target='blank'>{lang.footerSection.order}</a>
          <a href="https://www.tesla.com/es_mx/contact" target='blank'>{lang.footerSection.contact}</a>
          <a href="https://www.tesla.com/es_mx/legal" target='blank'>{lang.footerSection.terms}</a>
        </div>
        <div className='info-profile'>
          <h1>{lang.footerSection.profile.title}</h1>
          <h2>{lang.footerSection.profile.socialNet}</h2>
          <a href="https://www.linkedin.com/in/jorge-ferreyra-" target='blank'>LinkedIn</a>
          <a href="https://github.com/jorge-ferreyra" target='blank'>GitHub</a>
        </div>
      </article>
    </section>
  )
}