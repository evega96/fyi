import { createStackNavigator } from "@react-navigation/stack";
import TattooArtistBottomNav from "../bottom/TattooArtistBottomNav";
import Home from "../../screens/Home/Home";
import Favorite from "../../screens/Favorite/Favorite";
import Account from "../../screens/Account/Account";
import Message from "../../screens/Message/Message";
import Add from "../../screens/Add/Add";
import AddConfig from "../../screens/Add/add-config";
import AddDetails from "../../screens/AddDetails/AddDetails";
import Publication from "../../screens/Publication/Publication";
import TagPerson from "../../screens/TagPerson/TagPerson";
import AddUbication from "../../screens/AddUbication/AddUbication";
import AddTags from "../../screens/AddTags/AddTags";
import DetailsConfig from '../../screens/Home/details-config'
import MessageConfig from "../../screens/Message/message-config";

import ChatRoom from "../../components/ChatRoom"
import DetailScreen from '../../screens/Home/DetailScreen';

import EditarPerfil from "../../screens/EditarPerfil/Editarperfil";
import Parati from "../../screens/Parati/Parati";
import AccountConfig from "../../screens/Account/account-config";
import HomeConfig from "../../screens/Home/home-config";


const Stack = createStackNavigator();

const TattoArtistNav = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Inicio"
                component={TattooArtistBottomNav}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Home" component={Home} {...HomeConfig}/>
            <Stack.Screen name="Add" component={Add}  />
            <Stack.Screen name="AddDetails" component={AddDetails} options={{headerStyle:{backgroundColor: '#313131'}, headerTintColor: '#ffffff'}}/>
            <Stack.Screen name="Favorite" component={Favorite} options={{headerTintColor: '#ffffff'}}/>
            <Stack.Screen name="Account" component={Account} {...AccountConfig}/>
            <Stack.Screen name="Message" component={Message} {...MessageConfig} />
            <Stack.Screen name="Publication" component={Publication} options={{headerStyle:{backgroundColor: '#313131'}, headerTintColor: '#ffffff'}}/>
            <Stack.Screen name="TagPerson" component={TagPerson} />
            <Stack.Screen name="AddUbication" component={AddUbication} />
            <Stack.Screen name="AddTags" component={AddTags} />

            <Stack.Screen name="ChatRooms" component={ChatRoom} options={{headerStyle:{backgroundColor: '#313131'}, headerTintColor: '#ffffff'}}/>
            <Stack.Screen name="DetailScreen" component={DetailScreen}
                options={{ headerShown: true, headerStyle:{backgroundColor: '#313131'}, headerTintColor: '#ffffff' }} />

                <Stack.Screen name="EditarPerfil" component={EditarPerfil} />  
            
       <Stack.Screen name="ParaTi" component={Parati}/>

        </Stack.Navigator>
    );
};

export default TattoArtistNav;
