import "react-native-gesture-handler";
import Navigation from "./src/navigation/index";
import { AuthenticatedUserProvider } from "./src/Context/AuthContextProdiver";

const App = () => {
  return (
    <AuthenticatedUserProvider>
      <Navigation />
    </AuthenticatedUserProvider>
  );
};

export default App;
