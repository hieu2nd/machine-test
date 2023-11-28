import { BarIndicator } from 'react-native-indicators';

import React, { Component } from 'react';
import { View } from 'react-native';
import { Colors, useTheme } from '@theme';


export const Loading = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <BarIndicator color={Colors.primary} />
    </View>
  );
}
