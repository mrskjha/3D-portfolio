import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { useRef } from "react";
import { styles } from "../styles"; // Ensure this file exists and exports styles
import { fadeIn, textVariant } from "../utils/motion"; // Ensure these utilities exist

const SECTION_HEIGHT = 1500; // Define SECTION_HEIGHT

const Certificate = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="pl-52 mt-12">
        <p className={styles.sectionSubText}>Achievements</p>
        <h2 className={styles.sectionHeadText}>Certificates</h2>
      </motion.div>

      <div className="w-full flex pl-52">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Here are some of the Courses I have completed.
        </motion.p>
      </div>

      <div
        style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
        className="relative w-full top-0 pl-32"
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
      className="sticky top-0 h-screen w-full"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage:
          "url(https://i.postimg.cc/mBDMhGLS/Post-Man-API.png)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4">
      <ParallaxImg
        src="https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~41OYQCUHYQXF/CERTIFICATE_LANDING_PAGE~41OYQCUHYQXF.jpeg"
        alt="An example of a space launch"
        start={-200}
        end={200}
        className="w-1/2"
      />
      <ParallaxImg
        src="https://i.postimg.cc/MHs3p1V4/Sunny-Kumar-394620.png"
        alt="An example of a space launch"
        start={200}
        end={-250}
        className="mx-auto w-2/3"
      />
      <ParallaxImg
        src="https://i.postimg.cc/J42dwc1H/JAVA.png"
        alt="Orbiting satellite"
        start={-200}
        end={200}
        className="ml-auto w-1/3"
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
      className={className}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};

export default Certificate;
