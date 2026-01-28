import { BrowserRouter } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
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
  // 1. Setup Scroll Progress Logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        
        {/* 2. Reading Progress Bar */}
        <motion.div 
          className="fixed top-0 left-0 right-0 h-[5px] bg-[#915eff] origin-[0%] z-[100]" 
          style={{ scaleX }} 
        />

        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>

        {/* 3. Wrapped Sections for Scroll Reveal */}
        <SectionContainer>
          <About />
        </SectionContainer>

        <SectionContainer>
          <Certificate />
        </SectionContainer>

        <SectionContainer>
          <Tech />
        </SectionContainer>

        <SectionContainer>
          <Works />
        </SectionContainer>

        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
};

// A helper component to handle "Fade In on Scroll" for every section
const SectionContainer = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.25 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default App;