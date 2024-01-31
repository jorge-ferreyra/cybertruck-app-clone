/* eslint-disable react/prop-types */
import './FourthSection.css'
import './ResponsiveFourthSectionES.css'

export function FourthSection({ lang }) {
  return (
    <section className="tesla-fourth-section">
      <div className='test-after'>
        <h1>{lang.fourthSection.before.title}</h1>
        <p>{lang.fourthSection.before.paragraph}</p>
        <iframe className='tesla-second-video' src="https://www.youtube.com/embed/udxR5rBq_Vg" allowFullScreen title="Cybertruck Prueba Antes"></iframe>
      </div>
      <div className='test-before'>
        <h1>{lang.fourthSection.after.title}</h1>
        <p>{lang.fourthSection.after.paragraph}</p>
        <iframe className='tesla-third-video' src="https://www.youtube.com/embed/teRRk-0KHus" allowFullScreen title="Cybertruck Prueba Después"></iframe>
      </div>
    </section>
  );
}