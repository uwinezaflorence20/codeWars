import Header from './Components/Header'
import Main from './Components/Main'
import './App.css'
import NewApp from './Components/Newapp'
import Entry from './Components/Entry'
function App() {
let firstName ="Uwineza"
let secondName ="Florence"

 const hours = new Date().getHours()
  let timeOfDay

  if (hours < 12) {
    timeOfDay = "morning"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
  } else if (hours < 21) {
    timeOfDay = "evening"
  } else {
    timeOfDay = "night"
  } 


  return (
    <>
 <Header/>
<Main/> 
<NewApp/>
<Entry/>
<p>The firstname is {firstName} and the last name is {secondName}</p>

<p>Good {timeOfDay}</p>
          </>
  )
}

export default App
