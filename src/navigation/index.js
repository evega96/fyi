import { NavigationContainer } from "@react-navigation/native";
import GuessNav from "./stack/GuessNav";
import ClientBottomNav from "./bottom/ClientBottom/ClientBottomNav";
import TattooArtistNav from "./bottom/TattooArtistBottomNav";
import { useContext, useEffect, useState } from "react";
import { AuthenticatedUserContext } from "../Context/AuthContextProdiver";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../app/firebase";
import { isTattoArtist } from "../app/api";
const Navigation = () => {
  const { user, setUser } = useContext(AuthenticatedUserContext);

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, async (authenticatedUser) => {
      authenticatedUser ? setUser(authenticatedUser) : setUser(null);
    });

    return () => unsubcribe();
  }, [user]);

  return (
    <NavigationContainer>
      {user ? <ClientBottomNav /> : <GuessNav />}
    </NavigationContainer>
  );
};

export default Navigation;
