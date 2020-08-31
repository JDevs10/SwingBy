import React, { Component } from 'react'
// import { createAppContainer, createSwitchNavigator } from '@react-navigation/native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Welcome from '../screens/Welcome';
import SignUp from '../screens/SignUp';
import Login from '../screens/Login';
import ForgotPassword from '../screens/ForgotPassword';
import Loading from '../screens/splash/Loading';
import Home from '../screens/home/Home';
import Abous from '../screens/home/Abous';
import ContactUs from '../screens/home/ContactUs';

import DrawerContent from '../screens/drawerContent/DrawerContent';

export default class Router extends Component {
    render() {

        // when user is logged in
        const Drawer = createDrawerNavigator();

        function DrawerNavigation(){
            return (
                <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>} initialRouteName="Home">
                    <Drawer.Screen name="Home" component={Home} />
                    <Drawer.Screen name="Abous" component={Abous} />
                    <Drawer.Screen name="ContactUs" component={ContactUs} />
                </Drawer.Navigator>
            );
        }

        // when user is logged out
        const Navigation = createAppContainer(createSwitchNavigator(
            {
                welcome: Welcome,
                login: Login,
                signUp: SignUp,
                forgotPassword: ForgotPassword,
                loading: Loading,
                home: DrawerNavigation
            },
            {
                initialRouteName: 'welcome',
            }
        ));

        return (
            <Navigation />
        );
    }
}
