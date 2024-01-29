import cybertruckIce from '../img/cybertruck-main.jpg'
import teslaItemBlack from '../img/tesla-icon-black.png'
import teslaItemWhite from '../img/tesla-icon-white.png'
import instagramItemBlack from '../img/instagram-black.png'
import instagramItemWhite from '../img/instagram-white.png'
import xItemBlack from '../img/x-black.png'
import xItemWhite from '../img/x-white.png'
import { SocialMediaBox } from './SocialMediaBox.jsx'
import './FirstSection.css'
import './FirstSectionResponsive.css'

export function FirstSection () {
  return(
    <article className='tesla-first-section'>
      <div className='cybertruck-main-container'>
        <img className='tesla-cybertruck-main' src={cybertruckIce} alt="Cybertruck image" />
      </div>

      <SocialMediaBox imgBlack={teslaItemBlack} imgWhite={teslaItemWhite} description='tesla' link='https://www.tesla.com/es_mx/cybertruck' />
      <SocialMediaBox imgBlack={instagramItemBlack} imgWhite={instagramItemWhite} description='instagram' link='https://www.instagram.com/teslamotors/' />
      <SocialMediaBox imgBlack={xItemBlack} imgWhite={xItemWhite} description='x' link='https://twitter.com/Tesla' />
      
      <div className='tesla-first-box'>
        <h1>CYBERTRUCK</h1>
        <p><span className='text-red-subtitle'>Tesla</span>, una de las empresas más influyentes en la industria de los vehículos automotores eléctricos, 
          presenta un camión que desafía a la mayoría de los modelos tradicionales. </p>
      </div>
    </article>
  )
}
