import './App.css';

import { TopMenu } from './components/top_menu/TopMenu.jsx';
import { FirstSection } from './components/1_first_section/FirstSection.jsx';
import { SecondSection } from './components/2_second_section/SecondSection.jsx';
import { ThirdSection } from './components/3_third_section/ThirdSection.jsx';
import { FourthSection } from './components/4_fourth_section/FourthSection.jsx';
import { FifthSection } from './components/5_fifth_section/FifthSection.jsx';
import { SixthSection } from './components/6_sixth_section/sixthSection.jsx';
import { FooterSection } from './components/footer/FooterSection.jsx';

import { Models } from './components/Model/Models.jsx'
import Page404 from './components/404/404.jsx';

import { Router } from './components/Router.jsx';
import { Route } from './components/Route.jsx';

const appRoutes = [
  {
    path: '/:lang/models',
    Component: Models,
  },
  {
    path: '/search/:query',
    // eslint-disable-next-line react/prop-types
    Component: ({ routeParams }) => <h1>Estás buscando {routeParams.query}</h1>,
  },
];

function App() {
  return (
    <>
      <Router routes={appRoutes} defaultComponent={Page404}>
        <Route
          path='/'
          Component={() => (
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
          )}
        />
        <Route path='/models' Component={Models} />
      </Router>
    </>
  );
}

export default App;
