import React from 'react';
import Myphoto from './myphoto.jpg';

const ProfilPhoto = () => {
    return (
        <div>
        <img src={Myphoto} style={{height:200}} alt='My-profile'/>
        </div>  
    );
}

export default ProfilPhoto;