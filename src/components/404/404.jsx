/* eslint-disable react/prop-types */
import { Link } from "../Link"
import './404.css'

export function Page404 ({ lang }) {
  return(
    <>
      <section className="card-404">
        <h1>{`404 = I'm NOT fine.`}</h1>
        <img src="https://i.gifer.com/fygg.gif" alt="I am fine gif" />
        <Link className='link' to={`/${lang}`}>Volver al Home</Link>
      </section>
    </>
  )
}