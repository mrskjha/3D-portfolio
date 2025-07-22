import { BallCanvas } from './canvas';
import { SectionWapper } from '../hoc';
import { technologies } from '../constants';
import { motion } from 'framer-motion';
import { styles } from '../styles';

const Tech = () => {
  return (
    <>
      <motion.div className=" ml-2 sm:ml-0">
        <h2 className={`${styles.sectionHeadText} text-[30px] sm:text-[40px] -mt-72 md:mt-0`}>
          Techstack
        </h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 px-4">
        {technologies.map((technology) => (
          <div
            key={technology.name}
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28"
          >
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWapper(Tech, '');
