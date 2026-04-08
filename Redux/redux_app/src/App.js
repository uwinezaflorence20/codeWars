import Profile from "./components/Profile"
import './App.css';
import Login from "./components/Login";
import Logout from "./components/Logout";
import  {Parent} from "./components/Example"

function App() {
  return (
  <div className='App'>
    <Profile/>
    <Login/>
    <Logout/>
    <Parent/>
    </div>
  )

}

export default App;
