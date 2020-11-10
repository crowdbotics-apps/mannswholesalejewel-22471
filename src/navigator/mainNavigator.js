import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList170384Navigator from '../features/ArticleList170384/navigator';
import ArticleList170383Navigator from '../features/ArticleList170383/navigator';
import ArticleList170382Navigator from '../features/ArticleList170382/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList170384: { screen: ArticleList170384Navigator },
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
