// eslint-disable-next-line react/prop-types
export function CardModel ({ img, description, title, price ,autonomy, acceleration, maxSpeed }) {
  return(
    <div className='cybertruck-models'>
      <img className='img-models' src={img} alt={description} />
      <div className='main-details'>
        <h1>{title}</h1>
        <h2>U$S {price}</h2>
      </div>
      <ul className='details'>
        <li>- Autonomía</li>
        <p>{autonomy} KM</p>
        <li>- Aceleración </li>
        <p>{acceleration}s 0-100 KM/H</p>
        <li>- Velocidad Máxima </li>
        <p>{maxSpeed} KM/H</p>
      </ul>
      <a href='/models'>Ver más detalles de modelos {'>'}</a>
    </div>
  )
}