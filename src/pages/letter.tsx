import React from "react";
import Header from "../components/Header";
import Button from "../components/Button";

const Letter = () => {
    return (
        <div className="overflow-hidden flex h-screen flex-col">
            <Header />
            <div className="p-6 bg-white">
                <div className="mt-5">
                    <span className="text-[#1a4614] text-xl font-bold">
                        000
                    </span>
                    <span className="text-black text-xl font-bold">
                        님의 질문에 <br />
                        정성껏 답장해주세요!
                    </span>
                </div>
                <div className="w-full mt-[40px] py-6 px-[15px] gap-5 bg-[#EFE6DB] rounded-2xl">
                    <div className="text-[#3b3b3b] text-base font-bold">
                        Q. 올해 가장 기억에 남는 나와의 추억은?
                    </div>
                    <textarea
                        id="answer"
                        placeholder="답변을 작성해주세요!"
                        className="mt-4 w-full h-[340px] p-4 rounded-lg resize-none bg-white text-gray-700 placeholder-[#d9d9d9] focus:outline-none "
                    ></textarea>
                    <Button text="작성완료" isEnabled={false} />
                </div>
            </div>
        </div>
    );
};

export default Letter;
