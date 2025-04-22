import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const isFormValid = email.trim() !== "" && password.trim() !== "";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      navigate("/profile");
    }
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9] flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-sm rounded-2xl shadow-xl p-8 min-h-[calc(100vh-20px)] "
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Signin to your<br />PopX account</h2>
        <p className="text-sm text-gray-500 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <div className="mb-4">
          <label className="block text-sm font-medium text-purple-600 mb-1">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-purple-600 mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
        </div>

        <button
          type="submit"
          disabled={!isFormValid}
          className={`w-full py-3 text-white font-semibold rounded-lg transition-all ${
            isFormValid
              ? "bg-purple-600 hover:bg-purple-700"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
