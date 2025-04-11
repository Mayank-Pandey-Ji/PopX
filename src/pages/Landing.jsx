import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex items-center justify-center bg-gray-50">
      <div className="w-[350px] h-[650px] bg-white rounded-lg shadow-md p-6 flex flex-col justify-between pt-96  ">
        <div>
          <h1 className="text-xl  text-gray-800 mb-2 font-bold">Welcome to PopX</h1>
          <p className="text-md text-gray-500 mb-6 mr-11 font-semibold opacity-75">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <button
            onClick={() => navigate('/signup')}
            className="w-full bg-[#6c25ff] text-white font-semibold py-2 rounded-md mb-3"
          >
            Create Account
          </button>
          <button
            onClick={() => navigate('/login')}
            className="w-full bg-[#cebafb] text-purple-950 font-semibold py-2 rounded-md"
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
