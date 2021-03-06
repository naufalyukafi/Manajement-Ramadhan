import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator, HeaderBackButton } from "@react-navigation/stack"
import { Button, Icon } from '@ui-kitten/components';
import { createDrawerNavigator } from "@react-navigation/drawer"

import {LoginScreen, SignupScreen} from "../pages/auth"
import {HomeScreen, TodoScreen, TodoAlScreen, TodoPagiScreen, TodoSoreScreen} from "../pages/public"

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
            <Stack.Screen name="Todo List Al-Qur'an" component={TodoScreen} option={{ headerTitle: "Todo List Al-Qur'an"}} />
            <Stack.Screen name="Todo List Al-Ma'tsurat" component={TodoAlScreen} />
            <Stack.Screen name="Todo List Al-Ma'tsurat Pagi" component={TodoPagiScreen} />
            <Stack.Screen name="Todo List Al-Ma'tsurat Sore" component={TodoSoreScreen} />
        </Stack.Navigator>
    )

}

const TodoStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Todo List Al-Qur'an" 
                component={TodoScreen} 
                options={{
                    headerTitle: "Todo List Al-Qur'an",
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
                <Drawer.Screen name="Todo List Al-Qur'an" component={TodoStack} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}




export default Router
