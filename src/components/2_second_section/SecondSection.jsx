/* eslint-disable react/prop-types */
import cybertruckOutside from '../img/cybertruck-outside.jpg'
import cyberbeastModel from '../img/cybertruck-models-cyberbeast.jpg'
import allWheelDriveModel from '../img/cybertruck-models-allwheeldrive.jpg'
import rearWheelDriveModel from '../img/cybertruck-models-rearwheeldrive.jpg'
import { CardModel } from './card.jsx'
import './SecondSection.css'
import './ResponsiveSecondSectionES.css'

export function SecondSection ({ lang, langLink, paramRef }) {
  return(
    <section ref={paramRef} className='tesla-second-section'>
      <div className='cybertruck-outside-container'>
        <img className='tesla-cybertruck-outside' src={cybertruckOutside} alt="A cybertruck in a camp" />
      </div>
      <article className='first-card'>
        <iframe className='tesla-first-video' src='https://www.youtube.com/embed/DsonSEllPmU' allowFullScreen></iframe>
        <div className='tesla-second-box'>
          <p>{lang.secondSection.paragraphPart1}<span className='text-red-p'>Tesla</span>{lang.secondSection.paragraphPart2}<br /><br />
            {lang.secondSection.paragraphPart3}</p>
        </div>
      </article>
      <div className='grid-models'>
        <article className='second-card'>
          <CardModel 
            img={cyberbeastModel} 
            description='Cyberbeast model' 
            title='CYBERBEAST' 
            price='99,990' 
            autonomy='525' 
            acceleration='2.7' 
            maxSpeed='209' 
            
            autonomyTitle={lang.perma.autonomy}
            speedName={lang.perma.speedName}
            accelerationTitle={lang.perma.acceleration}
            accelerationSpeed={lang.perma.accelerationSpeed}
            speedometer={lang.perma.speedometer}
            maxSpeedTitle={lang.perma.maxSpeed}
            details={lang.perma.details}
            langLink={langLink}
          />
          <CardModel 
            img={allWheelDriveModel} 
            description='All Wheel Drive model' 
            title='ALL WHEEL DRIVE' 
            price='79,990' 
            autonomy='547' 
            acceleration='4.3' 
            maxSpeed='180'
            
            autonomyTitle={lang.perma.autonomy}
            speedName={lang.perma.speedName}
            accelerationTitle={lang.perma.acceleration}
            accelerationSpeed={lang.perma.accelerationSpeed}
            speedometer={lang.perma.speedometer}
            maxSpeedTitle={lang.perma.maxSpeed}
            details={lang.perma.details}
            langLink={langLink}
          />
          <CardModel 
            img={rearWheelDriveModel} 
            description='Rear-Wheel Drive model' 
            title='REAR-WHEEL DRIVE' 
            price='60,990' 
            autonomy='402' 
            acceleration='6.7' 
            maxSpeed='180' 

            autonomyTitle={lang.perma.autonomy}
            speedName={lang.perma.speedName}
            accelerationTitle={lang.perma.acceleration}
            accelerationSpeed={lang.perma.accelerationSpeed}
            speedometer={lang.perma.speedometer}
            maxSpeedTitle={lang.perma.maxSpeed}
            details={lang.perma.details}
            langLink={langLink}
          />
        </article>
      </div>
    </section>
  )
}