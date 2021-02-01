//Gonna put social stuff here
import React from "react";
import footerStyles from "../layout/footer.module.css";

const Footer = () => (
    <footer className={footerStyles.footer}>
        <div className="container">
            <span className="text-muted">This is our footer container</span>
        </div>
    </footer>
);

export default Footer;