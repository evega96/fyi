import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
const MultiSelect = (props) => (
  <Svg
    width={18}
    height={18}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_1022_5394)">
      <Path
        d="M15.375 6H6.75C6.33579 6 6 6.33579 6 6.75V15.375C6 15.7892 6.33579 16.125 6.75 16.125H15.375C15.7892 16.125 16.125 15.7892 16.125 15.375V6.75C16.125 6.33579 15.7892 6 15.375 6Z"
        stroke="#E4E4E4"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6 12H2.625C2.42609 12 2.23532 11.921 2.09467 11.7803C1.95402 11.6397 1.875 11.4489 1.875 11.25V2.625C1.875 2.42609 1.95402 2.23532 2.09467 2.09467C2.23532 1.95402 2.42609 1.875 2.625 1.875H11.25C11.4489 1.875 11.6397 1.95402 11.7803 2.09467C11.921 2.23532 12 2.42609 12 2.625V6M10.875 6L6 11.25M14.25 6L6 15M16.125 7.875L8.625 16.125M16.125 12L12.375 16.125"
        stroke="#E4E4E4"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_1022_5394">
        <Rect width={18} height={18} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default MultiSelect;
