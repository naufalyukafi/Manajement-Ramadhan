import React, {useState, useEffect} from 'react'
import {StyleSheet, View, FlatList} from 'react-native'
import { Input,  Button, Spinner, Text } from '@ui-kitten/components';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'
import Cards from '../../../components/Cards'

const Todo = () => {
    const [todo, setTodo] = useState('')
    const [loading, setLoading] = useState(true)
    const [todos, setTodos] = useState([])

    var user = auth().currentUser;
    const ref = firestore().collection(user.uid) 

    async function addTodo() {
        await ref.add({
            title: todo,
            complete: false
        });
        setTodo('');
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
                    renderItem={({item}) => <Cards {...item} />}
                />
            </View>
            <Input 
                value={todo}
                onChangeText={setTodo}
                placeholder="Masukkan Teks Hari ke-"
                style={styles.input}
            />
            <Button onPress={() => addTodo()}>Submit</Button>
        </>    
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    }
})

export default Todo
