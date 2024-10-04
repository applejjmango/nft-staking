"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About NFT Staking Hub" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">NFT Staking</span> is
        revolutionizing the world of digital assets, where you can earn passive
        income by simply staking your NFTs. Imagine turning your static NFT
        collection into a{" "}
        <span className="font-extrabold text-white">reward-generating</span>{" "}
        portfolio. With NFT staking,{" "}
        <span className="font-extrabold text-white">staking rewards</span>{" "}
        become a reality as you watch your assets work for you. By utilizing{" "}
        <span className="font-extrabold text-white">staking platforms</span>,
        you can easily grow your rewards while securing your place in the
        evolving blockchain ecosystem. Let's{" "}
        <span className="font-extrabold text-white">explore</span> the exciting
        world of NFT staking by scrolling down
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
