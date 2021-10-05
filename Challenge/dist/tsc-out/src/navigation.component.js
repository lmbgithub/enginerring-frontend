import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './home.component';
import { DetailsScreen } from './details.component';
const { Navigator, Screen } = createStackNavigator();
const HomeNavigator = () => (React.createElement(Navigator, { headerMode: 'none' },
    React.createElement(Screen, { name: "Home", component: HomeScreen }),
    React.createElement(Screen, { name: "Details", component: DetailsScreen })));
export const AppNavigator = () => (React.createElement(NavigationContainer, null,
    React.createElement(HomeNavigator, null)));
//# sourceMappingURL=navigation.component.js.map