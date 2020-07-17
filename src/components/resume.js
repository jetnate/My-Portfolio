import React from "react";
import "./resume.css";

class Resume extends React.Component{
    render(){
        return(<div>
            <div className="container">
            <h1 className="headernathan">Skills</h1>
            </div>
            <br></br>
            <div className="skillscontainer">
                <img className="skillsicon" src="../images/react.png" alt="react"></img>
                <img className="skillsicon" src="../images/node.png" alt="node"></img>
                <img className="skillsicon" src="../images/css.png" alt="css"></img>
                <img className="skillsicon" src="../images/html.png" alt="html"></img>
                <img className="skillsicon" src="../images/javascript.png" alt="javascript"></img>
                <img className="skillsicon" src="../images/mysql.png" alt="mysql"></img>
                <img className="skillsicon" src="../images/sass.png" alt="sass"></img>
            </div>
        </div>
            )
    }
}
export default Resume;