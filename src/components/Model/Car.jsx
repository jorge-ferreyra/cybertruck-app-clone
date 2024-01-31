
/* eslint-disable react/prop-types */
export function Car ({ 
  gif, title, range, acceleration, topSpeed, towing, weight, cargo, charge, soon,
  speedometer, speedName, weightName, accelerationSpeed,
  titlePerformance, subtitleAutonomy, subtitleAcceleration, subtitleMaxSpeed, subtitleTowing,
  titleDimension, subtitleWeight, subtitleCargo, subtitleWheels, subtitleSeating, subtitleSeatingDes,
  titleCharging, subtitleChargeSpeed, subtitleSuperCharge, subtitleParagraphSpeed, subtitleParagraphSuper
}) {
  
  if (title === 'REAR-WHEEL DRIVE') {
    return(
      <article className='model'>
        <div className="performance">
          <div className="title">
            <h1>{title}</h1>
          </div>
          <div className="car-details">
            
            <h3>{titlePerformance}</h3>
            <p><span>{subtitleAutonomy}</span>{range} {speedName}</p>
            <p><span>{subtitleAcceleration}: </span>{acceleration} SEC {accelerationSpeed} {speedometer}</p>
            <p><span>{subtitleMaxSpeed}: </span>{topSpeed} {speedometer}</p>
            <p><span>{subtitleTowing}: </span>{towing} {weightName}</p>
          </div>
        </div>
        <div className="soon">
          <h3>{soon}</h3>
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
          <div className="car-details">
            <h3>{titlePerformance}</h3>
            <p><span>{subtitleAutonomy}: </span>{range} {speedName}</p>
            <p><span>{subtitleAcceleration}: </span>{acceleration} SEC {accelerationSpeed} {speedometer}</p>
            <p><span>{subtitleMaxSpeed}: </span>{topSpeed} {speedometer}</p>
            <p><span>{subtitleTowing}: </span>{towing} {weightName}</p>
          </div>
          
        </div>
        <div className="dimensions">
          <h3>{titleDimension}</h3>
          <p><span>{subtitleWeight}: </span>{weight} {weightName}</p>
          <p><span>{subtitleCargo}: </span>{cargo}</p>
          <p><span>{subtitleWheels}: </span>{`20"`}</p>
          <p><span>{subtitleSeating}: </span>{subtitleSeatingDes}</p>
          <h3>{titleCharging}</h3>
          <p><span>{subtitleChargeSpeed}: </span>{charge} {subtitleParagraphSpeed}</p>
          <p><span>{subtitleSuperCharge}: </span>{subtitleParagraphSuper}</p>
        </div>
        <div className="gif">
          <img src={gif} alt="" />
        </div>
      </article>
    )
  }
}