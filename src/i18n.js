import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resources from './translations.json' 


function Init() {
    
    i18n.use(LanguageDetector).use(initReactI18next).init({
        fallbackLng: 'en',
        lng: 'fr',
        debug: true,
        resources,
        
    })
}

export default Init