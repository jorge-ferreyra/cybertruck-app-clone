// eslint-disable-next-line react/prop-types
export function Car ({ gif, title, range, acceleration, topSpeed, towing, weight }) {
  if (title === 'REAR-WHEEL DRIVE') {
    return(
      <article className='model'>
        <div className="performance">
          <div className="title">
            <h1>{title}</h1>
         </div>
          <div className="details">
           <h3>PERFORMANCE</h3>
            <p>Range (est.): {range}</p>
            <p>Acceleration: {acceleration}</p>
            <p>Top Speed: {topSpeed}</p>
            <p>Towing: {towing}</p>
          </div>
        </div>
        <div className="soon">
          <h3>Details Available in 2025</h3>
        </div>
        <div className="gif">
          <img src={gif} alt="" />
        </div>
      </article>
    )
  } else {
    return(
      <article className='model'>
        <div className="performance">
          <div className="title">
            <h1>{title}</h1>
          </div>
          <div className="details">
            <h3>PERFORMANCE</h3>
            <p>Range (est.): {range}</p>
            <p>Acceleration: {acceleration}</p>
            <p>Top Speed: {topSpeed}</p>
            <p>Towing: {towing}</p>
          </div>
          
        </div>
        <div className="dimensions">
          <h3>DIMENSIONS</h3>
          <p>Weight: {weight}</p>
          <p>Cargo: 120.9 CU FT</p>
          <p>Wheels: {`20"`}</p>
          <p>Seating: 5 ADULTS</p>
          <h3>CHARGING</h3>
          <p>Charging Speed: UP TO 128 MILES ADDED IN 15 MINUTES</p>
          <p>Supercharging Max/Payment Type: 250KW MAX; PAY PER USE</p>
        </div>
        <div className="gif">
          <img src={gif} alt="" />
        </div>
      </article>
    )
  }
}