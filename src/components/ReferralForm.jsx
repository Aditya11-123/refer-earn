import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCopy, FaTwitter, FaWhatsapp, FaFacebook } from "react-icons/fa";

const ReferralForm = () => {
  const [copied, setCopied] = useState(false);

  const referralLink = "https://refer.example.com/user123";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.7 } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
  };

  const handleShare = (platform) => {
    const encoded = encodeURIComponent(referralLink);
    const urls = {
      twitter: `https://twitter.com/intent/tweet?text=Join%20me%20and%20earn%20rewards!%20${encoded}`,
      whatsapp: `https://wa.me/?text=Join%20me%20and%20earn%20rewards!%20${encoded}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encoded}`,
    };
    window.open(urls[platform], "_blank");
  };

  return (
    <AnimatePresence>
      <motion.div
        variants={cardVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="relative max-w-md mx-auto bg-[#0d0d1d] border border-cyan-400 rounded-xl p-6 text-center shadow-[0_0_30px_cyan] hover:shadow-[0_0_45px_cyan] transition-all duration-300 transform hover:rotate-y-180 animate-pulse"
      >
        {/* Flip front content */}
        <div className="text-white space-y-4">
          <h4 className="text-xl font-bold text-cyan-300">Your Referral Link</h4>
          <div className="relative bg-[#1a1a2e] p-3 rounded-md border border-pink-400 flex justify-between items-center shadow-[0_0_20px_pink]">
            <span className="text-sm text-pink-300 truncate">{referralLink}</span>
            <button
              onClick={handleCopy}
              className="text-white hover:text-cyan-400 transition ml-4"
            >
              <FaCopy className="text-lg drop-shadow-[0_0_4px_cyan]" />
            </button>
          </div>

          <div className="flex justify-center space-x-4 mt-4">
            <button
              onClick={() => handleShare("whatsapp")}
              className="text-green-400 hover:text-green-300"
              title="Share on WhatsApp"
            >
              <FaWhatsapp className="text-xl drop-shadow-[0_0_4px_green]" />
            </button>
            <button
              onClick={() => handleShare("facebook")}
              className="text-blue-400 hover:text-blue-300"
              title="Share on Facebook"
            >
              <FaFacebook className="text-xl drop-shadow-[0_0_4px_blue]" />
            </button>
            <button
              onClick={() => handleShare("twitter")}
              className="text-cyan-400 hover:text-cyan-300"
              title="Share on Twitter"
            >
              <FaTwitter className="text-xl drop-shadow-[0_0_4px_cyan]" />
            </button>
          </div>
        </div>

        {/* ✅ Toast/Snackbar after copy */}
        <AnimatePresence>
          {copied && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              className="absolute bottom-[-3.5rem] left-1/2 transform -translate-x-1/2 bg-pink-600 text-white px-4 py-2 rounded-full shadow-[0_0_20px_pink] text-sm"
            >
              Referral link copied!
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};

export default ReferralForm;


