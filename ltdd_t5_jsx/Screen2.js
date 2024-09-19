import React from 'react';
import {Text, Image, View, TouchableOpacity, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import vsBlue from './assets/vsblue.png';

const Screen2 = () => {
  return (
    <View style = {{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Image source = {vsBlue} alt = 'vsblue'/>
    </View>
  );
};
export default Screen2;