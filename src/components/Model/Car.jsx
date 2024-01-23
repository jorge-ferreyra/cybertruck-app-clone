// eslint-disable-next-line react/prop-types
export function Car ({ gif, title }) {
  return(
    <article className='model'>
      <div className="performance">
        <h1>{title}</h1>
        <h3>PERFORMANCE</h3>
        <p>Range (est.): </p>
        <p>Acceleration: </p>
        <p>Top Speed: </p>
        <p>Towing: </p>
      </div>
      <div className="dimensions">
        <h3>DIMENSIONS</h3>
        <p>Weight: </p>
        <p>Cargo: </p>
        <p>Wheels: </p>
        <p>Seating: </p>
        <h3>CHARGING</h3>
        <p>Charging Speed: </p>
        <p>Supercharging Max/Payment Type: </p>
      </div>
      <div className="gif">
        <img src={gif} alt="" />
      </div>
    </article>
  )
}