import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeFixtureLoader } from 'react-cosmos/native';
import { rendererConfig, fixtures, decorators } from './cosmos.userdeps';

const App = () => (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  )

const Cosmos = () => (
  <NativeFixtureLoader
  rendererConfig={rendererConfig}
  fixtures={fixtures}
  decorators={decorators}
/>
)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default __DEV__ ? Cosmos 
                    : App