import { SiKakaotalk } from "react-icons/si";

const Login = ({ onLogin }: { onLogin: () => void }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-sm space-y-8">
        <div className="text-center space-y-4">
          <div className="inline-block p-4 bg-blue-50 rounded-2xl mb-2">
            <div className="text-5xl font-black tracking-tight">
              <span className="text-blue-500">꾸우</span>
              <span className="text-violet-500">꾸우</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <button
            onClick={onLogin}
            className="w-full bg-[#FEE500] text-[#191919] font-medium h-14 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center justify-center gap-2"
          >
            <SiKakaotalk className="text-xl" />
            <span>카카오로 시작하기</span>
          </button>

          <p className="text-center text-sm text-gray-500">
            로그인하고 더 많은 기능을 사용해보세요!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
