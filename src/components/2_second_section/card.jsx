/* eslint-disable react/prop-types */
import { Link } from '../Link.jsx'

export function CardModel ({ 
  img, description, title, price ,autonomy, acceleration, maxSpeed,
  autonomyTitle,
  speedName,
  accelerationTitle,
  accelerationSpeed,
  speedometer,
  maxSpeedTitle,
  details
}) {
  return(
    <div className='cybertruck-models'>
      <img className='img-models' src={img} alt={description} />
      <div className='main-details'>
        <h1>{title}</h1>
        <h2>U$S {price}</h2>
      </div>
      <ul className='details'>
        <li>- {autonomyTitle}</li>
        <p>{autonomy} {speedName}</p>
        <li>- {accelerationTitle}</li>
        <p>{acceleration}s {accelerationSpeed} {speedometer}</p>
        <li>- {maxSpeedTitle}</li>
        <p>{maxSpeed} {speedometer}</p>
      </ul>
      <Link className='link' to='/models'>{details}{title}</Link>
    </div>
  )
}