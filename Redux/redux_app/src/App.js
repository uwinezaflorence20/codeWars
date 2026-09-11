import Profile from "./components/Profile"
import './App.css';
import Login from "./components/Login";
import Logout from "./components/Logout";
import  {Parent} from "./components/Example"
import CorrectReRender from "./components/CorrectReRender";
import { Example3 } from "./components/Example3";

function App() {
  return (
  <div className='App'>
    <Profile/>
    <Login/>
    <Logout/>
    <Parent/>
    <CorrectReRender/>
    <Example3/>
    </div>
  )

}

export default App;
