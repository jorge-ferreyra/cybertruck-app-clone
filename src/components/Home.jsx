/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { TopMenu } from './top_menu/TopMenu.jsx';
import { FirstSection } from './1_first_section/FirstSection.jsx';
import { SecondSection } from './2_second_section/SecondSection.jsx';
import { ThirdSection } from './3_third_section/ThirdSection.jsx';
import { FourthSection } from './4_fourth_section/FourthSection.jsx';
import { FifthSection } from './5_fifth_section/FifthSection.jsx';
import { SixthSection } from './6_sixth_section/sixthSection.jsx';
import { FooterSection } from './footer/FooterSection.jsx';

import { useI18n } from '../hooks/useI18n.jsx';
import { useRef } from 'react';

export function Home ({ routeParams, lang }) {
  const i18n = useI18n(routeParams.lang ?? 'es')
  const introRef = useRef(null)
  const presentationRef = useRef(null)
  const electricRef = useRef(null)
  const outsideRef = useRef(null)
  const insideRef = useRef(null)
  const contactRef = useRef(null)

  return (
    <>
      <TopMenu 
        introRef={introRef} 
        presentationRef={presentationRef}
        electricRef={electricRef}
        outsideRef={outsideRef}
        insideRef={insideRef}
        contactRef={contactRef}
      />
      <FirstSection paramRef={introRef} lang={i18n} />
      <SecondSection paramRef={presentationRef} lang={i18n} langLink={lang}/>
      <ThirdSection paramRef={electricRef} id='electricSystem' lang={i18n} />
      <FourthSection paramRef={outsideRef} id='outside' lang={i18n}  />
      <FifthSection paramRef={insideRef} id='inside' lang={i18n}  />
      <SixthSection paramRef={contactRef} id='contact' lang={i18n}  />
      <FooterSection lang={i18n}  />
    </>
  )
}