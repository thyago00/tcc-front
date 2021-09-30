import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import Location from "../screens/Location";
import Favorites from "../screens/Favorites";
import CustomTabBar from "../components/CustomTabBar";



const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator
    initialRouteName="Preload"
    screenOptions={{
      headerShown: false,
    }}
    tabBar={props=><CustomTabBar {...props} />}
  >
    <Tab.Screen name="Location" component={Location} />
    <Tab.Screen name="Favorites" component={Favorites} />
    <Tab.Screen name="Home" component={Home} />
  </Tab.Navigator>
);
