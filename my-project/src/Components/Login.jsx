import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import img from "../assets/vault.png"
//import { useUser, userHasWallet } from "@civic/auth-web3/react";

const Login = () => {
  const { user, signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [manualLoginTriggered, setManualLoginTriggered] = useState(false);
  const [loading, setLoading] = useState(false);
 
  useEffect(() => {
    if (user && manualLoginTriggered) {
      navigate("/");
    }
  }, [user, navigate, manualLoginTriggered]);

  const handleLogin = async () => {
    setManualLoginTriggered(true);
    setLoading(true);
    try {
        await signIn();
         
           //navigate("/");
      // navigation will happen in useEffect
    } catch (err) {
      console.error("Login failed:", err);
      setError("Failed to connect with Civic.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center w-full bg-black text-white lg:rounded-4xl  lg:w-[70vw]">
      <div className=" flex justify-center items-center w-full flex-col text-center">
        <h1 className="text-4xl my-8 ">Welcome To</h1>
        <img src={img} alt="" className="w-[40vw] lg:w-[20vw]" />

        <div className="flex text-4xl font-bold justify-center my-6 gap-3 items-center">
          <h2>PROOF</h2>

          <h2>VAULT</h2>
        </div>
        <div className="my-6">
          <p className="">
            A system that store, manage, and share cryptographic proofs
            <br /> securely and privately
          </p>
        </div>
        {loading ? (
          <p>Connecting to Civic...</p>
        ) : (
          <button
            onClick={handleLogin}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-xl">
            Log In with Civic
          </button>
        )}
        {manualLoginTriggered && error && (
          <p className="text-red-400 mt-4">{error}</p>
        )}
      </div>
    </div>
  );
};

export default Login;
