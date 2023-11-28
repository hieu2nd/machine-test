/* eslint-disable @typescript-eslint/no-explicit-any */
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Theme, useTheme } from '@theme';
import React from 'react';
import { MainStackComponent } from '../stack/MainStack';

const Stack = createStackNavigator();
//main stack app
const NavigationApp = React.forwardRef((props, ref: any) => {
  const dataTheme: {theme: Theme;} = useTheme() as any;
  const renderStackApp = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
              name={'ROOT'}
            component={MainStackComponent}
            options={{headerShown: false}}
          />
      </Stack.Navigator>
    );
  };
  return (
    <NavigationContainer theme={dataTheme.theme} ref={ref}>
      {renderStackApp()}
    </NavigationContainer>
  );
});


export { NavigationApp };
