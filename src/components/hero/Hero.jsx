import { motion } from "framer-motion";
import "./hero.scss";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Doki Shanmukha Srinivas</motion.h2>
          <motion.h1 variants={textVariants}>Software Developer</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.a
              href="#Projects"
              variants={textVariants}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.1 }}
            >
              See the Latest Works
            </motion.a>
            <motion.a
              href="#Contact"
              variants={textVariants}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.1 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
          <motion.img
            src="/scroll.png"
            animate="scrollButton"
            variants={textVariants}
          />
        </motion.div>
      </div>
      <motion.div
        initial="initial"
        animate="animate"
        variants={sliderVariants}
        className="slidingTextContainer"
      >
        Java Developer
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
