import './SixthSection.css'
import './ResponsiveSixthSection.css'

const gifTesla = 'https://media.licdn.com/dms/image/C4E22AQFRIr5N0EsR_g/feedshare-shrink_800/0/1630000942612?e=2147483647&v=beta&t=f0JEk0KAxm89gTiOkhQHQBLS_7tqQkMH1VI6SsIodEc'

export function SixthSection () {
  return(
    <section className='tesla-sixth-section'>
      <article className='doubts-box'>
        <div className='doubts-title'>
          <h1>Si ténes alguna duda sobre Tesla o Cybertruck, ¡Mandanos tu consulta!</h1>
        </div>
        <div className='doubts-paragraph'>
          <p><span>Tesla</span> es una de las empresas más competitivas de estadosunidos con sede en Austin, Texas.
            El núcleo de la empresa está en la ingeniería del sistema de propulsión del vehículo eléctrico que
            incluye: paquete de baterías, motor, electrónica de potencia y software de control que permite que
            todos los componentes formen un sistema.<br />
            Tesla se fundó para acelerar la transición hacia el transporte sostenible, influenciando unos principios
            para influir en la industria desde un punto de vista basado en la energía renovable:
          </p>
          <ol>
            <li>Comenzar con un proyecto pequeño fabricando pocas unidades a un precio alto.</li>
            <li>Fabricar un vehículo en mayor volumen de unidades y a un costo menor que en el paso 1.</li>
            <li>Vehículo producido en gran volumen y a un precio accesible.</li>
          </ol>
          <img src={gifTesla} alt="" />
        </div>
      </article>
      <form className='tesla-form' action="">
        <h2 className='titleName'>Nombre</h2>
        <input className='inputName' type="text" placeholder='Ingrese un nombre...'/>
        <h2 className='titleSurname'>Apellido</h2>
        <input className='inputSurname' type="text" placeholder='Ingrese un apellido...'/>
        <h2 className='titleMail'>Mail</h2>
        <input className='inputMail' type="text" placeholder='Ingrese un mail...'/>
        <h2 className='titleTitle'>Título</h2>
        <input className='inputTitle' type="text" placeholder='Ingrese el titulo...' maxLength='100'/>
        <h2 className='titleDescription'>Descripción</h2>
        <textarea className='inputDescription' name="description" id="description" cols="30" rows="10" placeholder='Ingrese aquí la descripción...'></textarea>
        <input className='inputSubmit' type="submit" />
      </form>
    </section>
  )
}