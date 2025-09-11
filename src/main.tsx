
import ReactDOM from 'react-dom/client'
import "./services/axios-global.js"
import "bootstrap/dist/css/bootstrap.min.css";
import "@styles/globaleStyles.css"
import Routes from '@routes/routes';
import {store, persiststore} from "@store/index";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import "./index.css"
ReactDOM.createRoot(document.getElementById('root')!).render(

  <Provider store={store}>
    <PersistGate loading={null} persistor={persiststore}>
      <Routes/>
    </PersistGate>
  </Provider>
)
