import * as React from "react";
import Svg, { Path } from "react-native-svg";
const BackArrow = (props) => (
  <Svg
    width={25}
    height={25}
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M7.83791 11.0116L11.4153 7.41904L10.0043 6.01005L4.00863 12.0144L10.0129 18.0101L11.4219 16.599L7.83935 13.0116L20.0093 13.0029L20.0079 11.0029L7.83791 11.0116Z"
      fill="white"
    />
  </Svg>
);
export default BackArrow;
