import React from "react";
import { Camera } from "lucide-react";
import { FaArrowDown } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50">
      <div className="w-[350px] rounded-lg shadow-lg min-h-[650px] bg-gray-100">
        {/* Header */}
        <div className="px-6 py-4 border-b border-dotted bg-white">
          <h2 className="text-xl font-medium text-gray-800">Account Settings</h2>
        </div>

        {/* Profile Info */}
        <div className="px-6 py-4 border-b border-dotted flex items-start space-x-4">
          <div className="relative">
            <img
              src="https://i.pravatar.cc/100"
              alt="profile"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="absolute bottom-0 right-0 bg-white rounded-full w-6 h-6 flex items-center justify-center border border-gray-300">
              <Camera size={14} className="text-gray-600" />
            </div>
          </div>
          <div className="pt-1">
            <h3 className="font-medium text-gray-800">Marry Doe</h3>
            <p className="text-sm text-gray-500">sdqwdqd@edwed.cc</p>
          </div>
        </div>

        {/* Description */}
        <div className="px-6 py-4 border-b border-dotted">
          <p className="text-sm text-gray-600 leading-relaxed">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>
        </div>

        <div className="px-6 py-4 flex flex-col items-center justify-center">
          <h3 className="text-3xl text-gray-700 font-bold">Click below to Chat</h3>
          <FaArrowDown className="text-3xl text-gray-600" />
          <button onClick={()=> navigate('/chat')} className="bg-[#6c25ff] p-2 rounded-full px-4 cursor-pointer">CLick Here</button>
        </div>
      </div>
      
    </div>
  );
};

export default Profile;
