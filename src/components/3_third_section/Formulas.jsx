import formula1 from '../img/svg/formula1.svg'
import formula2 from '../img/svg/formula2.svg'
import formula3 from '../img/svg/formula3.svg'
import formula4 from '../img/svg/formula4.svg'
import formula5 from '../img/svg/formula5.svg'
import formula6 from '../img/svg/formula6.svg'

export function Formulas () {
  return(
    <div className='formula-box'>
        <img src={formula1} alt='Formula number 1' />
        <img src={formula2} alt='Formula number 2' />
        <img src={formula3} alt='Formula number 3' />
        <img src={formula4} alt='Formula number 4' />
        <img src={formula5} alt='Formula number 5' />
        <img src={formula6} alt='Formula number 6' />
    </div>
  )
}