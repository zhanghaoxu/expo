/* eslint-disable react-native/no-inline-styles */
import React, { Component } from "react";
import { Button, View } from "react-native";
import MyWebView from "@/components/MyWebView";
import WebViewHeader from "./components/WebViewHeader";

// ...
class WebViewScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      shareInfo: {},
      showHeaderBackAction: false
    };
  }

  updateShowHeaderBackAction(v) {
    this.setState({
      showHeaderBackAction: v
    });
  }

  goBackPage() {
    this.myWebView.handleBackPress();
  }

  render() {
    let title = this.state.title;
    let shareInfo = this.state.shareInfo;
    let showHeaderBackAction = this.state.showHeaderBackAction;
    return (
      <View style={{ flex: 1 }}>
        <WebViewHeader
          title={title}
          shareInfo={shareInfo}
          showHeaderBackAction={showHeaderBackAction}
          goBackPage={this.goBackPage.bind(this)}
        />
        <MyWebView
          ref={myWebView => {
            this.myWebView = myWebView;
          }}
          url={this.props.navigation.state.params.url}
          navigation={this.props.navigation}
          updateShowHeaderBackAction={this.updateShowHeaderBackAction.bind(
            this
          )}
        />
      </View>
    );
  }
}

export default WebViewScreen;
