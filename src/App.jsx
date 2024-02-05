import './App.css';

import { Home } from './components/Home.jsx';
import { Models } from './components/Model/Models.jsx';
import { Page404 } from './components/404/404.jsx';



import { Router } from './components/Router.jsx';
import { Route } from './components/Route.jsx';

import { useLanguage } from './hooks/useLanguage.jsx'



const appRoutes = [
  {
    path: '/:lang',
    Component: Home
  },
  {
    path: '/:lang/models',
    Component: Models
  },
  {
    path: '/search/:query',
    // eslint-disable-next-line react/prop-types
    Component: ({ routeParams }) => <h1>Estás buscando {routeParams.query}</h1>
  },
];

function App() {

  const { currentLang } = useLanguage()

  return (
    <>
      
      <Router routes={appRoutes} defaultComponent={() => <Page404 lang={currentLang} />} currentLang={currentLang} history={window.history}>
        <Route path={`/${currentLang}`} render={(routeParams) => <Home routeParams={routeParams} lang={currentLang} />} />
        <Route path={`/${currentLang}/models`} render={(routeParams) => <Models routeParams={routeParams} lang={currentLang}/>} />
      </Router>
    </>
  );
}

export default App;
