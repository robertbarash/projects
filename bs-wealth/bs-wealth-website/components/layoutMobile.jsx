import React from 'react';
import "../components/navbar/navbarMobile";
import NavbarMobile from "../components/navbar/navbarMobile.jsx";
import axios from 'axios';

axios.get('http://localhost:1337/restaurants').then(response => {
  console.log(response);
});

const LayoutMobile = () => {
    return(
        <div>
            <NavbarMobile/>
        </div>
    );
}

export default LayoutMobile;