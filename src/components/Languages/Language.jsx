import React from 'react';

const Language = ({glow, languageIcon, alt}) => {
    return (
        <div className={alt === "javascript" || alt === "photoshop" ? "languageIcon squareIcons" : alt === "reactjs" ? "languageIcon reactIcon" : "languageIcon"} style={{boxShadow: glow}}>
            <img className={alt === "photoshop" ? "photoshopIconImg" : null} src={languageIcon} alt={alt} />
        </div>
    );
}

export default Language;
