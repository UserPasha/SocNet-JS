import React from 'react';
import PreloaderImage from './../images/PreLoader.svg'
import c from "./Preloader.module.css"

const Preloader = () => {
    return (
        <div>
            <div className={c.loader}>

            </div>

            {/*<img src={PreloaderImage} alt={'Preloader Image'}/>*/}
        </div>
    );
};

export default Preloader;