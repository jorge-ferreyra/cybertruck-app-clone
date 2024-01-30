import cybertruckCamp from '../img/cybertruck-camp.jpg'
import cybertruckCharge from '../img/cybertruck-charge.jpg'
import { Formulas } from './Formulas.jsx'
import './ThirdSection.css'
import './ResponsiveThirdSectionES.css'

export function ThirdSection () {
  return(
    <section className='tesla-third-section'>
      <div className='cybertruck-camp-container'>
        <img className='tesla-cybertruck-camp' src={cybertruckCamp} alt="Cybertruck in the camp" />
      </div>
      <div className='third-card'>
        <div className='cybertruck-charge-container' >
          <img className='tesla-cybertruck-charge' src={cybertruckCharge} alt="Cybertruck charging" />
        </div>
        <div className='third-box'>
          <h1>Sistema eléctrico de 48V</h1>
          <p>
            El cambio de arquitectura a 48 Voltios implica el uso del 25% del cobre necesitado para un vehiculo de 12 Voltios.
            Si para el <span>Tesla Model S</span> usaba 82 kilogramos en 1600 metros de cables, se necesitaría 1.820.000 toneladas de cobre para producir 20 millones de vehículos para el 2030.
            Con la siguiente formula diseñada en Tesla para diseñar los vehículos con esta arquitectura, se aproxima el ahorro de 1.3 millones de toneladas de cobre para fabricar todos sus vehículos.
          </p>
        </div>
      </div>
      <div className='fourth-box'>
        <Formulas />
      </div>
    </section>
  )
}