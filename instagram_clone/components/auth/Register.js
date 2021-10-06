import React, { Component } from 'react'
import { TextInput, View } from 'react-native';

export class Register extends Component {
    constructor(props){
        super(props);
        this.state={
            email: '',
            password: '',
            name: ''
        }
    }

    render() {
        return (
            <View>
                <TextInput 
                    />
            </View>
        )
    }
}

export default Register;
