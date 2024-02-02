import './App.css';

import { Home } from './components/Home.jsx';
import { Models } from './components/Model/Models.jsx';
import { Page404 } from './components/404/404.jsx';

import { Router } from './components/Router.jsx';
import { Route } from './components/Route.jsx';

import { useState } from 'react';



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

const esFlag = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/200px-Bandera_de_Espa%C3%B1a.svg.png'
const enFlag = 'https://media.istockphoto.com/id/479199262/es/foto/encuadre-completo-imagen-de-inglaterra-bandera.jpg?s=612x612&w=0&k=20&c=SwMP7VR64pbeG-fGCQSbP3e1jYLV0w-79bNyDG5z5Cc='

function App() {
  const [currentLang, setCurrentLang] = useState('es')
  const [animationButton, setAnimationButton] = useState('es')


  const handleLangChange = () => {
    const newLang = currentLang === 'es' ? 'en' : 'es'
    setCurrentLang(newLang)
    if (animationButton == 'es') {
      document.querySelector('.changeLang').classList.add('clicked')
      setAnimationButton('en')
    } else {
      document.querySelector('.changeLang.clicked').classList.remove('clicked')
      setAnimationButton('es')
    }
  }


  return (
    <>
      <div className='langContainer'>
        <img className='flagEs' src={esFlag} alt="" />
        <button className='changeLang' onClick={handleLangChange}></button>
        <div className='overlay'></div>
        <img className='flagEn' src={enFlag} alt="" />
      </div>
      <Router routes={appRoutes} defaultComponent={() => <Page404 lang={currentLang} />} currentLang={currentLang} history={window.history}>
        <Route path={`/${currentLang}/`} render={(routeParams) => <Home routeParams={routeParams} lang={currentLang}/>} />
        <Route path={`/${currentLang}/models`} render={(routeParams) => <Models routeParams={routeParams} lang={currentLang}/>} />
      </Router>
    </>
  );
}

export default App;
