import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import UserProfile221576Navigator from '../features/UserProfile221576/navigator';
import Tutorial221575Navigator from '../features/Tutorial221575/navigator';
import NotificationList221547Navigator from '../features/NotificationList221547/navigator';
import Settings221546Navigator from '../features/Settings221546/navigator';
import Settings221538Navigator from '../features/Settings221538/navigator';
import UserProfile221536Navigator from '../features/UserProfile221536/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
UserProfile221576: { screen: UserProfile221576Navigator },
Tutorial221575: { screen: Tutorial221575Navigator },
NotificationList221547: { screen: NotificationList221547Navigator },
Settings221546: { screen: Settings221546Navigator },
Settings221538: { screen: Settings221538Navigator },
UserProfile221536: { screen: UserProfile221536Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
