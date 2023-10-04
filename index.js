/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {AppProvider} from './src/context/AppContext';

const ProvidedApp = () => {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
};

AppRegistry.registerComponent(appName, () => ProvidedApp);
