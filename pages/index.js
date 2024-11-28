import Gallery from "@/components/Gallery";
// import TextWithVideo from "@/components/GrpahicDesign";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import NavigationNumbers from "@/components/NavigationNumbers";
import TextMaskVideo from "@/components/VIdeoText";
import WelcomeCard from "@/components/WelcomeCard";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
export default function Index() {
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    if (!flag) {
      setFlag(true);
    }
  }, []);
  return (
    <div className="bg-black text-white pb-24">
      <Hero />
      <WelcomeCard />
      {flag && (
        <div className=" ">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -1500 },
            }}
          >
            <TextMaskVideo
              videoSrc="https://res.cloudinary.com/dvl0qtkko/video/upload/v1732803357/graphic_xxmkk9.mp4"
              text="GRAPHIC DESIGN"
              tracking={0}
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -1500 },
            }}
          >
            <TextMaskVideo
              videoSrc="https://res.cloudinary.com/dvl0qtkko/video/upload/v1732803221/vide_rv0d60.mp4"
              text="VIDEOGRAPHY"
              tracking={10}
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -1500 },
            }}
          >
            <TextMaskVideo
              videoSrc="https://res.cloudinary.com/dvl0qtkko/video/upload/v1732775255/video_kev0pf.mp4"
              text="PHOTOGRAPHY"
              tracking={10}
            />
          </motion.div>
        </div>
      )}
      <Gallery />
      <NavigationNumbers />
    </div>
  );
}