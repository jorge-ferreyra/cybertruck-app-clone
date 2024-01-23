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
            <p><span>Range (est.): </span>{range}</p>
            <p><span>Acceleration: </span>{acceleration}</p>
            <p><span>Top Speed: </span>{topSpeed}</p>
            <p><span>Towing: </span>{towing}</p>
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
            <p><span>Range (est.): </span>{range}</p>
            <p><span>Acceleration: </span>{acceleration}</p>
            <p><span>Top Speed: </span>{topSpeed}</p>
            <p><span>Towing: </span>{towing}</p>
          </div>
          
        </div>
        <div className="dimensions">
          <h3>DIMENSIONS</h3>
          <p><span>Weight: </span>{weight}</p>
          <p><span>Cargo: </span>120.9 CU FT</p>
          <p><span>Wheels: </span>{`20"`}</p>
          <p><span>Seating: </span>5 ADULTS</p>
          <h3>CHARGING</h3>
          <p><span>Charging Speed: </span>UP TO 128 MILES ADDED IN 15 MINUTES</p>
          <p><span>Supercharging Max/Payment Type: </span>250KW MAX; PAY PER USE</p>
        </div>
        <div className="gif">
          <img src={gif} alt="" />
        </div>
      </article>
    )
  }
}