import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { useRef } from "react";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const SECTION_HEIGHT = 1500;

const Certificate = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="px-4 sm:px-10 lg:pl-32 mt-12">
        <p className={`${styles.sectionSubText} text-sm sm:text-base`}>Achievements</p>
        <h2 className={`${styles.sectionHeadText} text-[30px] sm:text-[40px]`}>
          Certificates
        </h2>
      </motion.div>

      <div className="w-full flex px-4 sm:px-10 lg:pl-32">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[15px] sm:text-[17px] max-w-3xl leading-[26px] sm:leading-[30px]"
        >
          Here are some of the Courses I have completed.
        </motion.p>
      </div>

      <div
        style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
        className="relative w-full top-0 px-4 sm:px-10 lg:pl-32"
      >
        <CenterImage />
        <ParallaxImages />
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
      </div>
    </>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, SECTION_HEIGHT], [25, 0]);
  const clip2 = useTransform(scrollY, [0, SECTION_HEIGHT], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );

  return (
    <motion.div
  className=" top-0 h-screen w-full"
  initial={{ opacity: 0, scale: 1.05 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 2, ease: "easeInOut" }}
  style={{
    clipPath,
    backgroundSize: "cover", // Ensures full coverage
    backgroundImage: "url(https://i.postimg.cc/mBDMhGLS/Post-Man-API.png)",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#1a1a1a", // fallback for slow image load
  }}
/>


  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <ParallaxImg
        src="https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~41OYQCUHYQXF/CERTIFICATE_LANDING_PAGE~41OYQCUHYQXF.jpeg"
        alt="Coursera Certificate"
        start={-200}
        end={200}
        className="w-full sm:w-1/2 mb-8"
      />
      <ParallaxImg
        src="https://i.postimg.cc/MHs3p1V4/Sunny-Kumar-394620.png"
        alt="Google Certificate"
        start={200}
        end={-250}
        className="w-full sm:w-2/3 mx-auto mb-8"
      />
      <ParallaxImg
        src="https://i.postimg.cc/J42dwc1H/JAVA.png"
        alt="Java Certificate"
        start={-200}
        end={200}
        className="w-full sm:w-1/3 ml-auto"
      />
    </div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${-end}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={`${className} rounded-xl object-contain`}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};

export default Certificate;
