import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import WebViewDetails from "./WebViewDetails";

export default class Home extends Component {

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button1} activeOpacity={0.5} onPress={
                    () => {
                        this.props.navigation.navigate('Details')
                    }
                }>
                    <Text style={{color: 'white'}}>首页</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2} activeOpacity={0.5} onPress={
                    () => {
                        this.props.navigation.navigate('WebViewDetails')
                    }
                }>
                    <Text style={{color: 'white'}}>WebView</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    button1: {
        width: 120,
        height: 45,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4398ff',
    },
    button2: {
        width: 120,
        height: 45,
        borderRadius: 5,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4398ff',
    }
});