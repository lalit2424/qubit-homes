"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="pt-40 pb-40">
      <div className="container">
        <div className="row">
          {/* Left Content */}
          <div className="col-lg-6 col-xl-4">
            <motion.div
              className="about-box-1 pe-4 mt100 mt0-lg mb30-lg"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="title mb30">Let’s find the right selling option for you</h2>
              <p className="text mb25 fz15">
                As the complexity of buildings increases, the field of architecture evolves.
              </p>
              <div className="list-style1 mb50">
                <ul>
                  <li>
                    <i className="far fa-check text-white bgc-dark fz15"></i> Find excellent deals
                  </li>
                  <li>
                    <i className="far fa-check text-white bgc-dark fz15"></i> Friendly host & Fast support
                  </li>
                  <li>
                    <i className="far fa-check text-white bgc-dark fz15"></i> List your own property
                  </li>
                </ul>
              </div>
              <a href="page-property-single-v1.html" className="ud-btn btn-white2">
                Learn More <i className="fal fa-arrow-right-long"></i>
              </a>
            </motion.div>
          </div>

          {/* Right Image Section */}
          <div className="col-lg-9 col-xl-8 col-xxl-7 offset-xxl-1">
            <motion.div
              className="position-relative mb35 mb0-sm"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="img-box-1 d-inline-block me-0">
                <Image className="img-1" src="/images/about-1.jpg" alt="About 1" width={270} height={350} />
              </div>
              <div className="img-box-2 d-inline-block me-0">
                <Image className="img-1" src="/images/about-2.jpg" alt="About 2" width={370} height={520} />
              </div>
              <div className="img-box-3">
                <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                  <Image className="img-1" src="/images/about-1.png" alt="About 3" width={276} height={146} />
                </motion.div>
              </div>
              <div className="img-box-4">
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 5 }}>
                  <Image className="img-1" src="/images/element-1.png" alt="Element 1" width={193} height={193} />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
