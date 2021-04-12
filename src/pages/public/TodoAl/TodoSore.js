import React, {useState, useEffect} from 'react'
import {StyleSheet, View, FlatList, Alert, TouchableOpacity} from 'react-native'
import { Input,  Button, Spinner, Text } from '@ui-kitten/components';
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import Sore from '../../../components/CardAl/Sore'

const TodoSore = () => {
    const [todo, setTodo] = useState('')
    const [loading, setLoading] = useState(true)
    const [todos, setTodos] = useState([])

    var user = auth().currentUser;
    const ref = firestore().collection(user.uid + 'sore')

    async function addTodo() {
        if(todo === ''){
            Alert.alert('Masukkan teks terlebih dahulu!')
        } else {
            await ref.add({
                title: todo,
                complete: false
            });
            setTodo('');
        }
       
    }

    useEffect(() => {
        return ref.onSnapshot((querySnapshot) => {
            const list = []
            querySnapshot.forEach(doc => {
                const {title, complete} = doc.data();
                list.push({
                    id: doc.id,
                    title,
                    complete
                })
            })
            setTodos(list)
            if(loading) {
                setLoading(false)
            }
        })
    }, [])

    if(loading) {
        return (
            <View  style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text category="h5" style={{fontWeight: 'bold'}} >Harap Tunggu Sebentar</Text>
                <View style={{marginTop: 10}} />
                <Spinner />
            </View>
        )
    }


    return (
        <>
        <View style={styles.wrapper}>
            <FlatList
                style={{flex: 1}}
                data={todos}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <Sore {...item} />}
            />
        </View>
        <Input 
            value={todo}
            onChangeText={setTodo}
            placeholder="1. Hari pertama puasa ramadhan ~ contoh"
            style={styles.input}
        />
        <Button onPress={(() => addTodo())}>Submit</Button>
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
        backgroundColor: 'orange',
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

export default TodoSore
