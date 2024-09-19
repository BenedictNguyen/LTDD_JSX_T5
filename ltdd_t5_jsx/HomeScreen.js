import React from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import vsBlue from './assets/vsblue.png';
import starIcon from './assets/staricon.png';
import questionIcon from './assets/questionicon.png';
import vectorIcon from './assets/vectoricon.png';

const HomeScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignContent: 'center'
    }}>
      <View style={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Image source={vsBlue} alt='vsblue'/>
        <Text style={{
          fontFamily: 'Roboto',
          fontSize: 15,
          fontWeight: '400'
        }}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng </Text>
      </View>
      
      <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <View style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 10
        }}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Image source={starIcon} alt='staricon'/>
            <Image source={starIcon} alt='staricon'/>
            <Image source={starIcon} alt='staricon'/>
            <Image source={starIcon} alt='staricon'/>
            <Image source={starIcon} alt='staricon'/>
          </View>

          <View style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center'
          }}>
            <Text style={{
              fontFamily: 'Roboto',
              fontSize: 18,
              fontWeight: '700',
              paddingTop: 10
            }}>1.790.000 đ</Text>
          </View>

          <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-start'
          }}>
            <Text style={{
              fontFamily: 'Roboto',
              fontSize: 12,
              fontWeight: '700',
              paddingLeft: 50,
              paddingTop: 10
            }}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
          </View>
        </View>
        <View style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <View style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'flex-start'
            }}>
              <Text style={{
                fontFamily: 'Roboto',
                fontSize: 15,
                fontWeight: '400',
                paddingTop: 10
              }}>(Xem 828 đánh giá)</Text>
          </View>

          <View style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'flex-start'
          }}>
             <Text style={{
              fontFamily: 'Roboto',
              fontSize: 15,
              fontWeight: '700',
              paddingRight: 50,
              textDecorationLine: 'line-through',
              color: 'rgba(0, 0, 0, 5.8)',
              paddingTop: 10
            }}>1.790.000 đ</Text>
          </View>

          <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingRight: 100,
            paddingTop: 10
          }}>
            <Image source={questionIcon} alt='questionicon'/>
          </View>
        </View>
      </View>

      <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20
      }}>
        <TouchableOpacity 
          onPress={()=>navigation.navigate('Screen1')}
          style={{
          width: 332,
          height: 34,
          borderColor: 'black',
          borderWidth: 2,
          borderRadius: 8
        }}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <View style={{
                width: 300,
              }}>
                <Text style={{
                  fontSize: 15,
                  fontWeight: '400',
                  textAlign: 'center',
                  paddingTop: 5,
                  paddingLeft: 50
                }}>4 MÀU-CHỌN MÀU</Text>
            </View>
            <View style={{
              width: 12,
              paddingTop: 5
            }}>
              <Image source={vectorIcon} alt='vectoricon'/>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style = {{
        flex: 0.5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      </View>
       <View style = {{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <TouchableOpacity style = {{
          width: 326,
          height: 44,
          backgroundColor: 'red',
          borderRadius: 12
        }}>
          <Text style = {{
            fontWeight: 700,
            fontSize: 20,
            color: 'white',
            textAlign: 'center',
            paddingTop: 12
          }}>CHỌN MUA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
