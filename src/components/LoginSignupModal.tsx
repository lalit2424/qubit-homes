"use client";

import { useState } from "react";

const LoginSignupModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [activeTab, setActiveTab] = useState<"signin" | "signup">("signin");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg">
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b pb-3">
          <h5 className="text-xl font-semibold">Welcome to Qubit Homes</h5>
          <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>✖</button>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-4 mt-4">
          <button
            className={`py-2 px-4 ${activeTab === "signin" ? "border-b-2 border-blue-500 font-semibold" : "text-gray-500"}`}
            onClick={() => setActiveTab("signin")}
          >
            Sign In
          </button>
          <button
            className={`py-2 px-4 ${activeTab === "signup" ? "border-b-2 border-blue-500 font-semibold" : "text-gray-500"}`}
            onClick={() => setActiveTab("signup")}
          >
            New Account
          </button>
        </div>

        {/* Form Sections */}
        <div className="mt-4">
          {activeTab === "signin" ? (
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input type="email" className="w-full p-2 border rounded" placeholder="Enter Email" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input type="password" className="w-full p-2 border rounded" placeholder="Enter Password" required />
              </div>
              <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded mt-4">
                Sign in
              </button>
            </form>
          ) : (
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input type="email" className="w-full p-2 border rounded" placeholder="Enter Email" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input type="password" className="w-full p-2 border rounded" placeholder="Enter Password" required />
              </div>
              <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded mt-4">
                Create Account
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginSignupModal;
