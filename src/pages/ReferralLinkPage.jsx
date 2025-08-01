import React from "react";
import { FaWhatsapp, FaFacebookF, FaLinkedinIn, FaCopy } from "react-icons/fa";
import Navbar from "../components/Navbar";

const ReferralLinkPage = () => {
  const referralLink = "https://yourapp.com/referral/abc123";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    alert("Referral link copied!");
  };

  const handleShare = (platform) => {
    const encodedLink = encodeURIComponent(referralLink);
    let url = "";
    if (platform === "whatsapp") {
      url = `https://wa.me/?text=${encodedLink}`;
    } else if (platform === "facebook") {
      url = `https://www.facebook.com/sharer/sharer.php?u=${encodedLink}`;
    } else if (platform === "linkedin") {
      url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedLink}`;
    }
    window.open(url, "_blank");
  };

  const referrals = [
    { name: "Ankit Sharma", email: "ankit@example.com", status: "Success" },
    { name: "Riya Patel", email: "riya@example.com", status: "Pending" },
    { name: "Devraj Roy", email: "devraj@example.com", status: "Failed" },
  ];

  const getStatusStyle = (status) => {
    if (status === "Success") return "text-green-400 bg-green-800";
    if (status === "Pending") return "text-yellow-300 bg-yellow-800";
    if (status === "Failed") return "text-red-400 bg-red-800";
  };

  return (
    <div className="bg-[#0d0d1d] min-h-screen text-white pt-20 px-4 md:px-12 pb-16">
      <Navbar />

      <div className="flex flex-col items-center mt-24">
        <h1 className="text-4xl font-bold text-cyan-400 mb-8 drop-shadow-[0_0_10px_cyan]">
          Your Unique Referral Link
        </h1>

        <div className="flex items-center bg-[#1a1a2e] p-4 rounded-xl shadow-[0_0_20px_cyan] w-full max-w-2xl">
          <input
            type="text"
            value={referralLink}
            readOnly
            className="bg-transparent w-full text-lg text-white focus:outline-none px-2"
          />
          <button
            onClick={handleCopy}
            className="text-cyan-400 hover:text-white ml-2 p-2 rounded-full hover:bg-cyan-600 transition"
          >
            <FaCopy size={20} />
          </button>
        </div>

        <div className="text-gray-400 my-4 text-xl">or</div>

        <div className="flex gap-6 mb-16">
          <button
            onClick={() => handleShare("whatsapp")}
            className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-[0_0_15px_green]"
          >
            <FaWhatsapp size={24} />
          </button>
          <button
            onClick={() => handleShare("facebook")}
            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-[0_0_15px_blue]"
          >
            <FaFacebookF size={24} />
          </button>
          <button
            onClick={() => handleShare("linkedin")}
            className="bg-blue-400 hover:bg-blue-500 text-white p-3 rounded-full shadow-[0_0_15px_skyblue]"
          >
            <FaLinkedinIn size={24} />
          </button>
        </div>

        {/* 🔄 How It Works Section */}
        <div className="mt-12 w-full max-w-4xl text-left">
          <h2 className="text-2xl font-bold text-violet-400 mb-4">
            How It Works
          </h2>
          <div className="bg-[#1a1a2e] p-6 rounded-xl shadow-[0_0_10px_violet] space-y-4 text-gray-300 text-base leading-relaxed">
            <p>
              <span className="text-pink-400">1.</span> Share your unique
              referral link using WhatsApp, Facebook, or LinkedIn.
            </p>
            <p>
              <span className="text-pink-400">2.</span> When someone joins
              through your link, their referral will be shown below.
            </p>
            <p>
              <span className="text-pink-400">3.</span> As soon as they complete
              their action (e.g. signup or purchase), the status changes from{" "}
              <span className="text-yellow-300">Pending</span> to{" "}
              <span className="text-green-400">Success</span>.
            </p>
            <p>
              <span className="text-pink-400">4.</span> Track all your referrals
              in real-time below.
            </p>
          </div>
        </div>

        {/* 🧾 Referral Status */}
        <div className="w-full max-w-4xl mt-12">
          <h2 className="text-2xl font-bold text-pink-400 mb-6 text-left">
            Referral Status
          </h2>
          <div className="bg-[#1a1a2e] rounded-xl overflow-hidden">
            {referrals.map((referral, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-4 border-b border-[#333] last:border-none"
              >
                <div>
                  <p className="font-semibold text-white">{referral.name}</p>
                  <p className="text-gray-400 text-sm">{referral.email}</p>
                </div>
                <span
                  className={`px-4 py-1 rounded-full text-sm font-medium ${getStatusStyle(
                    referral.status
                  )}`}
                >
                  {referral.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralLinkPage;
