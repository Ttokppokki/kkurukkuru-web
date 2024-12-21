import React, { useState } from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import Shadow from "../../public/Shadow";
import Left from "../../public/Left";
import Right from "../../public/Right";

const ClothesSelection = () => {
    const clothes = [
        "/clothes/princess.png",
        "/clothes/northface.png",
        "/clothes/santa.png",
        "/clothes/appjam.png",
        "/clothes/fleece.png",
    ];

    const [currentPage, setCurrentPage] = useState(0);
    const [selectedclothe, setSelectedclothe] = useState<string | null>(null);

    const ClothesPerPage = 1;
    const totalPages = Math.ceil(clothes.length / ClothesPerPage);

    const currentClothes = clothes.slice(
        currentPage * ClothesPerPage,
        currentPage * ClothesPerPage + ClothesPerPage
    );

    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        } else {
            setCurrentPage(totalPages - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1);
        } else {
            setCurrentPage(0);
        }
    };

    const handleClotheselect = (clothe: string) => {
        setSelectedclothe(clothe);
    };

    return (
        <div className="overflow-hidden flex h-screen flex-col">
            <Header />
            <div className="relative flex-1 flex flex-col items-center bg-white">
                <span className="text-black text-xl font-bold text-center mt-[40px]">
                    루돌프에게 귀여운 옷을 입혀주세요!
                </span>

                <div className="relative flex flex-col items-center mt-[80px]">
                    <div className="relative z-20">
                        <img
                            src="none.png"
                            alt="Character"
                            className="object-contain w-[265px]"
                        />
                        {selectedclothe && (
                            <img
                                src={selectedclothe}
                                alt="Selected clothe"
                                className="absolute bottom-[40px] right-[52px] w-[145px] object-contain"
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

                <div className="z-30 flex items-center justify-center mt-[40px] gap-4">
                    <button
                        onClick={handlePrev}
                        className="w-12 h-12 flex items-center justify-center bg-[#c6a98c] rounded-full"
                    >
                        <Left />
                    </button>
                    <div className="flex gap-5">
                        {currentClothes.map((clothe, index) => (
                            <div
                                key={index}
                                className="relative w-40 h-40 flex items-center justify-center"
                                onClick={() => handleClotheselect(clothe)}
                            >
                                <div
                                    className="absolute w-40 h-40 rounded-full flex items-center justify-center"
                                    style={{
                                        backgroundImage: `url(${clothe})`,
                                        backgroundSize: "contain",
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition: "center",
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={handleNext}
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
            <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 w-[80%]">
                <Button text="다음" isEnabled />
            </div>
        </div>
    );
};

export default ClothesSelection;