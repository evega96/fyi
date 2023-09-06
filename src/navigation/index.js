import { NavigationContainer } from "@react-navigation/native";
import GuessNav from "./stack/GuessNav";
import ClientBottomNav from "./bottom/ClientBottom/ClientBottomNav";
import TattooArtistNav from "./bottom/TattooArtistBottomNav";

const index = () => {
  const userLogin = true;
  return (
    <NavigationContainer>
      {userLogin ? <ClientBottomNav /> : <GuessNav />}
    </NavigationContainer>
  );
};

export default index;
