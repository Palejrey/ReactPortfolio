import Navbar from "./components/Navbar";
import AboutMe from "./Pages/AboutMe";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Resume from "./Pages/Resume";
import Portfolio from "./Pages/Portfolio";
import Footer from "./components/Footer";

/*const projects = [
  {
    id: 1,
    name: "Project-1",
    completed: true
  },
  {
    id: 2,
    name: "Project-2",
    completed: true
  },
  {
    id: 3,
    name: "Project-3",
    completed: true
  },
  {
    id: 4,
    name: "Project-4",
    completed: true
  },
  {
    id: 5,
    name: "Project-5",
    completed: true
  },
  {
    id: 6,
    name: "Project-6",
    completed: true
  }
];*/

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home/>;
      break
    case "/aboutMe":
      component = <AboutMe/>;
      break
    case "/portfolio":
      component = <Portfolio/>;
      break
    case "/contact":
      component = <Contact/>;
      break
    case "/resume":
      component = <Resume/>;
      break
  }
  return  (
    <div>
      <Navbar />
      <div className="container">{component}</div>
      <Footer />   
    </div>
  )
}

export default App;
