import React from 'react';
import preloader from '../../img/preloader.png';
import s from './Preloader.module.css';


const {preloaderClass} = s;


const Preloader = () => {
    return (
        <div className={preloaderClass}>
            <img src={preloader} alt="preLoader"/>
        </div>
    )
}

export default Preloader;