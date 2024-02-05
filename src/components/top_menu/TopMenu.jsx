/* eslint-disable react/prop-types */
import { useLanguage } from '../../hooks/useLanguage';
import teslaLogoBlack from '../img/tesla-logo-black.png'
import teslaLogoRed from '../img/tesla-logo-red.png'
import './TopMenu.css'

function handleScroll (param) {
  const offset = 80;
  const targetElement = param.current;

  const targetPosition = targetElement.offsetTop - offset;
  window.scrollTo({ top: targetPosition, behavior: 'smooth' });
}

const esFlag = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/200px-Bandera_de_Espa%C3%B1a.svg.png'
const enFlag = 'https://media.istockphoto.com/id/479199262/es/foto/encuadre-completo-imagen-de-inglaterra-bandera.jpg?s=612x612&w=0&k=20&c=SwMP7VR64pbeG-fGCQSbP3e1jYLV0w-79bNyDG5z5Cc='

export function TopMenu ({ introRef, presentationRef, electricRef, outsideRef, insideRef, contactRef  }) {
  const { handleLangChange } = useLanguage()
  return(
    <>
      <div className='progress-bar'></div>
      <header className='tesla-top-menu'>
        <img className='tesla-logo tesla-logo-black' src={teslaLogoBlack} alt="Tesla logo" />
        <img className='tesla-logo tesla-logo-red' src={teslaLogoRed} alt="Tesla logo" />
        <div className='sections'>
          <button onClick={() => handleScroll(introRef)} >Intro</button>
          <button onClick={() => handleScroll(presentationRef)}>Presentación</button>
          <button onClick={() => handleScroll(electricRef)}>Sistema Eléctrico</button>
          <button onClick={() => handleScroll(outsideRef)}>Exterior</button>
          <button onClick={() => handleScroll(insideRef)}>Interior</button>
          <button onClick={() => handleScroll(contactRef)}>Contacto</button>
        </div>
        <div className='langContainer'>
          <img className='flagEs' src={esFlag} alt="" />
          <button className='changeLang' onClick={handleLangChange}></button>
          <div className='overlay'></div>
          <img className='flagEn' src={enFlag} alt="" />
        </div>
      </header>
    </>
  )
}