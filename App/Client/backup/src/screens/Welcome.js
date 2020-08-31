import React, { Component } from 'react'
import { Text, View, StatusBar, ImageBackground, StyleSheet } from 'react-native'
import MyFooter from './footers/MyFooter'

export default class Welcome extends Component {

    componentDidMount(){
        setTimeout(() => {
            this.props.navigation.navigate('login');            
        }, 2500);
    }

    render() {
        return (
            <View style={{width: '100%', height: '100%', backgroundColor: '#000'}}>
                <StatusBar translucent={true} backgroundColor={'transparent'} barStyle="light-content"/>

                <ImageBackground
                    source={require('../../img/welcom-swingby-v1.png')}
                    style={{width: '100%', height: '100%'}}>

                    <MyFooter style={styles.footer}/>

                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        padding: 10
    },
    body:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: '100%',
        height: '100%'
    },
    bg_image:{
        opacity: 1
    },
    footer:{
        flex: 1,
        color: '#fff'
    }
});