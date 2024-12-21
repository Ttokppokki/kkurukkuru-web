import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Callback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleCallback = async () => {
      const code = new URL(window.location.href).searchParams.get("code");

      if (code) {
        try {
          const response = await axios.post(
            "http://localhost:8080/auth/login",
            { code },
            { withCredentials: true }
          );

          if (response.data.accessToken) {
            localStorage.setItem("accessToken", response.data.accessToken);
            navigate("/");
          }
        } catch (error) {
          console.error("Login failed:", error);
          navigate("/login");
        }
      }
    };

    handleCallback();
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#1A4D2E]"></div>
    </div>
  );
};

export default Callback;
