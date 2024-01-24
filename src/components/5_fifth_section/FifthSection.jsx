import './FifthSection.css'

export function FifthSection () {
  return(
    <section className='tesla-fifth-section'>
      <form className='tesla-form' action="">
        <h2 className='titleName'>Nombre</h2>
        <input className='inputName' type="text" placeholder='Ingrese un nombre...'/>
        <h2 className='titleSurname'>Apellido</h2>
        <input className='inputSurname' type="text" placeholder='Ingrese un apellido...'/>
        <h2 className='titleMail'>Mail</h2>
        <input className='inputMail' type="text" placeholder='Ingrese un mail...'/>

        <h2 className='titleTitle'>Titulo</h2>
        <input className='inputTitle' type="text" placeholder='Ingrese el titulo...' maxLength='100'/>
        <h2 className='titleDescription'>Descripción</h2>
        <input className='inputDescription' type="text" placeholder='Ingrese aquí la descripción...' maxLength='255'/>
        <input className='inputSubmit' type="submit" />
      </form>
    </section>
  )
}