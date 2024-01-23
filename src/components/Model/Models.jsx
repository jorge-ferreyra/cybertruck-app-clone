import { Link } from '../Link'
import { Car } from './Car'
import './Models.css'


const gif1 = 'https://1.bp.blogspot.com/-VEbTm0lKltY/YOHYmUkCkqI/AAAAAAAEVzI/z3UBNcUVZS4Zev1LHP3Pblig8YLAQCTWACLcBGAsYHQ/s600/ClassicLiquidAfricanclawedfrog-size_restricted.gif'
const gif2 = 'https://www.teslarati.com/wp-content/uploads/2021/10/cybertruck-teaser-2.gif'
const gif3 = 'https://www.gainsight.com/wp-content/uploads/2014/12/cybertruck.gif'

export function Models () {
  return(
    <section className='main-section'>
      <div className='main-card'>
        <Car gif={gif1} title='CYBERBEAST' />
        <Car gif={gif2} title='ALL WHEEL DRIVE' />
        <Car gif={gif3} title='REAR-WHEEL DRIVE' />
        <Link className='link' to='/'>Volver al Home</Link>
        {/*<img src="https://electrek.co/wp-content/uploads/sites/3/2023/11/2021484-00-A_1_2000-e1701390038718.png?w=1600" alt="" />*/}
      </div>
    </section>
  )
}