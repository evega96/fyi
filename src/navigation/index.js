import { NavigationContainer } from "@react-navigation/native";
import GuessNav from "./stack/GuessNav";
import { useContext, useEffect, useState } from "react";
import { AuthenticatedUserContext } from "../Context/AuthContextProdiver";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../app/firebase";
import ClientNav from "./stack/ClientNav";
import TattoArtistNav from "./stack/TattooArtist";
import { getUserRole } from "../app/api";
const Navigation = () => {
  const { user, setUser } = useContext(AuthenticatedUserContext);
  const [userRole, setUserRole] = useState(null); // Estado para almacenar el rol del usuario

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (authenticatedUser) => {
      if (authenticatedUser) {
        setUser(authenticatedUser);
        // make the consult with a function in api.js
        const role = await getUserRole(authenticatedUser.uid);
        setUserRole(role);
      } else {
        setUser(null);
        setUserRole(null); // Limpia el estado del rol si el usuario no está autenticado
      }
    });

    return () => unsubscribe();
  }, [user]);
  return (
    <NavigationContainer>
      {user ? (
        userRole === "Client" ? (
          <ClientNav />
        ) : (
          <TattoArtistNav />
        )
      ) : (
        <GuessNav />
      )}
    </NavigationContainer>
  );
};

export default Navigation;