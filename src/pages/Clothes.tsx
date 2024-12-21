import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import Shadow from "../../public/Shadow";
import Left from "../../public/Left";
import Right from "../../public/Right";

const ClothesSelection = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { selectedFace } = location.state || {}; // 이전 페이지에서 선택한 얼굴 가져오기

    const clothes = [
        "/clothes/princess.png",
        "/clothes/northface.png",
        "/clothes/santa.png",
        "/clothes/appjam.png",
        "/clothes/fleece.png",
    ];

    const [currentPage, setCurrentPage] = useState(0);
    const [selectedClothe, setSelectedClothe] = useState<string | null>(null);

    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        } else {
            setCurrentPage(clothes.length - 1); // 마지막 페이지로 이동
        }
    };

    const handleClotheSelect = (clothe: string) => {
        setSelectedClothe(clothe);
    };

    const handleConfirm = () => {
        if (selectedClothe) {
            navigate("/items", { state: { selectedFace, selectedClothe } }); // 선택한 옷을 다음 페이지로 전달
        } else {
            alert("옷을 선택해 주세요!");
        }
    };

    const currentClothes = clothes[currentPage];

    return (
        <div className="overflow-hidden flex h-screen flex-col">
            <Header />
            <div className="relative flex-1 flex flex-col items-center bg-white">
                <span className="text-black text-xl font-bold text-center mt-[40px]">
                    루돌프에게 귀여운 옷을 입혀주세요!
                </span>

                <div className="relative flex flex-col items-center mt-[50px]">
                    <div className="relative z-20">
                        <img
                            src="none.png"
                            alt="Character"
                            className="object-contain w-[265px]"
                        />
                        {selectedClothe && (
                            <img
                                src={selectedClothe}
                                alt="Selected Clothe"
                                className="absolute bottom-[40px] right-[52px] w-[145px] object-contain"
                            />
                        )}
                        {selectedFace && (
                            <img
                                src={selectedFace}
                                alt="Selected Face"
                                className="absolute bottom-[125px] left-[140px] transform -translate-x-1/2 w-[100px] object-contain"
                            />
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

                <div className="z-30 flex items-center justify-center -mt-[30px] gap-4">
                    <button
                        onClick={handlePrev}
                        className="w-12 h-12 flex items-center justify-center bg-[#c6a98c] rounded-full"
                    >
                        <Left />
                    </button>
                    <div className="flex gap-5">
                        <div
                            className="relative w-40 h-40 flex items-center justify-center cursor-pointer"
                            onClick={() => handleClotheSelect(currentClothes)}
                        >
                            <div
                                className="absolute w-40 h-40 rounded-full flex items-center justify-center"
                                style={{
                                    backgroundImage: `url(${currentClothes})`,
                                    backgroundSize: "contain",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                }}
                            />
                        </div>
                    </div>
                    <button
                        onClick={() => {
                            if (currentPage < clothes.length - 1) {
                                setCurrentPage(currentPage + 1);
                            } else {
                                handleConfirm();
                            }
                        }}
                        className="w-12 h-12 flex items-center justify-center bg-[#c6a98c] rounded-full"
                    >
                        <Right />
                    </button>
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
                <Button
                    text="다음"
                    isEnabled={!!selectedClothe}
                    onClick={handleConfirm}
                />
            </div>
        </div>
    );
};

export default ClothesSelection;
