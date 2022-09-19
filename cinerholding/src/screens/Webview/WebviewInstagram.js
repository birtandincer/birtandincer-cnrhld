/* eslint-disable prettier/prettier */
import React from 'react';
import {WebView} from 'react-native-webview';

export default function DetailsScreen({navigation}) {
  return (
            <WebView
              style={{flex: 1}}
             containerStyle={{height:50}}
              source={{
                uri: 'https://www.instagram.com/p/ChcuMKFKpcT/?igshid=ZjE0ZGRhNjQ=',
              }}
             />
  );
}
