import React, {useState, useEffect} from 'react'
import { Input, Text, Card, Button } from '@ui-kitten/components';
import { View, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';

const Home = ({navigation}) => {
    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState()

    // Handle user state changes
    const onAuthStateChanged = (user) => {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    const onSignOut = () => {
        auth()
        .signOut()
        .then(() => {
            Alert.alert('Anda Berhasil Keluar Akun')
            navigation.navigate('LoginScreen')
        });
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);
    
    if (initializing) return null;

    if (!user) {
        return (
          <View>
            <Text>Login Dulu!</Text>
          </View>
        );
      }



    return (
        <>
        <Text style={styles.welcome}>Halo kak {user.email}, silahkan mengikuti Event Hafidz IT yah!</Text>
        <View style={styles.wrapper}>
            
            <View style={styles.containerBox}>
                <View style={[styles.box, {backgroundColor: '#93CB93'}]}>
                    <TouchableOpacity onPress={() => navigation.navigate("Todo List Al-Qur'an")}>
                        <Text style={styles.titleBox} >To Do List Al-Qur'an</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.box}>
                    <TouchableOpacity onPress={() => navigation.navigate("Todo List Al-Ma'tsurat")}><Text style={styles.titleBox}> Todo Al Ma'tsurat</Text></TouchableOpacity>
                </View>
            </View>
            {/* <View style={styles.containerBox}>
                <View style={styles.box}>
                    <TouchableOpacity>
                        <Text style={styles.titleBox}>Baca Al-Qur'an</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.box, {backgroundColor: '#93CB93'}]}>
                    <TouchableOpacity>
                        <Text style={styles.titleBox}>FAQ?</Text>
                    </TouchableOpacity>
                </View>
            </View> */}
            <Button style={styles.btnSignout} onPress={onSignOut}>Keluar</Button>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#102C75',
        paddingLeft: 20,
        paddingRight: 20,
    },
    welcome: {
        backgroundColor: '#102C75',
        paddingLeft: 20,
        paddingRight: 20,
        color: '#fff',
        paddingTop: 20
    },
    containerBox: {
        flexDirection: 'row',
    },
    box: {
        height: 100,
        width: '48%',
        backgroundColor: '#FDC945',
        marginRight: 10,
        marginTop: 10,
        justifyContent: 'center',
        textAlign: 'center' 
    },
    titleBox: {
        textAlign: 'center',
        fontWeight: 'bold'
    },
    btnSignout: {
        marginTop: 20
    }
});

export default Home


