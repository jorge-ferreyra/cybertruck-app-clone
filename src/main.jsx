import ReactDOM from 'react-dom/client'
import { LanguageProvider } from './context/Languages.jsx'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <LanguageProvider>
    <App />
  </LanguageProvider>
)
