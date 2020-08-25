import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import MyFooter from '../footers/MyFooter'

export default class Loading extends Component {

    componentDidMount(){
        // setTimeout(() => {
        //     //this.props.navigation.navigate('loading');
        //     this.props.navigation.navigate('loading');
        // }, 2500);
    }

    
    render() {
        return (
            <View style={styles.container}>
                
                <ImageBackground
                    source={require('../../../img/loader-orange.gif')}
                    style={{width: '20%', height: '20%'}}>

                    <Text> loading....... </Text>

                </ImageBackground>

                <MyFooter/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: "100%",
        backgroundColor: "#000",
        alignContent: "center"
    },
});