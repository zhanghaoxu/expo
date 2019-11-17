/* eslint-disable react-native/no-inline-styles */
import React, { Component } from "react";
import { BackHandler, View } from "react-native";
import { WebView } from "react-native-webview";
import injectedJavaScript from "../utils/injectedJavaScript";
// var PushNotification = require("react-native-push-notification");
// ...
class WebViewScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      canGoBack: false
    };
  }

  openNewWebView(options){
    this.props.navigation.navigate('WebView',options)
  }

  setTitle(title) {
    this.setState({
      title
    });
  }

  pushNotification(opt) {
    PushNotification.localNotification(opt);
  }

  handlerH5Event(e) {
    let data = JSON.parse(e.nativeEvent.data);
    switch (data.type) {
      case "setTitle":
        this.setTitle(data.title);
        break;
      case "pushNotification":
        this.pushNotification({
          message: data.message
        });
        break;
      default:
        return;
    }
  }

  render() {
    let {
      url="https://www.baidu.com"
    } = this.props
    
    return (
      <View style={{ flex: 1 }}>
        <WebView
          nativeConfig={{props: {webContentsDebuggingEnabled: true}}} 
          ref={myWeb => (this.webView = myWeb)}
          injectedJavaScript={injectedJavaScript.toString()}
          onNavigationStateChange={this.onNavigationStateChange.bind(this)}
          onMessage={this.handlerH5Event.bind(this)}
          source={{ uri: url }}
        />
      </View>
    );
  }

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
  }
  onNavigationStateChange(navState) {
    if (navState.canGoBack) {
      this.props.updateShowHeaderBackAction(true);
    } else {
      this.props.updateShowHeaderBackAction(false);
    }
    this.setState({
      canGoBack: navState.canGoBack
    });
  }

  handleBackPress = () => {
    if (this.state.canGoBack) {
      this.webView.goBack();
    } else {
      this.props.navigation.goBack(null);
    }
    return true;
  };
}

export default WebViewScreen;
