import teslaLogoBlack from './img/tesla-logo-black.png'
import teslaLogoRed from './img/tesla-logo-red.png'
import './TopMenu.css'

export function TopMenu () {
    return(
    <header className='tesla-top-menu'>
        <img className='tesla-logo tesla-logo-black' src={teslaLogoBlack} alt="Tesla logo" />
        <img className='tesla-logo tesla-logo-red' src={teslaLogoRed} alt="Tesla logo" />
    </header>
    )
}