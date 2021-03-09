import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigator from './homestack';
import AboutNavigator from './aboutstack';

const { Navigator, Screen } = createDrawerNavigator();

const DrawerNavigator = () => {
  return (

    <Navigator >
      <Screen name="HomeNavigator" component={HomeNavigator} />
      <Screen name="AboutNavigator" component={AboutNavigator} />
    </Navigator>


  );
}
export default DrawerNavigator;
