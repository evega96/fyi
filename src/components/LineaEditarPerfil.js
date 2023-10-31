import * as React from "react";
import Svg, { Line } from "react-native-svg";
const Linea = (props) => (
  <Svg
    width={394}
    height={1}
    viewBox="0 0 394 1"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Line y1={0.5} x2={394} y2={0.5} stroke="#E4E4E4" />
  </Svg>
);
export default Linea;
