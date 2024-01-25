import './FifthSection.css'
import cybertruckInside from '../img/cybertruck-inside.jpg'
import cybertruckInside2 from '../img/cybertruck-inside-2.jpg'
import cybertruckInside3 from '../img/cybertruck-inside-3.jpg'

export function FifthSection () {
  return(
    <section className='tesla-fifth-section'>
      <div className='cybertruck-inside-container'>
        <img src={cybertruckInside} alt="An image of the inside" />
      </div>
      <article className='fifth-card'>
        <div className='cybertruck-inside2-container'>
          <img src={cybertruckInside2} alt="An second image of the inside" />
        </div>
        <div className='fifth-box'>
          <h1>Interior</h1>
          <p>El prototipo del interior del Cybertruck ceunta con una pantalla de 18,5 pulgadas. Su software manipula
            gran parte de la accesibilidad de la camioneta como abrir el vaúl frontal, abrir el puerto de carga, navegación digital y mucho más.<br />
            También cuenta con otra pantalla de 9,4 pulgadas para los pasajeros traseros en donde también se puede acceder a ciertas funcionalidades.
            El sistema de audio tiene 15 altavoces incluyendo 2 subwoofers, dispone de dos cargadores inalámbricos para teléfonos e incorpora un filtro HEPA
            y la función Bioweapon Mode que filtra el 99,97% de las partículas en el aire.<br />
            No cuenta con el tablero de velocimetro como en los vehiculos nor
          </p>
        </div>
      </article>
      <article className='sixth-card'>
        <div className='cybertruck-inside3-container'>
          <img src={cybertruckInside3} alt="" />
        </div>
        <div className='sixth-box'>
          <h1>{`Volante "yoke"`}</h1>
          <p>El volante del prototipo era similar a los usados en aviación (yoke) y tenía la circunferencia partida. En el modelo de producción
            es un volante oblongo con las partes superior e inferior rectas.<br />
            Junto al volante no dispone de palancas de intermitentes o de limpiaparabrisas. Esas funciones se realizan desde los botones hápticos
            incorporados al volante. Cuenta con vocina en el centro y tiene un microfono para comandos de voz, caracteristica peculiar del software
            por ejemplo para abrir la guantera que está motorizada.
            
          </p>
        </div>
      </article>
    </section>
  )
}