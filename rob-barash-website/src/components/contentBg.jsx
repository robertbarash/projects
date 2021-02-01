import React from "react";
import { Container} from "react-bootstrap";
import contentStyles from "../layout/content.module.css";

const ContentBackground = () => {
    return(
        <div className={contentStyles.contentBg}>
            <p>This is content</p>
        </div>
    );
}