import { TopMenu } from './top_menu/TopMenu.jsx';
import { FirstSection } from './1_first_section/FirstSection.jsx';
import { SecondSection } from './2_second_section/SecondSection.jsx';
import { ThirdSection } from './3_third_section/ThirdSection.jsx';
import { FourthSection } from './4_fourth_section/FourthSection.jsx';
import { FifthSection } from './5_fifth_section/FifthSection.jsx';
import { SixthSection } from './6_sixth_section/sixthSection.jsx';
import { FooterSection } from './footer/FooterSection.jsx';

export function Home () {
  return (
    <>
      <TopMenu />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <FooterSection />
    </>
  )
}