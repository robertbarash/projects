import React from 'react';
import {Container} from 'react-bootstrap'
export const Progress = () => {
    return(
        <div>
            <Container>
            <h3 style={{paddingTop:"30px"}}>A place to outline thoughts about what else needs to be worked on</h3>
            <br/>
            <br/>
            <ul>
                <h3>General</h3>
                <li>Footer section with social links</li>
                <li>Assets loading large on initial page load, then resizing down (looks weird...)</li>
                <li>Read more for skills needs completion or elimination</li>
                <li>Resume link (footer?)</li>
                <li>Animate sub-header text (left-to-right quick fade? Typing animation?)</li>
                <li>Favicon</li>
            </ul>
            <ul>
                <h3>Mobile</h3>
                <li>Navbar toggle styling</li>
                <li>Navbar toggle functionality</li>
                <li>Card formatting broken for body text</li>
                <li>Remove skill text (leave only Icons)</li>
            </ul>
            <ul>
                <h3>Desktop</h3>
                <li>Add navbar to multiple pages</li>
                <li>Split projects section</li>
                <li>Blog section with CMS (Large)</li>
            </ul>
            </Container>
        </div>
    );
}

export default Progress;