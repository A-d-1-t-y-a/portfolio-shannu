import { useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative, Mousewheel } from "swiper/modules";
import "swiper/css"; // Core styles
import "swiper/css/navigation"; // Navigation styles

import "./skills.scss";
import { dynamicsColors, skills } from "../../utils/constant";

const variants = {
  initial: {
    x: 0,
    y: 1000,
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

const Skills = () => {
  const ref = useRef();

  const handleGenerateColor = (idx) =>
    dynamicsColors[idx % dynamicsColors.length];

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate="animate"
      whileInView="animate"
      className="skills"
      variants={variants}
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
        <Swiper
          loop={true}
          speed={800}
          effect="creative"
          grabCursor={true}
          spaceBetween={20}
          loopedSlides={1.5}
          // direction="vertical"
          loopedSlidesLimit={false}
          autoplay={{
            // delay: 2500,
            disableOnInteraction: false,
          }}
          mousewheel={{
            // invert: false, // Set to true to invert scrolling direction
            sensitivity: 1, // Change this to increase/decrease the sensitivity
            // releaseOnEdges: true, // Set to true to stop scrolling at the first and last slide
          }}
          // creativeEffect={{
          //   limitProgress: 1,
          //   next: {
          //     translate: ["100%", 0, 0],
          //     rotate: [0, 0, -10],
          //     opacity: 0.8,
          //     scale: 0.9,
          //     shadow: true,
          //     // origin: "right center",
          //   },
          //   prev: {
          //     translate: ["-100%", 0, 0],
          //     rotate: [0, 0, 10],
          //     opacity: 0.8,
          //     scale: 0.9,
          //     shadow: true,
          //     // origin: "left center",
          //   },
          //   perspective: true,
          //   progressMultiplier: 1,
          //   shadowPerProgress: false,
          // }}
          modules={[Autoplay, EffectCreative, Mousewheel]}
        >
          {Object.keys(skills).map((skill) => (
            <SwiperSlide
              className="slider"
              // style={{ background: handleGenerateColor(idx) }}
              key={`swiper-slide-${name}`}
            >
              <b className="title">{skill}</b>
              <div className="layout">
                {skills[skill].map((skill) => (
                  <div className="skill" key={`skill-${skill.name}`}>
                    <img src={skill.icon} alt={skill.name} />
                    <p>{skill.name}</p>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
