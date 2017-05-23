import React, { Component } from 'react';

import { View, Text, TouchableHighlight } from 'react-native';

export default class ImamaChild extends Component {


    render() {
        return (
            <View>
                <Text>Current Scene: { this.props.name }</Text>
                <TouchableHighlight onPress={this.props.onForward}>
                    <Text>下一页</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.props.onBack}>
                    <Text>上一页</Text>
                </TouchableHighlight>
            </View>
        )
    }
} 