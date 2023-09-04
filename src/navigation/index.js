import { NavigationContainer } from "@react-navigation/native";
import BottomNav from "./bottom/BottomNav";
import LoginNav from "../components/login/LoginButton";

const index = () => {
  return (
    <NavigationContainer>
      <LoginNav></LoginNav>
    </NavigationContainer>
  );
};

export default index;
