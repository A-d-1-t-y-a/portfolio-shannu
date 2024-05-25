import { motion } from "framer-motion";

import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          style={{ marginLeft: "10px" }}
          transition={{ duration: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.5 }}
        >
          Shanu Dev
        </motion.span>
        <div className="social">
          <a href="https://www.facebook.com/share/vrYd5U9kcWDQKR6T/?mibextid=LQQJ4d">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="https://www.instagram.com/i_am_d_shannu?igsh=MXU0b2hyYTRnaXllZg%3D%3D&utm_source=qr">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/shanmukha-srinivas-b08a6b163/">
            <img src="/linkedin.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
