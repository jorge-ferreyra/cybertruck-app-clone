/* eslint-disable react/prop-types */
import teslaLogoBlack from '../img/tesla-logo-black.png'
import teslaLogoRed from '../img/tesla-logo-red.png'
import './TopMenu.css'

function handleScroll (param) {
  const offset = 80;
  const targetElement = param.current;

  const targetPosition = targetElement.offsetTop - offset;
  window.scrollTo({ top: targetPosition, behavior: 'smooth' });
}

export function TopMenu ({ introRef, presentationRef, electricRef, outsideRef, insideRef, contactRef  }) {
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
      </header>
    </>
  )
}