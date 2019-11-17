import React from 'react';
import {StyleSheet, View } from 'react-native';
import MyWebView from "../components/MyWebView";

export default function HomeScreen() {
  return (
      <View style={styles.container}>
        <MyWebView 
          url="http://192.168.43.221:3000/#/home"
          updateShowHeaderBackAction={()=>{}}/>
      </View>
      

  );
}

HomeScreen.navigationOptions = {
  header:null
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
