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
      <form className='tesla-form' action="">
        <h2 className='titleName'>{lang.sixthSection.form.name}</h2>
        <input className='inputName' type="text" placeholder={lang.sixthSection.form.nameInput}/>
        <h2 className='titleSurname'>{lang.sixthSection.form.surname}</h2>
        <input className='inputSurname' type="text" placeholder={lang.sixthSection.form.surnameInput}/>
        <h2 className='titleMail'>Mail</h2>
        <input className='inputMail' type="text" placeholder={lang.sixthSection.form.mailInput}/>
        <h2 className='titleTitle'>{lang.sixthSection.form.title}</h2>
        <input className='inputTitle' type="text" placeholder={lang.sixthSection.form.titleInput} maxLength='100'/>
        <h2 className='titleDescription'>{lang.sixthSection.form.description}</h2>
        <textarea className='inputDescription' name="description" id="description" cols="30" rows="10" placeholder={lang.sixthSection.form.descriptionInput}></textarea>
        <input className='inputSubmit' type="submit" value={lang.sixthSection.form.submitInput}/>
      </form>
    </section>
  )
}