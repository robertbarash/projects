import React from 'react';
import {faBars, faMoneyBill, fas} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import navStyles from "./navbar.module.css";


//https://www.adamjberkowitz.com/blog/use-react-hooks-to-create-a-toggle
const Toggle = (props) => {
    console.log("Props.open :" + props.open)
    return(
        <div id="1" className={navStyles.toggleIcon}>
            <button aria-expanded={props.open === true ? "true" : "false"}
                    name="toggle" 
                    className={navStyles.toggleIcon}>
            {props.open === true ? <FontAwesomeIcon icon={fas,faMoneyBill} /> : <FontAwesomeIcon icon={fas,faBars} /> }
            </button>
        </div>
    )
    };

export default Toggle;