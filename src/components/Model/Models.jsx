import { Link } from '../Link'
import './Models.css'

export function Models () {
  return(
    <section className='main-section'>
      <div className='main-card'>
        <article className='model'></article>
        <article className='model'></article>
        <article className='model'></article>
        <Link className='link' to='/'>Volver al Home</Link>
      </div>
      
    </section>
  )
}