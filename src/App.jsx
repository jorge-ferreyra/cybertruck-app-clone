import './App.css';
import { TopMenu } from './components/TopMenu.jsx';
import { FirstSection } from './components/1_first_section/FirstSection.jsx';
import { SecondSection } from './components/2_second_section/SecondSection.jsx';
import { ThirdSection } from './components/3_third_section/ThirdSection.jsx';
import { useState } from 'react';
///import { FourthSection } from './components/4_fourth_section/FourthSection.jsx'
import { Models } from './components/Model/Models.jsx';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  return (
    <>
    {currentPath === '/' && 
    (
      <>
      <TopMenu />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      </>
    )}
    {currentPath === '/models' && <Models />}
  </>
  )
}

export default App
