import React from 'react';
import {Text, Image, View, TouchableOpacity, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import vsBlack from './assets/vsblack.png';

const Screen4 = () => {
    return (
        <View style = {{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Image source = {vsBlack} alt = 'vsblack'/>
        </View>
    );
};
export default Screen4;