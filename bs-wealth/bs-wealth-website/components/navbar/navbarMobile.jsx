import React from 'react';
import {Row, Col, Navbar} from "react-bootstrap";
import {faInstagram, faFacebook, faTwitter} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from "./navbar.module.scss";

//https://medium.com/@kkomaz/react-responsive-its-pretty-cool-d61e5ed56d95
const NavbarMobile = (props) => {
    const instagram = "https://www.instagram.com"
    const twitter = "https://www.twitter.com"
    const facebook = "https://www.facebook.com"

    return ( 
        //Col 4 on the left for the social links
        //Col 8 on the right for the bar
        <Navbar bg="dark" variant="dark">
            <Col xs={4} className="text-left align-left justify-content-left">
            <ul className={styles.ul}>
                <li className={styles.li}>
                    <a href={instagram}>
                    <FontAwesomeIcon icon={faInstagram} className={styles.icon}/>
                    </a>
                </li>
                <li className={styles.li}>
                    <a href={twitter}>
                    <FontAwesomeIcon icon={faFacebook} className={styles.icon}/>
                    </a>
                </li>
                <li className={styles.li}>
                    <a href={facebook}>
                    <FontAwesomeIcon icon={faTwitter} className={styles.icon}/>
                    </a>
                </li>
            </ul>
            </Col>
            <Col xs={6} className="text-right align-right justify-content-right ">Social Links</Col>
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </Navbar>   
    );
}

export default NavbarMobile;