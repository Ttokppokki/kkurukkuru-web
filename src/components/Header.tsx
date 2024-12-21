import React from "react";
import { useNavigate } from "react-router-dom";
import Back from "../../public/icon/Back";

const Header = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div className="bg-white flex h-10 p-6 items-center justify-start">
            <button onClick={handleBack} className="flex items-center">
                <Back />
            </button>
        </div>
    );
};

export default Header;
