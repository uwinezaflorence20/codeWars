import Header from './Components/Header'
import Main from './Components/Main'
import './App.css'
import NewApp from './Components/Newapp'
import Entry from './Components/Entry'
import Contact from './Components/Contact'
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

<Contact 
img="public/3.jpg"
name="Mr.Wiskerson"
phone="(212) 555-1234"
email="mr.wiskaz@catnap.meow"
/>

<Contact 
img="public/3.jpg"
name="Mr.Wiskerson2"
phone="(212) 555-1235"
email="mr.wiskaz2@catnap.meow"
/>

<Contact 
img="public/4.avif"
name="Mr.Wiskerson3"
phone="(212) 555-1235"
email="mr.wiskaz3@catnap.meow"
/>

<Contact 
img="public/5.jpg"
name="Mr.Wiskerson4"
phone="(212) 555-1237"
email="mr.wiskaz4@catnap.meow"
/>
          </>
  )
}

export default App
