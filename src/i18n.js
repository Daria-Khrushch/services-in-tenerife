import ua from './trans/ua.json'
import ru from './trans/ru.json'

import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'


const resources = {
    ua: {
        translation: ua,
    },
    ru:{
        translation:ru,
    }
}

i18n
.use(initReactI18next)
.init({
    resources,
    lng:JSON.parse(localStorage.getItem('language')),
    fallbackLng:'ua'
})

export default i18n;