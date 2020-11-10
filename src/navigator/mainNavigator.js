import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen2170402Navigator from '../features/BlankScreen2170402/navigator';
import BlankScreen1170401Navigator from '../features/BlankScreen1170401/navigator';
import ArticleList170383Navigator from '../features/ArticleList170383/navigator';
import ArticleList170382Navigator from '../features/ArticleList170382/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen2170402: { screen: BlankScreen2170402Navigator },
BlankScreen1170401: { screen: BlankScreen1170401Navigator },
ArticleList170383: { screen: ArticleList170383Navigator },
ArticleList170382: { screen: ArticleList170382Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
