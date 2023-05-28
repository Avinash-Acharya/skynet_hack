import "./login.css"
import { Link , Routes , Route} from "react-router-dom"
import Home from '../home/home.jsx';


export default function login() {
    // const [username, setUsername] = useState([])


    // const updateName = (e) => {
    //     localStorage.setItem("username", e.target.value)
    // }


  return (
    <div className="mainContainer">
        <div className="infoInput">
            <input type="text" placeholder="Enter Username" className="username"/>
            <input type="password" placeholder="Enter Password" className="password" />
            <div className="buttoN">
                <button className="login"><Link to="/">Login</Link></button>
            </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />  
        </Routes>
    </div>
  )
}
