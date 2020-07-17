import React from 'react'
import './navbar.css'
import {Link} from 'react-scroll';

class Navbar extends React.Component {
    render() {
        return(
            <div className="header">
                <img className= ""/>
                <nav>
                <ul className="kleco-nav">
                    <li><Link activeClass="bold"
                   to="container"
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
            
              >About Me</Link> </li>
                    <li><Link activeClass="bold"
                   to="Projects"
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
          
              >Projects</Link></li>

<li><Link activeClass="bold"
                   to="skillscontainer"
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
              className="link"
              >Skills</Link></li>

                    <li><Link activeClass="bold"
                   to="inner-width"
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
              className="link"
              >Contact Me</Link></li>
                </ul>
            </nav>

            </div>
        )
    }
}
export default Navbar;