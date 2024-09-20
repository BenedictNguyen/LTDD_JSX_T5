import React from 'react';
import {Text, Image, View, TouchableOpacity, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import vsSilver from './assets/vsilver.png';

const Screen5 = () => {
    return (
        <View style = {{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Image source = {vsSilver} alt = 'vssilver'/>
        </View>
    );
};
export default Screen5;