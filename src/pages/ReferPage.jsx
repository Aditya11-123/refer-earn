import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import referImage from "../assets/refer-graphic.png";
import ReferralForm from "../components/ReferralForm";
import { motion } from "framer-motion";
import "../styles/glowBackground.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const ReferPage = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/referral-link");
  };

  return (
    <motion.div
      className="relative bg-[#0d0d1d] text-white min-h-screen pt-20 px-4 md:px-12 pb-16 overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      {/* 🔮 Glowing Background Waves */}
      <div className="glow-bg">
        <div className="wave wave1" />
        <div className="wave wave2" />
        <div className="wave wave3" />
      </div>

      <Navbar />

      {/* 🔥 Hero Section */}
      <motion.div
        className="grid md:grid-cols-2 items-center gap-12 mt-12 z-10 relative"
        variants={fadeInUp}
      >
        <motion.div variants={fadeInUp}>
          <h2 className="text-4xl md:text-6xl font-extrabold text-cyan-400 mb-6 leading-tight drop-shadow-[0_0_10px_cyan]">
            Refer & Earn Rewards...
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Invite your friends and earn exciting rewards for every successful signup. It’s simple, fast, and rewarding!
          </p>
          <motion.button
            onClick={handleRedirect}
            className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full font-semibold shadow-[0_0_25px_pink] animate-pulse-glow transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Invite Friends
          </motion.button>
        </motion.div>

        <motion.div className="w-full max-w-xl mx-auto" variants={fadeInUp}>
          <motion.img
            src={referImage}
            alt="Refer and Earn"
            className="w-full h-auto rounded-xl shadow-[0_0_30px_rgba(255,255,255,0.15)]"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </motion.div>

      {/* 💳 Referral Form Section WITHOUT Flip */}
      <motion.section
        className="mt-24 relative z-10"
        variants={fadeInUp}
      >
        <h3 className="text-3xl font-bold text-purple-400 mb-6 text-center">
          Get Your Referral Link
        </h3>
        <div className="w-full max-w-3xl mx-auto">
          <ReferralForm />
        </div>
      </motion.section>

      {/* 💡 How It Works */}
      <motion.section className="mt-24 relative z-10" variants={fadeInUp}>
        <h3 className="text-3xl font-bold text-cyan-300 mb-8 text-center">
          How It Works
        </h3>
        <motion.div className="grid md:grid-cols-3 gap-8 text-center">
          {["Step 1", "Step 2", "Step 3"].map((step, idx) => (
            <motion.div
              key={step}
              className={`bg-[#1a1a2e] p-6 rounded-xl border shadow-[0_0_20px] ${
                idx === 0
                  ? "border-pink-500 shadow-pink-500"
                  : idx === 1
                  ? "border-cyan-500 shadow-cyan-500"
                  : "border-purple-500 shadow-purple-500"
              }`}
              whileHover={{ scale: 1.05 }}
            >
              <h4
                className={`text-xl font-semibold mb-2 ${
                  idx === 0
                    ? "text-pink-400"
                    : idx === 1
                    ? "text-cyan-400"
                    : "text-purple-400"
                }`}
              >
                {step}
              </h4>
              <p className="text-gray-300">
                {idx === 0
                  ? "Get your unique referral link after signing up."
                  : idx === 1
                  ? "Share with friends on WhatsApp, Twitter, etc."
                  : "Earn instant rewards after their signup."}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* ⚡ Benefits */}
      <motion.section className="mt-24 z-10 relative" variants={fadeInUp}>
        <h3 className="text-3xl font-bold text-pink-400 mb-8 text-center">
          Why Refer?
        </h3>
        <motion.div className="grid md:grid-cols-2 gap-10">
          {["Unlimited Earnings", "Instant Payouts"].map((title, idx) => (
            <motion.div
              key={title}
              className={`bg-[#1f1f3d] p-6 rounded-lg border shadow-[0_0_15px] ${
                idx === 0
                  ? "border-cyan-400 shadow-cyan-400"
                  : "border-pink-400 shadow-pink-400"
              }`}
              whileHover={{ scale: 1.03 }}
            >
              <h4 className="text-xl font-bold mb-2">{title}</h4>
              <p className="text-gray-300">
                {idx === 0
                  ? "No limit to how many friends you refer. The more, the better!"
                  : "Rewards are credited immediately after sign-up."}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* CTA Section */}
      <motion.section className="mt-24 text-center z-10 relative" variants={fadeInUp}>
        <h3 className="text-3xl font-bold text-cyan-300 mb-4">
          Start Earning Today!
        </h3>
        <p className="text-gray-400 mb-6">
          Join now and invite your friends in just a few clicks.
        </p>
        <motion.button
          onClick={handleRedirect}
          className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full font-bold shadow-[0_0_25px_pink] animate-pulse-glow"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Join & Refer Now
        </motion.button>
      </motion.section>
    </motion.div>
  );
};

export default ReferPage;
