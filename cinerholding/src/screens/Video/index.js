/* eslint-disable prettier/prettier */
import React, {} from 'react';
import {
  View,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import {
  Icon,
  Text
} from 'native-base';
import VideoPlayer from 'react-native-video-controls';

const VideoScreenr = ({navigation}) => {
  const {height} = Dimensions.get('screen');

  return (
    <View style={{flex: 1, width: '100%'}}>
      <View style={{width: '100%', height: height / 3, alignItems: 'center'}}>
        <VideoPlayer
          source={{
            uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
          }}
          resizeMode={'contain'}
          seekColor={'#50A5F4'}
          navigator={navigation}
          volume={0}
        />
      </View>
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontWeight:'bold'}}>Reklam bölümü ile ilgili çalışma yapamadım.</Text>
      </View>
      <View style={{alignItems:'flex-start',marginLeft:20}}>
        <TouchableOpacity
         onPress={() => navigation.navigate('Home')}
         style={{backgroundColor:'white',height:50,width:50,justifyContent:'center',alignItems:'center',borderRadius:30}}>
           <Icon name="ios-home-outline" size={25}  />
        </TouchableOpacity>
        </View>
    </View>
  );
};

export default VideoScreenr;
