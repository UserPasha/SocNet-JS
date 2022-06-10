import React from 'react';
import PreloaderImage from './../images/PreLoader.svg'

const Preloader = () => {
    return (
        <div>
            <img src={PreloaderImage} alt={'Preloader Image'}/>
        </div>
    );
};

export default Preloader;