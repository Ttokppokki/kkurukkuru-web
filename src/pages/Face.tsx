import React from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import Shadow from "../../public/Shadow";

const Face = () => {
    return (
        <div className="overflow-hidden flex h-screen flex-col">
            <Header />
            <div className="relative px-6 bg-white flex-1 flex flex-col items-center">
                <span className="text-black text-xl font-bold text-center mt-[40px]">
                    루돌프의 얼굴을 선택해 주세요!
                </span>

                {/* 캐릭터와 그림자 */}
                <div className="relative flex flex-col items-center mt-[80px]">
                    <div className="relative z-20">
                        <img
                            src="none.png"
                            alt="Character"
                            className="object-contain w-[265px]"
                        />
                    </div>

                    {/* 그림자 */}
                    <div
                        className="absolute z-10"
                        style={{
                            bottom: "-25px",
                        }}
                    >
                        <Shadow />
                    </div>
                </div>

                {/* 하단 배경 */}
                <div className="-z-1 absolute w-full h-full overflow-hidden">
                    <div className="-z-1 absolute bottom-0 w-full h-[50%] bg-[#1A4D2E]">
                        <div
                            className="-z-1 absolute -top-[50px] left-1/2 -translate-x-1/2 w-[150%] h-[100px]"
                            style={{
                                background: "#1A4D2E",
                                borderTopLeftRadius: "50% 100%",
                                borderTopRightRadius: "50% 100%",
                            }}
                        />
                    </div>
                </div>
            </div>

            <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 w-[80%]">
                <Button text="다음" isEnabled />
            </div>
        </div>
    );
};

export default Face;
