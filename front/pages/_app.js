import '../styles/globals.css'
import { Provider } from 'react-redux';
import store from '../store/store'; //Store creado 
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
///Inicio de la aplicacion front
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
      
  )
}

export default MyApp
