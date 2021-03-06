import React from 'react'
import { ListItem, Icon, Card, Text } from '@ui-kitten/components';
import {StyleSheet} from 'react-native'
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'

const Cards = ({id, title, complete}) => {
    var user = auth().currentUser;
    async function toggleComplete(){
        await firestore()
            .collection(user.uid)
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
                onPress={() => toggleComplete()}
            />
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

export default React.memo(Cards)
