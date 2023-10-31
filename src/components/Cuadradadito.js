import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Cuadra = (props) => (
  <Svg
    width={25}
    height={25}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12 14H2C0.89543 14 0 13.1046 0 12V2C0 0.89543 0.89543 0 2 0H12C13.1046 0 14 0.89543 14 2V12C14 13.1046 13.1046 14 12 14ZM2 2V12H12V2H2Z"
      fill="white"
    />
  </Svg>
);
export default Cuadra;
