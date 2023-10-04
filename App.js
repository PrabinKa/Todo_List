import React from 'react';
import {StatusBar} from 'react-native';

import RootNavigator from './src/navigation/RootNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {COLORS} from './src/constants/Colors';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={COLORS.secondary11} />
      <RootNavigator />
    </SafeAreaProvider>
  );
};

export default App;
