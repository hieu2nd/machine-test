import * as React from "react";
import Svg, { Path } from "react-native-svg";
export interface ICon {
    width?: number | string;
    height?: number | string;
    size?: number | string;
    color?: string;
    strokeWidth?: number;
    onClick?: () => void;
    className?: string;
    transform?: string;
    viewBox?: string;
    secondColor?: string;
}
const BackIcon = (props: ICon) => {
    return (
        <Svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            {...props}
        >
            <Path
                d="M14.167 18.3334L6.23048 10.0001L14.167 1.66675"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}
export { BackIcon }