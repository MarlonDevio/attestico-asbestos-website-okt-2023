import "./App.css";
import {
  About,
  Contact,
  ExtraInfo,
  Faq,
  Header,
  Home,
  HowItWorks,
  Pricing,
  Services,
} from "./components/index.js";
import { useRef } from "react";

function App() {
  const contacRef = useRef(null);

  return (
    <>
      <div className="construction">
        <div>WEBSITE UNDER CONSTRUCTION.</div>
        Attestico Contact: 0488 48 09 33
      </div>
      <Header targetRef={contacRef} />
      <Home />
      <HowItWorks />
      <ExtraInfo />
      {/*<Services />*/}
      <Pricing targetRef={contacRef} />
      {/*<About />*/}
      {/*<Faq />*/}
      <Contact targetRef={contacRef} />
      <div className="construction">
        <div>WEBSITE UNDER CONSTRUCTION.</div>
        Attestico Contact: 0488 48 09 33
      </div>
    </>
  );
}

export default App;
