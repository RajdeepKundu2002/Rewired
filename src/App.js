import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Gallery from './Components/Gallery';
import ContactUs from './Components/ContactUs';
import About from './Components/About';
import bgImg from './Components/images/bg.png';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <div style={{ backgroundImage: `url(${bgImg})`, backgroundPosition: 'center', position:"fixed" , backgroundSize: 'cover', minHeight:'100%', minWidth:'100%' }}>
      <Router>
        <Navbar />
        <div className="container my-5">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/gallery">
              <Gallery />
            </Route>
            <Route path="/contact">
              <ContactUs />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
export default App;