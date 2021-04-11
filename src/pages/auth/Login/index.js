import React, {useState} from 'react'
import { Input, Text, Button, Icon} from '@ui-kitten/components';
import { View, StyleSheet, TouchableWithoutFeedback, Alert } from 'react-native';
import auth from '@react-native-firebase/auth'

const AlertIcon = (props) => (
    <Icon {...props} name='alert-circle-outline'/>
);

const Login = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secureTextEntry, setSecureTextEntry] = React.useState(true);

    const onLoginPress = () => {
        // console.log(email + " " + password)
        auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
            setEmail('');
            setPassword('');
            Alert.alert(email + ' Berhasil Login');
            navigation.navigate('HomeScreen')
        })
        .catch(error => {
            Alert.elert(error.code);
        });
       
    }

    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };
    
    const renderIcon = (props) => (
        <TouchableWithoutFeedback onPress={toggleSecureEntry}>
            <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'}/>
        </TouchableWithoutFeedback>
    );
    return (
        <>
            
            <View style={styles.wrapper}>
            <Text category="h4" style={styles.title}>Event HIL ke-2</Text>
            <Input
                placeholder='Masukkan e-mail'
                size='medium'
                label='E-mail'
                caption='Gunakan @gmail.com'
                style={styles.input}
                captionIcon={AlertIcon}
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <Input
                label='Password'
                placeholder='Masukan kata sandi'
                caption='Minimal 6 huruf'
                accessoryRight={renderIcon}
                captionIcon={AlertIcon}
                secureTextEntry={secureTextEntry}
                style={styles.input}
                value={password}
                onChangeText={text => setPassword(text)}
            />
                <Button style={styles.button} status="warning" onPress={onLoginPress}>Masuk</Button>
                <Text style={{color: '#fff', textAlign: 'center', padding: 10}}>Belum punya akun?</Text>
                <Button style={styles.button} status="warning" onPress={() => navigation.navigate('SignupScreen')}>Daftar</Button>
                
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
        paddingRight: 20
    },
    title: {
        // backgroundColor: '#102C75',
        textAlign: 'center',
        paddingBottom: 20,
        color: '#FDC945',
        fontWeight: 'bold'
    },
    button: {
        color: 'black'
    },
    input: {
        marginBottom: 15
    }
  });
export default Login
