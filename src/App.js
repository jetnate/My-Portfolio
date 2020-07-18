import React  from 'react';
import Navbar from './components/navbar'
import About from './components/about'
import Projects from './components/projects'
import Contact from './components/contact'
import Resume from './components/resume'
import Footer from './components/footer'








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
      <Footer />
      
      <router />
     
    </div>

    );

    
    }
  
}

export default ProductList;