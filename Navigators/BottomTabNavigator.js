import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomePage from "../Screens/Main Screens/HomePage";
import AllNotes from "../Screens/Main Screens/AllNotes";
import UploadNote from "../Screens/Main Screens/UploadNote";
import { AntDesign, FontAwesome, MaterialIcons } from "@expo/vector-icons";

const Tab = createMaterialBottomTabNavigator();

function BottomTabNavigator({naviation}) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size = 20 }) => {
          if (route.name === "Home") {
            return <AntDesign name="home" size={size} color={color} />;
          } else if (route.name === "Explore") {
            return (
              <FontAwesome name="sticky-note-o" size={size} color={color} />
            );
          } else {
            return (
              <MaterialIcons name="upload-file" size={size} color="black" />
            );
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={HomePage}  />
      <Tab.Screen name="Explore" component={AllNotes} />
      <Tab.Screen name="Upload" component={UploadNote} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
