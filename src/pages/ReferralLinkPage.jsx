import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaWhatsapp, FaFacebookF, FaTwitter, FaCopy } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ReferralLinkPage = () => {
  const [referralData, setReferralData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const [newReferral, setNewReferral] = useState("");
  const [showAll, setShowAll] = useState(false);

  // Fetch data from backend
  const fetchReferralData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/user/1`
      );
      setReferralData(response.data);
    } catch (err) {
      console.error("Error fetching referral data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReferralData();
  }, []);

  // Copy referral link
  const handleCopy = () => {
    if (referralData?.referralLink) {
      navigator.clipboard.writeText(referralData.referralLink);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2500);
    }
  };

  // Add referral manually
  const handleAddReferral = async () => {
    if (!newReferral.trim()) return;
    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/user/1/referrals`,
        { name: newReferral }
      );
      await fetchReferralData();
      setNewReferral("");
    } catch (err) {
      console.error("Error adding referral:", err);
    }
  };

  // Share and add referral in background
  const handleShareWithAdd = (platform) => {
    const name = prompt(`Enter the name of the person you are referring via ${platform}:`);
    if (!name) return;

    const shareUrl = encodeURIComponent(referralData?.referralLink || "");
    let fullLink = "";
    if (platform === "WhatsApp") {
      fullLink = `https://wa.me/?text=${shareUrl}`;
    } else if (platform === "Facebook") {
      fullLink = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
    } else if (platform === "Twitter") {
      fullLink = `https://twitter.com/intent/tweet?text=Check%20this%20referral!%20${shareUrl}`;
    }

    // Open share window instantly
    window.open(fullLink, "_blank");

    // Add referral in backend without blocking
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/user/1/referrals`, { name })
      .then(() => fetchReferralData())
      .catch(err => console.error("Error adding referral:", err));
  };

  return (
    <div className="relative min-h-screen bg-[#0b0b1e] text-white flex items-center justify-center px-4 py-12 overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute w-96 h-96 bg-cyan-400 rounded-full filter blur-3xl opacity-20 animate-pulse top-1/4 left-1/3" />
        <div className="absolute w-80 h-80 bg-pink-500 rounded-full filter blur-2xl opacity-10 animate-ping bottom-1/4 right-1/4" />
      </div>

      {/* Card */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 w-full max-w-2xl bg-[#12122a] border border-cyan-500 shadow-[0_0_20px_cyan] rounded-2xl p-6"
      >
        <h1 className="text-2xl font-bold text-cyan-400 mb-4">Your Referral Link</h1>

        {loading ? (
          <p className="text-cyan-200">Loading...</p>
        ) : referralData ? (
          <>
            {/* Referral link */}
            <motion.div
              whileHover={{ rotateY: 180 }}
              transition={{ duration: 0.6 }}
              className="relative bg-[#1a1a38] p-3 rounded-md border border-cyan-600 shadow-[0_0_12px_cyan] mb-4"
            >
              <div className="flex justify-between items-center">
                <span className="break-all text-sm">{referralData.referralLink}</span>
                <motion.button
                  onClick={handleCopy}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="ml-4 text-cyan-300 hover:text-cyan-500"
                >
                  <FaCopy size={20} />
                </motion.button>
              </div>
              <div className="absolute inset-0 rounded-md border border-cyan-500 opacity-10 animate-pulse pointer-events-none" />
            </motion.div>

            <p className="my-4 text-center text-gray-400">or share via</p>

            {/* Share buttons */}
            <div className="flex justify-center gap-4 mb-6">
              <motion.button
                onClick={() => handleShareWithAdd("WhatsApp")}
                whileHover={{ scale: 1.2 }}
                className="bg-green-500 p-3 rounded-full shadow-[0_0_10px_white] hover:brightness-110"
              >
                <FaWhatsapp />
              </motion.button>
              <motion.button
                onClick={() => handleShareWithAdd("Facebook")}
                whileHover={{ scale: 1.2 }}
                className="bg-blue-600 p-3 rounded-full shadow-[0_0_10px_white] hover:brightness-110"
              >
                <FaFacebookF />
              </motion.button>
              <motion.button
                onClick={() => handleShareWithAdd("Twitter")}
                whileHover={{ scale: 1.2 }}
                className="bg-blue-400 p-3 rounded-full shadow-[0_0_10px_white] hover:brightness-110"
              >
                <FaTwitter />
              </motion.button>
            </div>

            {/* Manual add */}
            <div className="flex mb-6 gap-2">
              <input
                type="text"
                value={newReferral}
                onChange={(e) => setNewReferral(e.target.value)}
                placeholder="Enter name to refer"
                className="flex-1 px-3 py-2 rounded-md text-black"
              />
              <button
                onClick={handleAddReferral}
                className="px-4 py-2 bg-pink-500 rounded-md hover:bg-pink-600"
              >
                Add
              </button>
            </div>

            {/* Referral list with show more */}
            <div>
              <h2 className="text-xl font-semibold text-pink-400 mb-2">Referrals</h2>
              {referralData.referrals && referralData.referrals.length > 0 ? (
                <>
                  <ul className="space-y-2">
                    {(showAll ? referralData.referrals : referralData.referrals.slice(0, 4)).map(
                      (ref, index) => (
                        <motion.li
                          key={index}
                          whileHover={{ scale: 1.02 }}
                          className="p-3 bg-[#2a2a4a] rounded-md flex justify-between items-center border border-cyan-600"
                        >
                          <span>{ref.name}</span>
                          <span
                            className={`text-sm px-2 py-1 rounded ${
                              ref.status === "Success"
                                ? "bg-green-500 text-black"
                                : ref.status === "Pending"
                                ? "bg-yellow-400 text-black"
                                : "bg-red-500 text-white"
                            }`}
                          >
                            {ref.status}
                          </span>
                        </motion.li>
                      )
                    )}
                  </ul>
                  {referralData.referrals.length > 4 && (
                    <button
                      onClick={() => setShowAll(!showAll)}
                      className="mt-3 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded-md shadow-md"
                    >
                      {showAll ? "Show Less" : "Show More"}
                    </button>
                  )}
                </>
              ) : (
                <p className="text-gray-400">No referrals yet.</p>
              )}
            </div>
          </>
        ) : (
          <p className="text-red-400">Error loading referral info.</p>
        )}
      </motion.div>

      {/* Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 bg-green-500 text-black font-semibold rounded-lg shadow-lg z-50"
          >
            ✅ Referral link copied!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ReferralLinkPage;
