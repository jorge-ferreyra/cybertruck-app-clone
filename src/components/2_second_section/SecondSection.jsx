import cybertruckOutside from '../img/cybertruck-outside.jpg'
import cyberbeastModel from '../img/cybertruck-models-cyberbeast.jpg'
import allWheelDriveModel from '../img/cybertruck-models-allwheeldrive.jpg'
import rearWheelDriveModel from '../img/cybertruck-models-rearwheeldrive.jpg'
import { CardModel } from './card.jsx'
import './SecondSection.css'
import './ResponsiveSecondSectionES.css'

export function SecondSection () {
  return(
    <section className='tesla-second-section'>
      <div className='cybertruck-outside-container'>
        <img className='tesla-cybertruck-outside' src={cybertruckOutside} alt="A cybertruck in a camp" />
      </div>
      <article className='first-card'>
        <iframe className='tesla-first-video' src='https://www.youtube.com/embed/DsonSEllPmU' allowFullScreen></iframe>
        <div className='tesla-second-box'>
          <p>En noviembre de 2019, <span className='text-red-p'>Tesla</span> presento esta camioneta pickup eléctrica con un diseño unico y futurista. 
            Cuenta con una carroceria del tipo exoesqueleto compuesta por paneles de acero inoxidable de hasta 1.8 mm que soportan disparos subsónicos de balas de 9 mm.
            Con tan solo 6 días de su presentación ya tenía 250.000 reservas. En octubre de 2023 cuenta con más de un millón de ellas y se aproxima una capacidad de fabricar 125.000 en 2024 y 250.000 en 2025.<br /><br />
            Las entregas empezaron en diciembre de 2023 y se ofrecieron 3 versiones: </p>
        </div>
      </article>
      <div className='grid-models'>
        <article className='second-card'>
          <CardModel img={cyberbeastModel} description='Cyberbeast model' title='CYBERBEAST' price='99,990' autonomy='525' acceleration='2.7' maxSpeed='209' />
          <CardModel img={allWheelDriveModel} description='All Wheel Drive model' title='ALL WHEEL DRIVE' price='79,990' autonomy='547' acceleration='4.3' maxSpeed='180' />
          <CardModel img={rearWheelDriveModel} description='Rear-Wheel Drive model' title='REAR-WHEEL DRIVE' price='60,990' autonomy='402' acceleration='6.7' maxSpeed='180' />
        </article>
      </div>
    </section>
  )
}