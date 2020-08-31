import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import MyFooter from './footers/MyFooter'

export default class SignUp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={{fontSize: 40, fontWeight: "bold", color: "#FFFFFF"}}> Welcome </Text>
                    <Text style={{fontSize: 30, fontWeight: "bold", color: "#FFA500"}}> To Sandy's Too </Text>
                </View>

                <View style={styles.inputSection}>
                    <View style={{width: "50%"}}>
                        {/* <Text style={{fontSize: 20}}> Login </Text> */}
                        <TextInput 
                            placeholder="Add your login..." 
                            style={styles.textInput} 
                            autoCapitalize="none" />
                    </View>
                    <View style={{width: "50%"}}>
                        {/* <Text style={{fontSize: 20}}> Password </Text> */}
                        <TextInput 
                            placeholder="Add your email..." 
                            style={styles.textInput} 
                            autoCapitalize="none" />
                    </View>
                    <View style={{width: "50%"}}>
                        {/* <Text style={{fontSize: 20}}> Password </Text> */}
                        <TextInput 
                            placeholder="Add your password..." 
                            style={styles.textInput} 
                            autoCapitalize="none" />
                    </View>
                    <View style={{width: "50%"}}>
                        {/* <Text style={{fontSize: 20}}> Password </Text> */}
                        <TextInput 
                            placeholder="Confirm your password..." 
                            style={styles.textInput} 
                            autoCapitalize="none" />
                    </View>
                </View>

                <View style={styles.buttonSection}>

                    <TouchableOpacity
                        style={styles.loginButton}
                        onPress={()=> {}}>
                        <Text style={styles.textButton}>Sign Up</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.signUpButton}
                        onPress={()=> {this.props.navigation.navigate("login")}}>
                        <Text style={styles.textButton}>Sign In</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.forgotPasswordButton}
                        onPress={()=> {this.props.navigation.navigate("forgotPassword")}}>
                        <Text style={{color: "#fff", borderBottomWidth: 1, borderBottomColor: "#fff", marginTop: 10}}>Forgot your Password ?</Text>
                    </TouchableOpacity>
                </View>

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
    title:{
        height: "30%", 
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "#abcdef",
    },
    inputSection:{
        height: "30%", 
        width: "100%",
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "#fff",
    },
    textInput:{
        // flex: 1,
        // marginTop: Platform.OS === 'ios' ? 0 : 12,
        width: "100%",
        margin: 10,
        paddingLeft: 20,
        color: '#000',
        backgroundColor: "#fff",
        borderWidth: 1,
        borderRadius: 20,
    },
    buttonSection:{
        height: "30%", 
        width: "100%",
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "#fff",
    },
    loginButton: {
        width: 200, 
        height: 60, 
        borderRadius: 20,
        backgroundColor:"#FFA500", 
        alignItems: "center", 
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 10
    },
    signUpButton: {
        width: 130, 
        height: 60, 
        borderRadius: 20,
        borderColor: "#FFA500",
        borderWidth: 1,
        backgroundColor:"#000",
        alignItems: "center", 
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 10
    },
    textButton: {
        fontSize: 25, 
        fontWeight: "bold", 
        color: "#fff"
    }
});