import { NavigationContainer } from "@react-navigation/native";
import BottomNav from "./bottom/BottomNav";
import LoginNav from "../screens/Login/Login";

const index = () => {
  return (
    <NavigationContainer>
      <LoginNav></LoginNav>
    </NavigationContainer>
  );
};

export default index;
