import React, { useRef } from "react";
import TypeWriter from "typewriter-effect";
import me from "./../assets/logo.png";
import { animate, motion } from "framer-motion";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";

const Home = () => {
  const clientCount = useRef(null);

  const animationClientCount = () => {
    animate(0, 100, {
      duration: 1,
      onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
    });
  };

  const projectCount = useRef(null);

  const animationProjectCount = () => {
    animate(0, 300, {
      duration: 1,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };

  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br /> Sakshi Chavre
          </motion.h1>
          <TypeWriter
            options={{
              strings: ["A Developer", "A Designer"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />
          <div>
            <a href="mailto:chavresakshi@gmail.com">Hire Me</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>
          <article>
            <p>
              +
              <motion.span
                ref={clientCount}
                whileInView={animationClientCount}
              ></motion.span>
            </p>
            <span>Clients Worldwide</span>
          </article>
          <aside>
            <article>
              <p>
                +
                <motion.span
                  ref={projectCount}
                  whileInView={animationProjectCount}
                ></motion.span>
              </p>
              <span>Projects Done</span>
            </article>
            <article data-special>
              <p>Contact</p>
              <span>chavresakshi@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="sakshi" />
      </section>

      <BsChevronDown />
    </div>
  );
};

export default Home;
