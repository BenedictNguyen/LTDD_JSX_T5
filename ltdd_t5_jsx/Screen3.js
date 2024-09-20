import React from 'react';
import {Text, Image, View, TouchableOpacity, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import vsRed from './assets/vsred.png';

const Screen3 = () => {
    return (
        <View style = {{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Image source = {vsRed} alt = 'vsred'/>
        </View>
    );
};
export default Screen3;