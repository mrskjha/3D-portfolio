import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Footer from "./components/Footer";
import Certificate from "./components/Certificate";
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-primary bg-[url('/src/assets/herobg.png')]  bg-cover bg-no-repeat bg-center h-[auto] min-h-screen relative">
          <Navbar />
          <Hero />
        </div>
        <About />
        {/* <Experience/> */}
        <Certificate />
        <Tech />
        <Works />
        {/* <Feedbacks/> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
