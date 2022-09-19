/* eslint-disable prettier/prettier */
import * as React from 'react';
import {View, Text, Button} from 'react-native';

export default function AssetsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{marginBottom:20,fontWeight:'bold',color:'black'}}>Bu sayfada istenileni anlamadım.</Text>
      <Button
        title="Geri"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}
