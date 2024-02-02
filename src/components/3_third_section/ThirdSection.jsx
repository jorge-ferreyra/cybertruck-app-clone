/* eslint-disable react/prop-types */
import cybertruckCamp from '../img/cybertruck-camp.jpg'
import cybertruckCharge from '../img/cybertruck-charge.jpg'
import { Formulas } from './Formulas.jsx'
import './ThirdSection.css'
import './ResponsiveThirdSectionES.css'

export function ThirdSection ({ lang, paramRef }) {
  return(
    <section ref={paramRef} className='tesla-third-section'>
      <div className='cybertruck-camp-container'>
        <img className='tesla-cybertruck-camp' src={cybertruckCamp} alt="Cybertruck in the camp" />
      </div>
      <div className='third-card'>
        <div className='cybertruck-charge-container' >
          <img className='tesla-cybertruck-charge' src={cybertruckCharge} alt="Cybertruck charging" />
        </div>
        <div className='third-box'>
          <h1>{lang.thirdSection.box.title}</h1>
          <p>
            {lang.thirdSection.box.paragraphPart1}<span>Tesla Model S</span>{lang.thirdSection.box.paragraphPart2}
          </p>
        </div>
      </div>
      <div className='fourth-box'>
        <Formulas />
      </div>
    </section>
  )
}