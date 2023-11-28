import React, { useEffect } from 'react';
import { persistor, store } from '@redux';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationApp, NavigationUtils } from '@navigation';
import { ThemeProvider } from '@theme';
import { Platform, StyleSheet } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { GlobalService, GlobalUI } from '@components';
import { Provider } from 'react-redux';
import {
  initialWindowMetrics,
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MOCK_DATA } from './mock';



function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <SafeAreaView style={styleApp.container} edges={['right', 'left']}>
          <ThemeProvider>
            <PersistGate loading={null} persistor={persistor}>
              <NavigationApp
                ref={(navigatorRef: any) => {
                  NavigationUtils.setTopLevelNavigator(navigatorRef);
                }}
              />
              <GlobalUI ref={GlobalService.globalUIRef} />
              <FlashMessage
                style={styleApp.messageNoti}
                position="top"
                floating={true}
                hideStatusBar={false}
              />
            </PersistGate>
          </ThemeProvider>
        </SafeAreaView>
      </SafeAreaProvider>

    </Provider>
  );
}

const styleApp = StyleSheet.create({
  messageNoti: {
    marginTop: Platform.OS === 'android' ? getStatusBarHeight() : 0,
  },
  container: {
    flex: 1,
  },
});

export default App;
