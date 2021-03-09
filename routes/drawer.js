import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeNavigator from './homestack';
import AboutNavigator from './aboutstack';

const { Navigator, Screen } = createDrawerNavigator();

const DrawerNavigator = () => {
  return (

    <Navigator >
      <Screen name="Home" component={HomeNavigator} />
      <Screen name="About" component={AboutNavigator} />
    </Navigator>


  );
}
export default DrawerNavigator;
