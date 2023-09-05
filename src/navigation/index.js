import { NavigationContainer } from "@react-navigation/native";
import BottomNav from "./bottom/TattooBottomNav";
import LoginNav from "../screens/Login/Login";
import Stack from "../navigation/stack/StackNav"

const index = () => {
  return (
    <NavigationContainer>
      <Stack></Stack>
    </NavigationContainer>
  );
};

export default index;
