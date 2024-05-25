import { useRef } from "react";
import { motion } from "framer-motion";

import "./services.scss";
import { skills } from "../../utils/constant";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate="animate"
      variants={variants}
      className="services"
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Skills
          <br /> and Expertise
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Skills</motion.b> &
            <span style={{ color: "orange", marginLeft: "10px" }}>
              Expertise
            </span>
          </h1>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        {skills.map(({ name, icon }) => (
          <motion.div
            className="box"
            key={`skills-${name}`}
            variants={variants}
            whileHover={{ background: "lightgray", color: "black" }}
          >
            <h2>{name}</h2>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
