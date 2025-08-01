import React from "react";
import { useNavigate } from "react-router-dom"; // Import this
import Navbar from "../components/Navbar";
import referImage from "../assets/refer-graphic.png"; // Put your image in /assets/

const ReferPage = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleRedirect = () => {
    navigate("/referral-link");
  };

  return (
    <div className="bg-[#0d0d1d] text-white min-h-screen pt-20 px-4 md:px-12 pb-16">
      <Navbar />

      {/* Hero Section */}
      <div className="grid md:grid-cols-2 items-center gap-12 mt-12">
        {/* Left */}
        <div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-cyan-400 mb-6 leading-tight drop-shadow-[0_0_10px_cyan]">
            Refer & Earn Rewards...
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Invite your friends and earn exciting rewards for every successful signup. It’s simple, fast, and rewarding!
          </p>
          <button
            onClick={handleRedirect}
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full font-semibold shadow-[0_0_25px_pink] transition animate-pulse"
          >
            Invite Friends 
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full max-w-xl mx-auto">
          <img
            src={referImage}
            alt="Refer and Earn"
            className="w-full h-auto rounded-xl shadow-[0_0_30px_rgba(255,255,255,0.15)]"
          />
        </div>
      </div>

      {/* How It Works */}
      <section className="mt-24">
        <h3 className="text-3xl font-bold text-cyan-300 mb-8 text-center">How It Works</h3>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-[#1a1a2e] p-6 rounded-xl border border-pink-500 shadow-[0_0_20px_pink]">
            <h4 className="text-xl font-semibold mb-2 text-pink-400">Step 1</h4>
            <p className="text-gray-300">Get your unique referral link after signing up.</p>
          </div>
          <div className="bg-[#1a1a2e] p-6 rounded-xl border border-cyan-500 shadow-[0_0_20px_cyan]">
            <h4 className="text-xl font-semibold mb-2 text-cyan-400">Step 2</h4>
            <p className="text-gray-300">Share with friends on WhatsApp, Twitter, etc.</p>
          </div>
          <div className="bg-[#1a1a2e] p-6 rounded-xl border border-purple-500 shadow-[0_0_20px_purple]">
            <h4 className="text-xl font-semibold mb-2 text-purple-400">Step 3</h4>
            <p className="text-gray-300">Earn instant rewards after their signup.</p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mt-24">
        <h3 className="text-3xl font-bold text-pink-400 mb-8 text-center">Why Refer?</h3>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-[#1f1f3d] p-6 rounded-lg border border-cyan-400 shadow-[0_0_15px_cyan]">
            <h4 className="text-xl font-bold mb-2">Unlimited Earnings</h4>
            <p className="text-gray-300">No limit to how many friends you refer. The more, the better!</p>
          </div>
          <div className="bg-[#1f1f3d] p-6 rounded-lg border border-pink-400 shadow-[0_0_15px_pink]">
            <h4 className="text-xl font-bold mb-2">Instant Payouts</h4>
            <p className="text-gray-300">Rewards are credited immediately after sign-up.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 text-center">
        <h3 className="text-3xl font-bold text-cyan-300 mb-4">Start Earning Today!</h3>
        <p className="text-gray-400 mb-6">Join now and invite your friends in just a few clicks.</p>
        <button
          onClick={handleRedirect}
          className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full font-bold shadow-[0_0_25px_pink] transition-all"
        >
          Join & Refer Now
        </button>
      </section>
    </div>
  );
};

export default ReferPage;
