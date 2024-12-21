import { useEffect } from "react";

const Splash = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="h-screen flex items-center justify-center bg-white">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-black tracking-tight">
          <span className="text-blue-500">꾸우</span>
          <span className="text-violet-500">꾸우</span>
        </h1>
        <div className="flex justify-center">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        </div>
      </div>
    </div>
  );
};

export default Splash;
