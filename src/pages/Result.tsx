import React from "react";
import { useLocation } from "react-router-dom";
import Shadow from "../../public/Shadow";
import Header from "../components/Header";
import Button from "../components/Button";

interface SelectedItem {
    src: string;
    x: number;
    y: number;
    width: number;
}

const Result = () => {
    const location = useLocation();
    const { selectedFace, selectedClothe, selectedItems } = location.state || {
        selectedFace: null,
        selectedClothe: null,
        selectedItems: [],
    };

    return (
        <div className="overflow-hidden flex h-screen flex-col">
            <Header />
            <div className="relative flex-1 flex flex-col items-center bg-white">
                <span className="text-black text-xl font-bold text-center mt-[40px]">
                    루돌프가 완성되었어요!
                </span>
                <div className="relative flex flex-col items-center mt-[50px]">
                    <div className="relative z-20">
                        <img
                            src="/none.png"
                            alt="Character"
                            className="object-contain w-[265px]"
                        />
                        {selectedFace && (
                            <img
                                src={selectedFace}
                                alt="Selected Face"
                                className="absolute bottom-[125px] left-[140px] transform -translate-x-1/2 w-[100px] object-contain"
                            />
                        )}
                        {selectedClothe && (
                            <img
                                src={selectedClothe}
                                alt="Selected Clothe"
                                className="absolute bottom-[40px] right-[52px] w-[145px] object-contain"
                            />
                        )}
                        {selectedItems.map(
                            (item: SelectedItem, index: number) => (
                                <img
                                    key={index}
                                    src={item.src}
                                    alt={`Selected Item ${index}`}
                                    className="absolute object-contain"
                                    style={{
                                        left: `${item.x}px`,
                                        top: `${item.y}px`,
                                        width: `${item.width}px`,
                                    }}
                                />
                            )
                        )}
                    </div>
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
            <div className="fixed bottom-40 left-1/2 transform -translate-x-1/2 w-[80%]">
                <Button text="다음" isEnabled />
            </div>
        </div>
    );
};

export default Result;
