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
                <img className="skillsicon" src="../images/react.png" ></img>
                <img className="skillsicon" src="../images/node.png"></img>
                <img className="skillsicon" src="../images/css.png"></img>
                <img className="skillsicon" src="../images/html.png"></img>
                <img className="skillsicon" src="../images/javascript.png"></img>
                <img className="skillsicon" src="../images/mysql.png"></img>
                <img className="skillsicon" src="../images/sass.png"></img>
            </div>
        </div>
            )
    }
}
export default Resume;