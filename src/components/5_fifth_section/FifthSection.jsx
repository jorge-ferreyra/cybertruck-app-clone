/* eslint-disable react/prop-types */
import './FifthSection.css'
import './ResponsiveFifthSectionES.css'
import cybertruckInside from '../img/cybertruck-inside.jpg'
import cybertruckInside2 from '../img/cybertruck-inside-2.jpg'
import cybertruckInside3 from '../img/cybertruck-inside-3.jpg'

export function FifthSection ({ lang }) {
  return(
    <section className='tesla-fifth-section'>
      <div className='cybertruck-inside-container'>
        <img src={cybertruckInside} alt="An image of the inside" />
      </div>
      <article className='fifth-card'>
        <div className='cybertruck-inside2-container'>
          <img src={cybertruckInside2} alt="An second image of the inside" />
        </div>
        <div className='fifth-box'>
          <h1>{lang.fifthSection.firstBox.title}</h1>
          <p>{lang.fifthSection.firstBox.paragraphPart1}<br /><br />
            {lang.fifthSection.firstBox.paragraphPart2}<br /><br />
            {lang.fifthSection.firstBox.paragraphPart3}
          </p>
        </div>
      </article>
      <article className='sixth-card'>
        <div className='cybertruck-inside3-container'>
          <img src={cybertruckInside3} alt="" />
        </div>
        <div className='sixth-box'>
          <h1>{lang.fifthSection.lastBox.title}</h1>
          <p>{lang.fifthSection.lastBox.paragraphPart1}<br /><br />
            {lang.fifthSection.lastBox.paragraphPart2}<br /><br />
            {lang.fifthSection.lastBox.paragraphPart3}
          </p>
        </div>
      </article>
    </section>
  )
}