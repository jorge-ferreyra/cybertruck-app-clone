/* eslint-disable react/prop-types */
import { Link } from '../Link'
import { Car } from './Car'
import { modelsTech } from '../../consts'
import './Models.css'
import './ResponsiveModelsES.css'

const gif1 = 'https://1.bp.blogspot.com/-VEbTm0lKltY/YOHYmUkCkqI/AAAAAAAEVzI/z3UBNcUVZS4Zev1LHP3Pblig8YLAQCTWACLcBGAsYHQ/s600/ClassicLiquidAfricanclawedfrog-size_restricted.gif'
const gif2 = 'https://www.teslarati.com/wp-content/uploads/2021/10/cybertruck-teaser-2.gif'
const gif3 = 'https://www.gainsight.com/wp-content/uploads/2014/12/cybertruck.gif'

const useModelsTech = (lang) => {
  return modelsTech[lang] || modelsTech.es
}

export function Models ({ routeParams }) {
  const modelsTech = useModelsTech(routeParams.lang ?? 'es')
  return(
    <section className='main-section'>
      <div className='main-card'>
        <Car 
          gif={gif1} 
          title={modelsTech.models.specify.cyberBeast.title} 
          range={modelsTech.models.specify.cyberBeast.autonomy} 
          acceleration={modelsTech.models.specify.cyberBeast.acceleration} 
          topSpeed={modelsTech.models.specify.cyberBeast.maxSpeed}
          towing={modelsTech.models.specify.cyberBeast.towing} 
          weight={modelsTech.models.specify.cyberBeast.weight}
          cargo={modelsTech.models.titles.cargoValue}
          charge={modelsTech.models.specify.cyberBeast.charge}

          speedometer={modelsTech.models.speedometer}
          speedName={modelsTech.models.speedName}
          weightName={modelsTech.models.weightName}
          accelerationSpeed={modelsTech.models.accelerationSpeed}

          titlePerformance={modelsTech.models.titles.performance}
          subtitleAutonomy={modelsTech.models.titles.autonomy}
          subtitleAcceleration={modelsTech.models.titles.acceleration}
          subtitleMaxSpeed={modelsTech.models.titles.maxSpeed}
          subtitleTowing={modelsTech.models.titles.towing}

          titleDimension={modelsTech.models.titles.dimensions}
          subtitleWeight={modelsTech.models.titles.weight}
          subtitleCargo={modelsTech.models.titles.cargo}
          subtitleWheels={modelsTech.models.titles.wheels}
          subtitleSeating={modelsTech.models.titles.seating}
          subtitleSeatingDes={modelsTech.models.titles.seatingDes}

          titleCharging={modelsTech.models.titles.charging.title}
          subtitleChargeSpeed={modelsTech.models.titles.charging.chargeSpeed}
          subtitleSuperCharge={modelsTech.models.titles.charging.superCharge}
          subtitleParagraphSpeed={modelsTech.models.titles.charging.paragraphSpeed}
          subtitleParagraphSuper={modelsTech.models.titles.charging.paragraphSuper}
        />
        <Car 
          gif={gif2} 
          title={modelsTech.models.specify.allWheelDrive.title} 
          range={modelsTech.models.specify.allWheelDrive.autonomy} 
          acceleration={modelsTech.models.specify.allWheelDrive.acceleration} 
          topSpeed={modelsTech.models.specify.allWheelDrive.maxSpeed}
          towing={modelsTech.models.specify.allWheelDrive.towing} 
          weight={modelsTech.models.specify.allWheelDrive.weight}
          cargo={modelsTech.models.titles.cargoValue}
          charge={modelsTech.models.specify.allWheelDrive.charge}

          speedometer={modelsTech.models.speedometer}
          speedName={modelsTech.models.speedName}
          weightName={modelsTech.models.weightName}
          accelerationSpeed={modelsTech.models.accelerationSpeed}

          titlePerformance={modelsTech.models.titles.performance}
          subtitleAutonomy={modelsTech.models.titles.autonomy}
          subtitleAcceleration={modelsTech.models.titles.acceleration}
          subtitleMaxSpeed={modelsTech.models.titles.maxSpeed}
          subtitleTowing={modelsTech.models.titles.towing}

          titleDimension={modelsTech.models.titles.dimensions}
          subtitleWeight={modelsTech.models.titles.weight}
          subtitleCargo={modelsTech.models.titles.cargo}
          subtitleWheels={modelsTech.models.titles.wheels}
          subtitleSeating={modelsTech.models.titles.seating}
          subtitleSeatingDes={modelsTech.models.titles.seatingDes}

          titleCharging={modelsTech.models.titles.charging.title}
          subtitleChargeSpeed={modelsTech.models.titles.charging.chargeSpeed}
          subtitleSuperCharge={modelsTech.models.titles.charging.superCharge}
          subtitleParagraphSpeed={modelsTech.models.titles.charging.paragraphSpeed}
          subtitleParagraphSuper={modelsTech.models.titles.charging.paragraphSuper}
        />
        <Car 
          gif={gif3} 
          title={modelsTech.models.specify.rearWheelDrive.title} 
          range={modelsTech.models.specify.rearWheelDrive.autonomy} 
          acceleration={modelsTech.models.specify.rearWheelDrive.acceleration} 
          topSpeed={modelsTech.models.specify.rearWheelDrive.maxSpeed}
          towing={modelsTech.models.specify.rearWheelDrive.towing} 
          soon={modelsTech.models.soon}

          speedometer={modelsTech.models.speedometer}
          speedName={modelsTech.models.speedName}
          weightName={modelsTech.models.weightName}
          accelerationSpeed={modelsTech.models.accelerationSpeed}

          titlePerformance={modelsTech.models.titles.performance}
          subtitleAutonomy={modelsTech.models.titles.autonomy}
          subtitleAcceleration={modelsTech.models.titles.acceleration}
          subtitleMaxSpeed={modelsTech.models.titles.maxSpeed}
          subtitleTowing={modelsTech.models.titles.towing}
        />
        <div className='link-box'>
          <Link className='link' to='/'>Volver al Home</Link>
        </div>
      </div>
    </section>
  )
}