import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
// import { CookiesProvider } from "react-cookie";
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['vn', 'en', 'jp'],
    fallbackLng: 'vn',
    debug: false,
  // Options for language detector
    detection: {
      order: ['path', 'cookie', 'htmlTag'],
      caches: ['cookie'],
    },
    react: { useSuspense: false },
    backend: {
      loadPath: '/Language/{{lng}}/translation.json',
    },
  })

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
document.getElementById('root')
);

