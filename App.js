import { AppLoading } from 'expo';
import React, { useState } from 'react';
import {StyleSheet, View , StatusBar} from 'react-native';
import { Provider } from "react-redux";
import store from '@/store/index';
import AppNavigator from '@/navigation/AppNavigator';

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <StatusBar 
            animated={true}
            hidden={false}
            androidtranslucent={true}
            barStyle="light-content"
            backgroundColor="#6ca8f1" />
          <AppNavigator />
        </View>
      </Provider>      
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
