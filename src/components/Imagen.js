import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";
const ImageIcon = (props) => (
  <Svg
    width={35}
    height={35}
    viewBox="0 0 35 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect width={35} height={35} rx={17.5} fill="white" />
    <Path
      d="M21.2931 8.29279C21.4807 8.10532 21.735 8 22.0002 8C22.2653 8 22.5196 8.10532 22.7072 8.29279L26.7072 12.2928C26.8947 12.4804 27 12.7347 27 12.9998C27 13.265 26.8947 13.5193 26.7072 13.7069L13.7071 26.707C13.5196 26.8945 13.2653 26.9999 13.0001 27H9.00001C8.73479 27 8.48043 26.8946 8.2929 26.7071C8.10536 26.5196 8 26.2652 8 26V21.9999C8.00006 21.7347 8.10545 21.4804 8.293 21.2929L18.2931 11.2928L21.2931 8.29279ZM19.0001 13.4138L10 22.4139V25H12.5861L21.5862 15.9999L19.0001 13.4138ZM23.0002 14.5859L24.5862 12.9998L22.0002 10.4138L20.4141 11.9998L23.0002 14.5859Z"
      fill="#313131"
    />
  </Svg>
);
export default ImageIcon;
