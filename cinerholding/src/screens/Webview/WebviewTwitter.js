/* eslint-disable prettier/prettier */
import React from 'react';
import {WebView} from 'react-native-webview';

export default function DetailsScreen({navigation}) {
  return (
            <WebView
              style={{flex: 1}}
             containerStyle={{height:50}}
              source={{
                uri: 'https://twitter.com/haberturk/status/1571813252098555904?s=48&t=XfTQDIQ_DlDi-D67W4353g',
              }}
             />
  );
}
