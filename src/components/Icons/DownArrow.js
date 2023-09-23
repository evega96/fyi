import * as React from "react";
import Svg, { Path } from "react-native-svg";
const DownArrow = (props) => (
  <Svg
    width={14}
    height={8}
    viewBox="0 0 14 8"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M0.308162 0.305919C0.505537 0.110039 0.773199 0 1.05229 0C1.33138 0 1.59904 0.110039 1.79641 0.305919L7.00635 5.47795L12.2163 0.305919C12.4148 0.115591 12.6807 0.0102754 12.9566 0.0126557C13.2326 0.0150366 13.4966 0.124922 13.6917 0.318647C13.8869 0.512371 13.9976 0.774434 14 1.04839C14.0024 1.32235 13.8963 1.58628 13.7045 1.78334L7.75048 7.69408C7.55311 7.88996 7.28544 8 7.00635 8C6.72727 8 6.4596 7.88996 6.26223 7.69408L0.308162 1.78334C0.110846 1.5874 0 1.32169 0 1.04463C0 0.767573 0.110846 0.501858 0.308162 0.305919Z"
      fill="#000000"
    />
  </Svg>
);
export default DownArrow;
