import { useForm } from "react-hook-form";

const Nickname = () => {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      username: "",
    },
  });

  const username = watch("username");
  const isValid = username.trim().length > 0;

  const onSubmit = (data: { username: string }) => {
    if (!isValid) return;
    // 여기에 사용자 이름 처리 로직 추가
    console.log(data.username);
    // navigate('/next-page');
  };

  return (
    <div className="flex flex-col min-h-screen bg-white relative overflow-x-hidden">
      {/* Header */}
      <div className="w-full z-10">
        <div className="w-full pt-10 px-6 flex flex-col items-center">
          <h1 className="text-[30px] font-bold leading-none tracking-tight mb-2">
            <span className="text-[#940000] mr-[1px] text-4xl">꾸</span>
            <span className="text-[#0B4619] mr-[1px] text-4xl">루</span>
            <span className="text-[#940000] mr-[1px] text-4xl">꾸</span>
            <span className="text-[#0B4619] text-4xl">루</span>
          </h1>
          <p className="text-xl text-[#666666] font-normal tracking-tight">
            닉네임을 작성해 주세요
          </p>
        </div>
      </div>

      <div className="relative flex-1 flex flex-col">
        {/* Background with curve */}
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

        {/* Form Section */}
        <div className="relative flex-1 flex justify-center items-start pt-8">
          <div className="w-full px-6">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
              <input
                {...register("username")}
                type="text"
                placeholder="닉네임을 입력하세요!"
                className="w-full h-[54px] px-4 rounded-[14px] border border-[#FFD1D1] bg-white bg-opacity-95 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#FF9999] shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
              />
            </form>
          </div>
        </div>

        {/* Bottom Button Section */}
        <div className="relative z-10 px-6 mb-10">
          <button
            onClick={handleSubmit(onSubmit)}
            disabled={!isValid}
            className={`relative w-full h-[54px] rounded-[14px] font-medium shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition-shadow duration-200 ${
              isValid
                ? "bg-[#F6A2A2] text-white cursor-pointer"
                : "bg-gray-200 text-gray-600 cursor-not-allowed"
            }`}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[18px] font-medium">다음</span>
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

export default Nickname;
