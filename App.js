import { View, Text } from 'react-native'
import React from 'react'

import { AppProvider } from './src/context/AppContext'

import RootNavigator from './src/navigation/RootNavigator'

const App = () => {
  return (
    <AppProvider>
      <RootNavigator/>
    </AppProvider>
  )
}

export default App