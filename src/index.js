import React from 'react';
// import { I18nextProvider } from 'react-i18next';
// import i18next from 'i18next';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import common_en from "translations/en/common.json";
// import common_kr from "translations/kr/common.json";
import Providers from './Providers'
import ReactDOM from 'react-dom/client';

// i18next.init({
//   interpolation: { escapeValue: false },  // React already does escaping
//   lng: 'kr',                              // language to use
//   resources: {
//     kr: {
//       common: common_kr
//     },
//     en: {
//       common: common_en               // 'common' is our custom namespace
//     },
//   },
// });
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
    //<I18nextProvider i18n={i18next}>//
    //   <Providers>
        <App />
      // </Providers>
    // </I18nextProvider>
  // </React.StrictMode>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// import React from 'react';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
//
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
