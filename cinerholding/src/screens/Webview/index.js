/* eslint-disable prettier/prettier */
import {TouchableOpacity} from 'react-native';
import {Card, View, Icon } from 'native-base';
import React from 'react';
import WebviewTwitter from './WebviewTwitter';
import WebviewInstagram from './WebviewInstagram';

export default function DetailsScreen({navigation}) {
  return (
    <View style={{flex: 1,padding:10}}>
          <Card style={{flex: 1}}>
            <WebviewTwitter />
          </Card>
          <Card style={{flex: 1}}>
            <WebviewInstagram />
          </Card>
          <View style={{alignItems:'flex-start',marginTop:10}}>
        <TouchableOpacity
         onPress={() => navigation.navigate('Home')}
         style={{backgroundColor:'white',height:50,width:50,justifyContent:'center',alignItems:'center',borderRadius:30}}>
           <Icon name="ios-home-outline" size={25}  />
        </TouchableOpacity>
        </View>
          </View>
  );
}
