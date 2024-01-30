import { Link } from '../Link'
import { Car } from './Car'
import './Models.css'
import './ResponsiveModelsES.css'

const gif1 = 'https://1.bp.blogspot.com/-VEbTm0lKltY/YOHYmUkCkqI/AAAAAAAEVzI/z3UBNcUVZS4Zev1LHP3Pblig8YLAQCTWACLcBGAsYHQ/s600/ClassicLiquidAfricanclawedfrog-size_restricted.gif'
const gif2 = 'https://www.teslarati.com/wp-content/uploads/2021/10/cybertruck-teaser-2.gif'
const gif3 = 'https://www.gainsight.com/wp-content/uploads/2014/12/cybertruck.gif'

export function Models () {
  return(
    <section className='main-section'>
      <div className='main-card'>
        <Car gif={gif1} title='CYBERBEAST' range='320 MILES' acceleration='2.6 SEC 0-60 MPH' topSpeed='130 MPH' towing='11,000 LBS' weight='6,843 LBS' />
        <Car gif={gif2} title='ALL WHEEL DRIVE' range='340 MILES' acceleration='4.1 SEC 0-60 MPH' topSpeed='112 MPH' towing='11,000 LBS' weight='6,603 LBS' />
        <Car gif={gif3} title='REAR-WHEEL DRIVE' range='250 MILES' acceleration='6.5 SEC 0-60 MPH ' topSpeed='112 MPH' towing='7,500 LBS' />
        <div className='link-box'>
          <Link className='link' to='/'>Volver al Home</Link>
        </div>
      </div>
    </section>
  )
}