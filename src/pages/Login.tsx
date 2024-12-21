import { RiKakaoTalkFill } from "react-icons/ri";

const Login = () => {
  const KAKAO_CLIENT_ID = "840a2bdb9d990844770a7bca682d1f59";
  const REDIRECT_URI = "http://localhost:5173/callback";

  const handleKakaoLogin = async () => {
    const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    window.location.href = kakaoAuthUrl;
  };

  return (
    <div className="flex flex-col min-h-screen bg-white relative overflow-x-hidden">
      <div className="w-full z-10">
        <div className="w-full pt-10 px-6 flex flex-col items-center">
          <h1 className="text-[30px] font-bold leading-none tracking-tight mb-2">
            <span className="text-[#940000] mr-[1px] text-4xl">꾸</span>
            <span className="text-[#0B4619] mr-[1px] text-4xl">루</span>
            <span className="text-[#940000] mr-[1px] text-4xl">꾸</span>
            <span className="text-[#0B4619] text-4xl">루</span>
          </h1>
          <p className="text-xl text-[#666666] font-normal tracking-tight">
            크리스마스, 친구에게 나만의 루돌프를
          </p>
        </div>
      </div>

      <div className="relative flex-1 flex flex-col">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="absolute bottom-0 w-full h-[62%] bg-[#1A4D2E]">
            <div
              className="absolute -top-[50px] left-1/2 -translate-x-1/2 w-[150%] h-[100px]"
              style={{
                background: "#1A4D2E",
                borderTopLeftRadius: "50% 100%",
                borderTopRightRadius: "50% 100%",
              }}
            />
          </div>
        </div>

        <div className="relative flex-1 flex justify-center items-center">
          <div className="relative w-[300px] h-[300px] -mt-6">
            <div className="absolute inset-0 rounded-full overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.1)]">
              <img
                src="login.png"
                alt="Character"
                className="w-full h-full object-cover bg-white"
              />
            </div>

            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[300px]">
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[220px] h-12"
                style={{
                  background:
                    "radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 70%)",
                }}
              />
              <div
                className="absolute top-2 left-1/2 -translate-x-1/2 w-[280px] h-16"
                style={{
                  background:
                    "radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0) 80%)",
                }}
              />
            </div>
          </div>
        </div>

        <div className="relative z-10 px-6 mb-10">
          <button
            onClick={handleKakaoLogin}
            className="relative w-full bg-[#FEE500] h-[54px] rounded-[14px] shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition-shadow duration-200"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute left-4">
                <RiKakaoTalkFill className="text-[#191919] text-[24px]" />
              </div>
              <span className="text-[#191919] text-[18px] font-medium">
                카카오로 시작하기
              </span>
            </div>
          </button>
        </div>

        <div className="relative z-10 h-[34px] flex justify-center">
          <div className="w-[134px] h-1 bg-black rounded-full opacity-30" />
        </div>
      </div>
    </div>
  );
};

export default Login;
