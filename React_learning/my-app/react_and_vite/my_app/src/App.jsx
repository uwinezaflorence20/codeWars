import Header from "./Components/Header";
import Main from "./Components/Main";
import "./App.css";
import NewApp from "./Components/Newapp";
import Entry from "./Components/Entry";
import Contact from "./Components/Contact";
import Jokes from "./Components/Jokes";
import jokesData from "./jokesData";
import data from "./data";
import Person from "./Components/Person";
import people from "./people";

function App() {
  let firstName = "Uwineza";
  let secondName = "Florence";

  const hours = new Date().getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
  } else if (hours < 21) {
    timeOfDay = "evening";
  } else {
    timeOfDay = "night";
  }
  console.log(jokesData);
  const jokeElements = jokesData.map((joke) => {
    return <Jokes Setup={joke.Setup} Punchline={joke.punchline} />;
  });
  // starting with the map method in react jsx
  const ninjaTurtles = [
    <h2>Donatello</h2>,
    <h2>Michaelangelo</h2>,
    <h2>Rafael</h2>,
    <h2>Leonardo</h2>,
  ];


  // map challenge 
  let theChallenge = data.map((entry)=>{
    return <Entry
   key = {entry.id}
     img = {entry.img}
     title = {entry.title}
     country = {entry.country}
     googleMapsLink = {entry.googleMapsLink}
    dates = {entry.dates}
    text = {entry.text}     
    />
  })
   

  let person = people.map((data)=>{
    return <Person
    id = {data.id}
   data ={data}
    />
  })
  console.log(theChallenge)

  return (
    <>
    <div className="grid grid-cols-2">
         {theChallenge}
     
    </div>
    
   <div className="grid grid-cols-3">
      {person}
      </div>
      <h1> Maps</h1>
      {ninjaTurtles}
      {jokeElements}
    

      <Header />
      <Main />
      <NewApp />
      <div className="grid grid-cols-2">
        <Entry
          img={{
            src: "https://scrimba.com/links/travel-journal-japan-image-url",
            alt: "Mount Fuji",
          }}
          title="Mount Fuji"
          country="Japan"
          googleMapsLink="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
          dates="12 Jan, 2021 - 24 Jan, 2021"
          text="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
        />

        <Entry
          img={{
            src: "https://scrimba.com/links/travel-journal-japan-image-url",
            alt: "Mount Fuji",
          }}
          title="Mount Fuji"
          country="Japan"
          googleMapsLink="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
          dates="12 Jan, 2021 - 24 Jan, 2021"
          text="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
        />

        <Entry
          img={{
            src: "public/10.jpg",
            alt: "Mount Shunji",
          }}
          title="Mount Shunji"
          country="Japan"
          googleMapsLink="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
          dates="12 Jan, 2021 - 24 Jan, 2021"
          text="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
        />

        <Entry
          img={{
            src: "public/10.jpg",
            alt: "Mount Shunji",
          }}
          title="Mount Shunji"
          country="Japan"
          googleMapsLink="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
          dates="12 Jan, 2021 - 24 Jan, 2021"
          text="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
        />
      </div>

      <p>
        The firstname is {firstName} and the last name is {secondName}
      </p>

      <p>Good {timeOfDay}</p>
      <div className="grid grid-cols-2">
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
        {/* jokes */}
      </div>
      <Jokes
        Setup="I got my daughter a fridge for her birthday."
        Punchline="I can't wait to see her face light up when she opens it."
      />

      <Jokes
        Setup="How did the hacker escape the police?"
        Punchline="He just ransomware!"
        upvotes={10}
        isPun={true}
      />

      <Jokes
        Setup="Why don't pirates travel on mountain roads?"
        Punchline="Scurvy."
        upvotes={10}
        isPun={true}
      />

      <Jokes
        Setup="Why do bees stay in the hive in the winter?"
        Punchline="Swarm."
        upvotes={10}
        isPun={true}
        comments={[
          { author: "", text: "", title: "" },
          { author: "", text: "", title: "" },
        ]}
      />

      <Jokes
        Setup="What's the best thing about Switzerland?"
        Punchline="I don't know, but the flag is a big plus!"
        upvotes={10}
        isPun={true}
      />
      {/* starting with the map */}
    </>
  );
}

export default App;
