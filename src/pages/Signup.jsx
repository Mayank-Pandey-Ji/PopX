// src/pages/Signup.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/profile');
  };
  
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50">
      <div className="w-96 bg-white rounded-lg shadow-lg p-8 min-h-[calc(100vh-20px)]">
        <h2 className="text-2xl font-bold mb-8">Create your<br />PopX account</h2>
        
        <div className="mb-5 relative">
          <label className="absolute -top-2.5 left-8 px-1 text-purple-600 text-sm bg-white">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input 
            placeholder="Enter your full name" 
            className="w-full p-2 border border-gray-400 rounded pt-3 placeholder:text-sm "
            required 
          />
        </div>
        
        <div className="mb-5 relative">
          <label className="absolute -top-2.5 left-8 px-1 text-purple-600 text-sm bg-white">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input 
            placeholder="Enter your phone number" 
            className="w-full p-2 border border-gray-400 rounded pt-3 placeholder:text-sm " 
            required
          />
        </div>
        
        <div className="mb-5 relative">
          <label className="absolute -top-2.5 left-8 px-1 text-purple-600 text-sm bg-white">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input 
            placeholder="Enter your email address" 
            type="email" 
            className="w-full p-2 border border-gray-400 rounded pt-3 placeholder:text-sm "
            required 
          />
        </div>
        
        <div className="mb-5 relative">
          <label className="absolute -top-2.5 left-8 px-1 text-purple-600 text-sm bg-white">
            Password <span className="text-red-500">*</span>
          </label>
          <input 
            placeholder="Enter your password" 
            type="password" 
            className="w-full p-2 border border-gray-400 rounded pt-3 placeholder:text-sm "
            required 
          />
        </div>
        
        <div className="mb-5 relative">
          <label className="absolute -top-2.5 left-8 px-1 text-purple-600 text-sm bg-white">
            Company Name
          </label>
          <input 
            placeholder="Marry Doe" 
            className="w-full p-2 border border-gray-400 rounded pt-3 placeholder:text-sm " 
          />
        </div>
        
        <div className="mb-8">
          <p className="mb-2">Are you an Agency? <span className="text-red-500">*</span></p>
          <div className="flex items-center">
            <label className="inline-flex items-center mr-6">
              <input 
                type="radio" 
                name="agency" 
                value="yes" 
                className="form-radio h-4 w-4 text-purple-600"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input 
                type="radio" 
                name="agency" 
                value="no" 
                className="form-radio h-4 w-4 text-purple-600"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>
        
        <button 
          type="submit" 
          className="w-full bg-purple-600 text-white py-3 rounded font-medium" 
          onClick={handleSubmit}
        >
          Create Account
        </button>
      </div>
    </div>
  );
};

export default Signup;