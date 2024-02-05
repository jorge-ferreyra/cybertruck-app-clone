/* eslint-disable react/prop-types */
import './SixthSection.css'
import './ResponsiveSixthSectionES.css'

const gifTesla = 'https://media.licdn.com/dms/image/C4E22AQFRIr5N0EsR_g/feedshare-shrink_800/0/1630000942612?e=2147483647&v=beta&t=f0JEk0KAxm89gTiOkhQHQBLS_7tqQkMH1VI6SsIodEc'

export function SixthSection ({ lang, paramRef }) {
  return(
    <section ref={paramRef} className='tesla-sixth-section'>
      <article className='doubts-box'>
        <div className='doubts-title'>
          <h1>{lang.sixthSection.doubts.title}</h1>
        </div>
        <div className='doubts-paragraph'>
          <p><span>Tesla</span>{lang.sixthSection.doubts.paragraphPart1}<br />
            {lang.sixthSection.doubts.paragraphPart2}
          </p>
          <ol>
            <li>{lang.sixthSection.doubts.listPart1}</li>
            <li>{lang.sixthSection.doubts.listPart2}</li>
            <li>{lang.sixthSection.doubts.listPart3}</li>
          </ol>
          <img src={gifTesla} alt="" />
        </div>
      </article>
      <form className='tesla-form' >
        
        <label className='titleName' htmlFor="name">{lang.sixthSection.form.name}</label>
        <input className='inputName' name='name' id='name' type="text" placeholder={lang.sixthSection.form.nameInput}/>
        
        <label className='titleSurname' htmlFor="surname">{lang.sixthSection.form.surname}</label>
        <input className='inputSurname' name='surname' id='surname' type="text" placeholder={lang.sixthSection.form.surnameInput}/>
        
        <label className='titleMail' htmlFor="mail">Mail</label>
        <input className='inputMail' name='mail' id='mail' type="email" placeholder={lang.sixthSection.form.mailInput}/>
        
        <label className='titleTitle' htmlFor="title">{lang.sixthSection.form.title}</label>
        <input className='inputTitle' name='title' id='title' type="text" placeholder={lang.sixthSection.form.titleInput} maxLength='100'/>
        
        <label className='titleDescription' htmlFor="description">{lang.sixthSection.form.description}</label>
        <textarea className='inputDescription' name="description" id="description" cols="30" rows="10" placeholder={lang.sixthSection.form.descriptionInput}></textarea>
        
        <input className='inputSubmit' type="submit" value={lang.sixthSection.form.submitInput}/>
      </form>
    </section>
  )
}