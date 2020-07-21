import React from 'react'
import './about.css'

class About extends React.Component {
    render() {
        return(
            <div className="container">
                <h1 className="headernathan">Nathan Tadesse</h1>
                <h2>Full-Stack Developer</h2>
                <div className="me">
                    <img className="me2" src="../images/nathan.png" alt = "photograph of Nathan"></img>
                </div>
                <p>
                    <br></br>
                    <br></br>
                Since childhood, I have always been passionate about technology and how it can be implemented to solve a vast array of problems. I remember sitting up late at night, watching my older cousin work on developing websites for his clients. Fast forward to adulthood and I have made both apps and websites that exemplify both User Experience and Website Functionality.


I look forward to connecting with anyone who is passionate about technology, and Front End Development. Please do not hesitate to message me here, or through my email at <b>natetadesse4991@gmail.com</b>.
                </p>
                <br></br>
                <br></br>
                <a href="https://www.linkedin.com/in/nathan-tadesse-656b15155/" target="_blank"  rel="noopener noreferrer" className="btn">Get in Touch</a>
              

            </div>
        )
    }
}
export default About;

