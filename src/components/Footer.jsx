import React from 'react'
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWapper } from "../hoc";
const Footer = () => {
  return (
    <div className='flex justify-center items-center '>
      <motion.div>
        <p className={styles.sectionSubText}>© 2024 Copyright: sunny kumar</p>
        
      </motion.div>
    </div>
  )
}

export default SectionWapper(Footer,"");
