import './App.css';
import { TopMenu } from './components/TopMenu.jsx';
import { FirstSection } from './components/1_first_section/FirstSection.jsx';
import { SecondSection } from './components/2_second_section/SecondSection.jsx';
import { ThirdSection } from './components/3_third_section/ThirdSection.jsx';
import { FourthSection } from './components/4_fourth_section/FourthSection.jsx'
import { FifthSection } from './components/5_fifth_section/FifthSection.jsx'
import { Models } from './components/Model/Models.jsx';

import { Router } from './components/Router.jsx';
import Page404 from './components/404/404.jsx';

const appRoutes =[
  {
    path: '/',
    Component: () => (
      <>
      <TopMenu />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      </>
    )
  },
  {
    path: '/models',
    Component: Models
  },
  {
    path: '/search/:query',
    // eslint-disable-next-line react/prop-types
    Component: ({ routeParams }) => <h1>Estas buscando {routeParams.query}</h1>
  }
]

function App() {
  return (
    <>
      <Router routes={appRoutes} defaultComponent={Page404} />
    </>
  )
}

export default App
