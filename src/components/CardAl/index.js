import React from 'react'
import { ListItem, Icon, Card, Text } from '@ui-kitten/components';
import {StyleSheet} from 'react-native'
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'

const CardAl = ({id, title, complete}) => {
    var user = auth().currentUser;

    async function toggleCompletePagi(){
        await firestore()
            .collection(user.uid + 'pagi')
            .doc(id)
            .update({
                complete: !complete
            })
    }
    async function toggleCompleteSore(){
        await firestore()
            .collection(user.uid + 'sore')
            .doc(id)
            .update({
                complete: !complete
            })
    }
    const CheckIcon = (props) => (
        <Icon name={complete ? 'checkmark' : 'close'} {...props} />
    );
    return (
        <Card style={styles.card} status='info'>
            <Text>Hafidz IT Lumajang</Text>
            <ListItem
                title={title} 
                accessoryLeft={CheckIcon}    
                onPress={() => toggleCompletePagi()}
            /> 
            {/* {user.uid + 'pagi' ? 
            <ListItem
                title={title} 
                accessoryLeft={CheckIcon}    
                onPress={() => toggleCompletePagi()}
            /> : user.uid + 'sore' ?  
            <ListItem
                title={title} 
                accessoryLeft={CheckIcon}    
                onPress={() => toggleCompleteSore()}
            /> : ''
            } */}
            
        </Card>
    )
}

const styles = StyleSheet.create({
    card: {
        marginTop: 10
    },
    listItem: {
      backgroundColor: 'orange',
      marginBottom: 10
    },
  });

export default React.memo(CardAl)
