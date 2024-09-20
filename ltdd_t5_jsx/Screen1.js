import React from 'react-native';
import {Text, Image, View, TouchableOpacity, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import vsBlue from './assets/vsblue.png';
import blueIcon from './assets/blueicon.png';
import recIcon from './assets/recicon.png';
import redIcon from './assets/redicon.png';
import blackIcon from './assets/blackicon.png';
const Screen1 = () => {
  const navigation = useNavigation();
  return(
    <View style = {{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <View style = {{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingRight: 100
      }}>
        <Image style = {{
          width: 112,
          height: 132
        }}
         source = {vsBlue} alt = 'vsblue'/>
         <Text>Điện Thoại Vsmart Joy 3{'\n'}Hàng chính hãng</Text>
      </View>
      
      <View style={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <View style = {{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          paddingRight: 200,
          width: '100%'
        }}>
          <Text style = {{
            fontWeight: 400,
            fontSize: 15
          }}>Chọn một màu bên dưới:</Text>
         </View>
        <TouchableOpacity onPress={()=>navigation.navigate('Screen2')}>
            <Image style={{
            marginBottom: 1
          }}
          source={blueIcon} alt='blueicon'/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Screen3')}>
          <Image style={{
          marginBottom: 5
          }}
          source={redIcon} alt='redicon'/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Screen4')}>
          <Image style={{
          marginBottom: 5
          }}
          source={blackIcon} alt='blackicon'/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Screen5')}>
          <Image source={recIcon} alt='recicon'/>
        </TouchableOpacity>
      </View>
      <View style = {{
        flex: 0.2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(196, 196, 196, 1)'
      }}></View>
      
      <View style = {{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <TouchableOpacity 
        style = {{  
          width: 326,
          height: 44,
          backgroundColor: 'rgba(25, 82, 226, 0.58)',
          borderRadius: 12
        }}>
          
          <Text style = {{
            fontFamily: 'Roboto',
            fontWeight: 700,
            fontSize: 20,
            color: 'white',
            textAlign: 'center',
            paddingTop: 12
          }}>XONG</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Screen1;
