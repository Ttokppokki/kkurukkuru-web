import React, { useState } from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import Shadow from "../../public/Shadow";
import Left from "../../public/Left";
import Right from "../../public/Right";

const ItemsSelection = () => {
    const items = [
        { src: "/Items/Blusher.png", x: 50, y: 130, width: 180 },
        { src: "/Items/Grasses.png", x: 48, y: 98, width: 180 },
        { src: "/Items/HeartItem.png", x: 230, y: 30, width: 60 },
        { src: "/Items/King.png", x: 88, y: 50, width: 100 },
        { src: "/Items/Muffler.png", x: 77, y: 170, width: 140 },
        { src: "/Items/Pool.png", x: -15, y: 180, width: 90 },
        { src: "/Items/Ribbon.png", x: 140, y: 40, width: 100 },
        { src: "/Items/Snowman.png", x: 200, y: 180, width: 105 },
        { src: "/Items/Sweat.png", x:25, y: 100, width: 65 },
        { src: "/Items/Solo.png", x: -10, y: -35, width: 160 },
        { src: "/Items/Stupid.png", x: -30, y: 120, width: 100 },
    ];

    const [selectedItems, setSelectedItems] = useState<
        { src: string; x: number; y: number; width: number }[]
    >([]);
    const [currentPage, setCurrentPage] = useState(0);

    const itemsPerPage = 3;
    const totalPages = Math.ceil(items.length / itemsPerPage);

    const handleItemSelect = (item: { src: string; x: number; y: number; width: number }) => {
        setSelectedItems((prev) => {
            const alreadySelected = prev.find((selected) => selected.src === item.src);
            if (alreadySelected) {
                return prev.filter((selected) => selected.src !== item.src);
            }
            return [...prev, item];
        });
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) =>
            prevPage === 0 ? totalPages - 1 : prevPage - 1
        );
    };

    const currentItems = items.slice(
        currentPage * itemsPerPage,
        currentPage * itemsPerPage + itemsPerPage
    );

    return (
        <div className="overflow-hidden flex h-screen flex-col">
            <Header />
            <div className="relative flex-1 flex flex-col items-center bg-white">
                <span className="text-black text-xl font-bold text-center mt-[40px]">
                    루돌프의 얼굴을 꾸며 주세요!
                </span>

                <div className="relative flex flex-col items-center mt-[80px]">
                    <div className="relative z-20">
                        <img
                            src="/none.png"
                            alt="Rudolph"
                            className="object-contain w-[265px]"
                        />
                        {selectedItems.map((item, index) => (
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
                        ))}
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

                {/* 아이템 선택 */}
                <div className="z-30 flex items-center justify-center mt-[40px] gap-4">
                <button
                        onClick={handlePrevPage}
                        className="w-12 h-12 flex items-center justify-center bg-[#c6a98c] rounded-full"
                    >
                        <Left />
                    </button>
                    <div className="flex gap-5">
                        {currentItems.map((item, index) => (
                            <div
                                key={index}
                                className="relative w-14 h-14 flex items-center justify-center cursor-pointer"
                                onClick={() => handleItemSelect(item)}
                            >
                                <div className="absolute w-14 h-14 bg-[#d9d9d9] blur-[10px] rounded-full" />
                                <div
                                    className="absolute w-14 h-14 rounded-full flex items-center justify-center"
                                    style={{
                                        backgroundImage: `url(${item.src})`,
                                        backgroundSize: "contain",
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition: "center",
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={handleNextPage}
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

export default ItemsSelection;