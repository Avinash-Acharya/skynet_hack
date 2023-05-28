import './App.css';
import Topbar from './component/topbar/topbar.jsx';
import Footer from './component/footer/footer.jsx';
// import Login from './component/login/login.jsx';
// import Home from './component/home/home.jsx';
// import About from './component/about/about.jsx';
// import Contact from './component/contact/contact.jsx';
import { BrowserRouter } from 'react-router-dom';




function App() {


  return (

    

    <div className="app">
      
        {/* <div className='spam'> */}
          {/* <div className='spamText'> GET ADMISSION</div> */}

        {/* </div>  */}
       <BrowserRouter>
      <Topbar/>
      </BrowserRouter> 
       <Footer />

      {/* <Login /> */}
     
      
    </div>
    
    
  );
}

export default App;
