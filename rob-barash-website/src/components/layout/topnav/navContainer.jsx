import React from 'react';
import {useState, useEffect} from 'react';
import Navbar from "./navbar";
import Toggle from "./toggle";
import '../../fontawesome.js';

//Tried to put the onClick in the Navbar
//But I think it was reading it as a prop rather than an event
//Since Div is a default function of JavaScript, maybe only it can see the "OnClick" handler.
const NavContainer = () => {
    const [open, setOpen] = useState(false);
    const handleClick = () => setOpen(!open) && console.log("This is setopen" + setOpen);
    useEffect(() => {
        //Possibly put setOpen stuff in here
        //<Toggle open={open} onClick={handleClick}/>


    });

    console.log("open in nav container: " + open);
    return(
        <div onClick={handleClick}>
            <Navbar open={open}/>
        </div>
    );
}

export default NavContainer;