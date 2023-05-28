import { Link , Routes , Route} from "react-router-dom"
import Home from '../home/home.jsx';
import About from '../about/about.jsx';
import Contact from '../contact/contact.jsx';

import "./topbar.css"

export default function topbar() {
  return (
    <div className="all">

        <div className="topbarContainer">
            <div className="leftTopbar">
                {/* <img src="/assets/Skynet.svg" alt="" className="logo"/>  */}
                <span className="logo">SKYNET UNIVERSITY</span>
            </div>
            <div className="centerTopbar">

                <div className="tabs">
                    <ul>
                        <div className="home"><li><Link to="/">HOME</Link></li></div>
                        <div className="about"><li><Link to="/about">ABOUT</Link></li></div>
                        <div className="contact"><li><Link to="/contact">CONTACT</Link></li></div>
                    </ul>
                </div>
            </div>
            <div className="rightTopbar">
                <img src="/assets/person/4.jpeg" alt="" className="userImg"/>
            </div>
        </div>
        
     <div className="route">


      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>

     </div>
  
            

      
    </div>
  )
}
