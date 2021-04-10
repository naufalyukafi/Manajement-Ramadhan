import React from 'react'
import { Input, Text, Card } from '@ui-kitten/components';
import { View, StyleSheet, TouchableOpacity} from 'react-native';

const Home = ({navigation}) => {
    const [flexDirection, setFlexDirection] = React.useState('column')

    return (
        <View style={styles.wrapper}>
            <View style={styles.containerBox}>
                <View style={[styles.box, {backgroundColor: '#93CB93'}]}>
                    <TouchableOpacity onPress={() => navigation.navigate('Todo')}>
                        <Text style={styles.titleBox} >To Do List Al-Qur'an</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.box}>
                    <TouchableOpacity><Text style={styles.titleBox}>Istighfar</Text></TouchableOpacity>
                </View>
            </View>
            <View style={styles.containerBox}>
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
            </View>

        </View>
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
    containerBox: {
        flexDirection: 'row',
    },
    box: {
        height: 100,
        width: '50%',
        backgroundColor: 'orange',
        marginRight: 10,
        marginTop: 10,
        justifyContent: 'center',
        textAlign: 'center' 
    },
    titleBox: {
        textAlign: 'center',
        fontWeight: 'bold'
    }
});

export default Home


