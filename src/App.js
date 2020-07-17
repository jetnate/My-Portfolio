import React  from 'react';
import Navbar from './components/navbar'
import About from './components/about'
import Projects from './components/projects'
import Contact from './components/contact'
import Resume from './components/resume'








class ProductList extends React.Component {
  render(){
    return(

    <div className="body">
      <router />
      <Navbar />
      <About />
      <Projects />
      <Resume />
      <Contact />
      
      <router />
     
    </div>

    );

    
    }
  
}

export default ProductList;