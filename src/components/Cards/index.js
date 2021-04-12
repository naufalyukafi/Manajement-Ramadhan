import React, {useState, useEffect} from 'react'
import { ListItem, Icon } from '@ui-kitten/components';
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
        <ListItem
            title={title} 
            accessoryLeft={CheckIcon}    
            onPress={() => toggleComplete()}
        />
    )
}

export default React.memo(Cards)
