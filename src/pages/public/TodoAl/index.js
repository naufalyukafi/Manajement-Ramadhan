import React, {useState, useEffect} from 'react'
import {StyleSheet, View, FlatList, Alert, TouchableOpacity} from 'react-native'
import { Input,  Button, Spinner, Text } from '@ui-kitten/components';

const TodoAl = ({navigation}) => {
    return (
         <>
            <View style={styles.wrapper}>
            <TouchableOpacity style={styles.btnTitle}>
                <Text style={styles.textTitle} onPress={() => navigation.navigate("Todo List Al-Ma'tsurat Pagi")} >Al Ma'surat Pagi</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnTitle}>
                <Text style={styles.textTitle} onPress={() => navigation.navigate("Todo List Al-Ma'tsurat Sore")}>Al Ma'surat Sore</Text>
            </TouchableOpacity>
            </View>
        </>    
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#102C75',
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'center',
        
    },
    btnTitle: {
        backgroundColor: '#FDC945',
        marginTop: 20,
        paddingBottom: 20,
        borderRadius: 50
    },
    textTitle: {
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center'
    }
})

export default TodoAl
