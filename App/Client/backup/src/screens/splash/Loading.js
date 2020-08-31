import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
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
                <View style={styles.bg_loader}>
                    <Image 
                        style={styles.loader}
                        source={require('../../../img/loader-orange-v2.gif')}/>

                    <Text style={styles.loader_text}> loading...</Text>
                </View>

                <MyFooter/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#000",
    },
    bg_loader: {
        width: "100%",
        height: "100%",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center"
    },
    loader: {
        height: 200,
        width: 200,
    },
    loader_text: {
        fontSize: 40,
        color: '#FFFFFF',
        textShadowColor: '#FFFFFF',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 10,
    }
});