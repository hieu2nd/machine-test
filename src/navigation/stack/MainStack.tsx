import { createStackNavigator } from '@react-navigation/stack';
import { Add, Detail, List } from '@screens';
import React, { memo } from 'react';
import { SCREEN_ROUTE } from '../route';

const MainStack = createStackNavigator<SCREEN_ROUTE>();

const MainStackComponent = memo(() => {
  return (
    <MainStack.Navigator
      initialRouteName={SCREEN_ROUTE.MAIN_STACK}
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen
        name={SCREEN_ROUTE.LIST_SCREEN}
        component={List}
      />
      <MainStack.Screen
        name={SCREEN_ROUTE.DETAIL_SCREEN}
        component={Detail}
      />
      <MainStack.Screen
        name={SCREEN_ROUTE.ADD_SCREEN}
        component={Add}
      />
    </MainStack.Navigator>
  );
});

export { MainStackComponent };
