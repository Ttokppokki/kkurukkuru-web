import React from "react";

const ItemBackground = () => {
    return (
        <svg
            width="106"
            height="106"
            viewBox="0 0 106 106"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_f_120_150)">
                <rect x="30" y="30" width="46" height="46" fill="#D9D9D9" />
            </g>
            <defs>
                <filter
                    id="filter0_f_120_150"
                    x="0"
                    y="0"
                    width="106"
                    height="106"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    />
                    <feGaussianBlur
                        stdDeviation="15"
                        result="effect1_foregroundBlur_120_150"
                    />
                </filter>
            </defs>
        </svg>
    );
};

export default ItemBackground;
