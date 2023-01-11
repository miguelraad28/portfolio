import {React, createContext, useState} from 'react';

const LanguageContext = createContext()
const LanguageProvider = (props) => {
    const [language, setLanguage] = useState("ES");
    return (
        <LanguageContext.Provider value={{language, setLanguage}}>
            {props.children}
        </LanguageContext.Provider>
    );
}
export {LanguageContext, LanguageProvider};
