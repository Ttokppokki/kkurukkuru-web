const Main = () => {
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight">
            <span className="text-blue-500">꾸우</span>
            <span className="text-violet-500">꾸우</span>
          </div>
          <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
            <span className="text-lg">🎨</span>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 text-center space-y-2">
          <h2 className="text-xl font-bold text-gray-800">환영합니다! 👋</h2>
          <p className="text-gray-600">꾸우꾸우와 함께 즐거운 시간 보내세요</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
