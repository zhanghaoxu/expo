/* eslint-disable react-native/no-inline-styles */
import { Appbar } from "react-native-paper";
import { View } from "react-native";
import React from "react";
class WebViewHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  _onShare = () => {
    let { shareInfo } = this.props;
    console.log(shareInfo)
  };

  _goBack = () => {
    this.props.goBackPage();
  };

  render() {
    return (
      <View>
        <Appbar.Header
          style={{
            backgroundColor: "#ddd",
            height: 40
          }}
          statusBarHeight={15}
        >
          {this.props.showHeaderBackAction && (
            <Appbar.BackAction onPress={this._goBack} />
          )}
          <Appbar.Content
            title={this.props.title}
            titleStyle={{ fontSize: 15 }}
          />
          <Appbar.Action
            icon="share"
            size={20}
            onPress={this._onShare.bind(this)}
          />
        </Appbar.Header>
      </View>
    );
  }
}
export default WebViewHeader;
