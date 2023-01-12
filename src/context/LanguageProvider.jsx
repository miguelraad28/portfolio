import {React, createContext, useState} from 'react';

const LanguageContext = createContext()
const LanguageProvider = (props) => {
    const [language, setLanguage] = useState("ES");
    const changeLanguage = () => {
        if(language === "EN"){
            setLanguage("ES")
        }else{
            setLanguage("EN")
        }
    }
    return (
        <LanguageContext.Provider value={{language, setLanguage, changeLanguage}}>
            {props.children}
        </LanguageContext.Provider>
    );
}
export {LanguageContext, LanguageProvider};
