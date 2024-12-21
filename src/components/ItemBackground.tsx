import React from "react";

interface ItemBackgroundProps {
    children: React.ReactNode;
}

const ItemBackground: React.FC<ItemBackgroundProps> = ({ children }) => {
    return <div className="item-background">{children}</div>;
};

export default ItemBackground;
