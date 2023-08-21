import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const About = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="progress-bar-animate"
      />
      <div className="about">
        <h1>About</h1>
        <>
          <article>
            <p>
              I am Jitendra,a <font color="yellow">budding developer</font> and a Information Technology student at <font color="yellow">IIIT SONEPAT</font>
            </p>
            <p>Currently I'm in 3rd year</p>
            
            <h1>Sub-header</h1>
            <p>
            <font color="yellow"> I am a fast learner and currently i am working on upskilling my
            coding and development skills. I am also learning express.js and Mongodb as part of backend development.</font>
            </p>
            {/* <p>
              Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna.
              Mauris id mauris vel arcu commodo venenatis. Aliquam eu risus
              arcu. Proin sit amet lacus mollis, semper massa ut, rutrum mi.
            </p>
            <p>
              Sed sem nisi, luctus consequat ligula in, congue sodales nisl.
            </p>
            <p>
              Vestibulum bibendum at erat sit amet pulvinar. Pellentesque
              pharetra leo vitae tristique rutrum. Donec ut volutpat ante, ut
              suscipit leo.
            </p>
            <h2>Sub-header</h2>
            <p>
              Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum
              fringilla aliquet. Pellentesque auctor vehicula malesuada. Aliquam
              id feugiat sem, sit amet tempor nulla. Quisque fermentum felis
              faucibus, vehicula metus ac, interdum nibh. Curabitur vitae
              convallis ligula. Integer ac enim vel felis pharetra laoreet.
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Pellentesque hendrerit ac augue quis pretium.
            </p>
            <p>
              Morbi ut scelerisque nibh. Integer auctor, massa non dictum
              tristique, elit metus efficitur elit, ac pretium sapien nisl nec
              ante. In et ex ultricies, mollis mi in, euismod dolor.
            </p>
            <p>Quisque convallis ligula non magna efficitur tincidunt.</p>
            <p>
              Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna.
              Mauris id mauris vel arcu commodo venenatis. Aliquam eu risus
              arcu. Proin sit amet lacus mollis, semper massa ut, rutrum mi.
            </p>
            <p>
              Sed sem nisi, luctus consequat ligula in, congue sodales nisl.
            </p>
            <p>
              Vestibulum bibendum at erat sit amet pulvinar. Pellentesque
              pharetra leo vitae tristique rutrum. Donec ut volutpat ante, ut
              suscipit leo.
            </p>
            <h2>Sub-header</h2>
            <p>
              Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum
              fringilla aliquet. Pellentesque auctor vehicula malesuada. Aliquam
              id feugiat sem, sit amet tempor nulla. Quisque fermentum felis
              faucibus, vehicula metus ac, interdum nibh. Curabitur vitae
              convallis ligula. Integer ac enim vel felis pharetra laoreet.
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Pellentesque hendrerit ac augue quis pretium.
            </p>
            <p>
              Morbi ut scelerisque nibh. Integer auctor, massa non dictum
              tristique, elit metus efficitur elit, ac pretium sapien nisl nec
              ante. In et ex ultricies, mollis mi in, euismod dolor.
            </p>
            <p>Quisque convallis ligula non magna efficitur tincidunt.</p> */}
          </article>
        </>
      </div>
    </>
  );
};

export default About;
