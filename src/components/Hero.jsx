import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
  <div
    className={`${styles.paddingX} absolute inset-0 top-[100px] sm:top-[120px] max-w-7xl mx-auto flex flex-col sm:flex-row items-start gap-5`}
  >
    <div className="flex flex-col justify-center items-center sm:mt-10 mt-5">
      <div className="w-5 h-5 rounded-full bg-[#915eff]" />
      <div className="w-1 h-20 sm:h-80 violet-gradient" />
    </div>

    <div>
      <h1 className={`${styles.heroHeadText} text-white text-[32px] sm:text-[48px] md:text-[60px]`}>
        Hi, I'm <span className="text-[#915eff]">Sunny</span>
      </h1>
      <p className={`${styles.heroSubText} mt-2 text-white-100 text-[16px] sm:text-[20px]`}>
       Turning ideas into <br className="sm:block hidden" />
       impact...
      </p>
    </div>
  </div>

  <ComputersCanvas />

  <div className="absolute bottom-32 sm:bottom-24 md:bottom-24 lg:-bottom-16 w-full flex justify-center items-center">
    <a href="#about">
      <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
        <motion.div
          animate={{ y: [0, 24, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
          className="w-3 h-3 bg-secondary rounded-full mb-1"
        />
      </div>
    </a>
  </div>
</section>

  );
};

export default Hero;
