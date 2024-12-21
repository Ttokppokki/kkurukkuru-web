import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useTokenStore } from "../stores/token";
import toast from "react-hot-toast";

interface AuthResponse {
  accessToken: string;
  refreshToken: string;
}

const Callback = () => {
  const navigate = useNavigate();
  const { setAccessToken, setRefreshToken } = useTokenStore();

  useEffect(() => {
    const handleCallback = async () => {
      const searchParams = new URL(window.location.href).searchParams;
      const code = searchParams.get("code");

      if (!code) {
        toast.error("코드를 찾을 수 없습니다. 다시 시도해주세요.");

        navigate("/login");
        return;
      }

      try {
        const { data } = await axios.post<AuthResponse>(
          "http://localhost:8080/auth/login",
          { code }
        );

        setAccessToken(data.accessToken);
        setRefreshToken(data.refreshToken);

        navigate("/");
      } catch {
        navigate("/login");
      }
    };

    handleCallback();
  }, [navigate, setAccessToken, setRefreshToken]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#1A4D2E]"></div>
    </div>
  );
};

export default Callback;
