import React from 'react';
import "./footer.css"

class Footer extends React.Component {
    render(){

        return(
            
            <div className="footer">
                <div>
                <p className="footertext">
                     Updated 2020. All Rights Reserved. Nathan Tadesse
                </p>
                </div>
                <div className="social-container">
                <ul className="social-logos">
                <li><a href="https://www.linkedin.com/in/nathan-tadesse-656b15155/" target="_blank" rel="noopener noreferrer"><img src="../images/linkedin.png" alt="linkedin"></img></a></li>
                <li><a href="https://github.com/jetnate/My-Portfolio" target="_blank" rel="noopener noreferrer"><img src="../images/github.png" alt="github"></img></a></li>
                <li><a href="https://twitter.com/explore" target="_blank" rel="noopener noreferrer"><img src="../images/twitter.png" alt="twitter"></img></a></li>
                </ul>
                </div>
                
            </div>
        )

    }
}

export default Footer;