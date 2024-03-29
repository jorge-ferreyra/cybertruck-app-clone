/* eslint-disable react/prop-types */
import cybertruckIce from '../img/cybertruck-main.jpg'
import teslaItemBlack from '../img/tesla-icon-black.png'
import teslaItemWhite from '../img/tesla-icon-white.png'
import instagramItemBlack from '../img/instagram-black.png'
import instagramItemWhite from '../img/instagram-white.png'
import xItemBlack from '../img/x-black.png'
import xItemWhite from '../img/x-white.png'

import { SocialMediaBox } from './SocialMediaBox.jsx'

import './FirstSection.css'
import './FirstSectionResponsiveES.css'

export function FirstSection ({ lang, paramRef }) {
  
  return(
    <section ref={paramRef} id='introduction' className='tesla-first-section'>
      <div className='cybertruck-main-container'>
        <img className='tesla-cybertruck-main' src={cybertruckIce} alt="Cybertruck image" />
      </div>

      <SocialMediaBox imgBlack={teslaItemBlack} imgWhite={teslaItemWhite} description='tesla' link='https://www.tesla.com/es_mx/cybertruck' />
      <SocialMediaBox imgBlack={instagramItemBlack} imgWhite={instagramItemWhite} description='instagram' link='https://www.instagram.com/teslamotors/' />
      <SocialMediaBox imgBlack={xItemBlack} imgWhite={xItemWhite} description='x' link='https://twitter.com/Tesla' />
      
      <div className='tesla-first-box'>
        <h1>CYBERTRUCK</h1>
        <p><span className='text-red-subtitle'>Tesla</span>{lang.firstSection.paragraph}</p>
      </div>
    </section>
  )
}
