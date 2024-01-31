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

export function Home ({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? 'es')
  return (
    <>
      <TopMenu />
      <FirstSection lang={i18n} />
      <SecondSection lang={i18n} />
      <ThirdSection lang={i18n}  />
      <FourthSection lang={i18n}  />
      <FifthSection lang={i18n}  />
      <SixthSection lang={i18n}  />
      <FooterSection lang={i18n}  />
    </>
  )
}