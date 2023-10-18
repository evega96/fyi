import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Label = (props) => (
    <Svg
        width={27}
        height={27}
        viewBox="0 0 27 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M10.125 7.59375C10.125 8.26508 9.85832 8.90891 9.38361 9.38361C8.90891 9.85832 8.26508 10.125 7.59375 10.125C6.92242 10.125 6.27859 9.85832 5.80389 9.38361C5.32918 8.90891 5.0625 8.26508 5.0625 7.59375C5.0625 6.92242 5.32918 6.27859 5.80389 5.80389C6.27859 5.32918 6.92242 5.0625 7.59375 5.0625C8.26508 5.0625 8.90891 5.32918 9.38361 5.80389C9.85832 6.27859 10.125 6.92242 10.125 7.59375ZM8.4375 7.59375C8.4375 7.36997 8.3486 7.15536 8.19037 6.99713C8.03214 6.83889 7.81753 6.75 7.59375 6.75C7.36997 6.75 7.15536 6.83889 6.99713 6.99713C6.83889 7.15536 6.75 7.36997 6.75 7.59375C6.75 7.81753 6.83889 8.03214 6.99713 8.19037C7.15536 8.3486 7.36997 8.4375 7.59375 8.4375C7.81753 8.4375 8.03214 8.3486 8.19037 8.19037C8.3486 8.03214 8.4375 7.81753 8.4375 7.59375Z"
            fill="#E4E4E4"
        />
        <Path
            d="M3.375 1.6875H11.1139C11.5614 1.6876 11.9905 1.86545 12.3069 2.18194L24.1194 13.9944C24.4358 14.3109 24.6135 14.74 24.6135 15.1875C24.6135 15.635 24.4358 16.0641 24.1194 16.3806L16.3806 24.1194C16.0641 24.4358 15.635 24.6135 15.1875 24.6135C14.74 24.6135 14.3109 24.4358 13.9944 24.1194L2.18194 12.3069C1.86545 11.9905 1.6876 11.5614 1.6875 11.1139V3.375C1.6875 2.92745 1.86529 2.49822 2.18176 2.18176C2.49822 1.86529 2.92745 1.6875 3.375 1.6875ZM3.375 11.1139L15.1875 22.9264L22.9264 15.1875L11.1139 3.375H3.375V11.1139Z"
            fill="#E4E4E4"
        />
    </Svg>
);
export default Label;