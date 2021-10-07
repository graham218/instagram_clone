import React, { Component } from 'react'
import { Text, View } from 'react-native';

export class Main extends Component {
    componentDidMount(){

    }
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center'}}>
                <Text>User is Logged in</Text>
            </View>
        )
    }
}

export default Main;
