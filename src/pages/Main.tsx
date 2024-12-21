import { IoChevronBackOutline } from "react-icons/io5";

const Main = () => {
  const colors = ["#FF9800", "#F57C00", "#E65100"];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="p-4 flex items-center">
        <button className="p-2">
          <IoChevronBackOutline className="text-2xl" />
        </button>
      </div>

      {/* Character Preview */}
      <div className="relative w-full aspect-square bg-gray-50 flex items-center justify-center">
        <div className="w-48 h-48 bg-gray-300 rounded-full" />
      </div>

      {/* Color Selection */}
      <div className="p-6">
        <div className="flex gap-4 justify-center mb-6">
          <button className="w-12 h-12 rounded-full border-4 border-transparent focus:border-blue-500 transition-all">
            <span
              className="w-full h-full rounded-full block"
              style={{ backgroundColor: colors[0] }}
            />
          </button>
          <button className="w-12 h-12 rounded-full border-4 border-transparent focus:border-blue-500 transition-all">
            <span
              className="w-full h-full rounded-full block"
              style={{ backgroundColor: colors[1] }}
            />
          </button>
          <button className="w-12 h-12 rounded-full border-4 border-transparent focus:border-blue-500 transition-all">
            <span
              className="w-full h-full rounded-full block"
              style={{ backgroundColor: colors[2] }}
            />
          </button>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-between items-center mb-6">
          <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
            <IoChevronBackOutline className="text-xl" />
          </button>
          <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
            <IoChevronBackOutline className="text-xl transform rotate-180" />
          </button>
        </div>

        {/* Save Button */}
        <button className="w-full bg-blue-500 text-white h-14 rounded-xl font-medium">
          저장
        </button>
      </div>
    </div>
  );
};

export default Main;
