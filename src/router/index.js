import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator, HeaderBackButton } from "@react-navigation/stack"
import { Button, Icon } from '@ui-kitten/components';
import { createDrawerNavigator } from "@react-navigation/drawer"

import {LoginScreen, SignupScreen} from "../pages/auth"
import {HomeScreen, TodoScreen} from "../pages/public"

import {TouchableWithoutFeedback} from "react-native"

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

const renderIcon = (props) => (
    <TouchableWithoutFeedback>
        <Icon {...props} name='menu-arrow' />
    </TouchableWithoutFeedback>
);

const HomeStack = ({navigation}) => {
    return(
        <Stack.Navigator initialRouteName="LoginScreen">
            <Stack.Screen 
                name="LoginScreen" 
                component={LoginScreen} 
                options={{
                    headerTitle: false, 
                    headerTransparent: true,
                }} 
            />
            <Stack.Screen 
                name="SignupScreen" 
                component={SignupScreen} 
                options={{headerTitle: "Daftar Akun Baru"}}
            />
            <Stack.Screen 
                name="HomeScreen" 
                component={HomeScreen} 
                options={{
                    headerTitle: "Beranda",
                    headerLeft: false,
                    headerRight: () => (
                        <Button 
                            accessoryLeft={renderIcon} 
                            onPress={() => navigation.goBack()}  
                            status="basic" 
                            style={{backgroundColor: '#fff', marginRight: 10}} 
                            

                        />
                    )
                }}
            />
            <Stack.Screen name="Todo" component={TodoScreen} />
            {/* <Stack.Screen component={HomeDrawer} /> */}
        </Stack.Navigator>
    )

}

const TodoStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Todo" 
                component={TodoScreen} 
                options={{
                    headerTitle: "Todo",
                    headerLeft: false,
                    headerRight: () => (
                        <Button 
                            accessoryLeft={renderIcon} 
                            onPress={() => navigation.goBack()}  
                            status="basic" 
                            style={{backgroundColor: '#fff', marginRight: 10}} 
                            

                        />
                    )
                }}
            />
        </Stack.Navigator>
    )
}

const Router = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Beranda">
                <Drawer.Screen name="Beranda" component={HomeStack} />
                <Drawer.Screen name="Todo" component={TodoStack} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}




export default Router
