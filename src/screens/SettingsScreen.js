import React from 'react';
import { StyleSheet, View} from 'react-native';
import MyWebView from "../components/MyWebView";
export default function SettingsScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return (
    <View style={styles.container}>
        <MyWebView
          url="http://192.168.43.221:3000/#/my" 
          updateShowHeaderBackAction={()=>{}}/>
      </View>
  )
}

SettingsScreen.navigationOptions = {
  header:null
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
