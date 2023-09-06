import { NavigationContainer } from "@react-navigation/native";
import GuessNav from "./stack/GuessNav";
import ClientBottomNav from "./bottom/ClientBottom/ClientBottomNav";
import TattooArtistNav from "./bottom/TattooArtistBottomNav";
import { useState } from "react";

const index = () => {
  const user = {
    name: "Marcos",
    Role: "TattooArtist",
  };

  const [userLogin, setuserLogin] = useState(user);

  return (
    <NavigationContainer>
      {userLogin ? (
        userLogin.Role === "Client" ? (
          <ClientBottomNav />
        ) : userLogin.Role === "TattooArtist" ? (
          <TattooArtistNav />
        ) : null
      ) : (
        <GuessNav />
      )}
    </NavigationContainer>
  );
};

export default index;
