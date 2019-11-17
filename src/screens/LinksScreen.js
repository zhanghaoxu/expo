import React from 'react';
import { ScrollView, StyleSheet, View} from 'react-native';
import MyWebView from "../components/MyWebView";

export default function LinksScreen() {
  return (
      <View style={styles.container}>
        <MyWebView 
          url="http://192.168.43.221:3000/#/find"
          updateShowHeaderBackAction={()=>{}}/>
      </View>
      

  );
}

LinksScreen.navigationOptions = {
  header:null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
