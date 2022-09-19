/* eslint-disable prettier/prettier */
import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import styles from './style';
import {
  Container,
  Text,
} from 'native-base';
const menu = [
  {
    screen_tag: 'CAROUSEL_AUTO_HEIGHT',
    name: 'CAROUSEL AUTO HEIGHT',
  },
  {
    screen_tag: 'WEBVIEW_AUTO_HEIGHT',
    name: 'WEBVIEW AUTO HEIGHT',
  },
  {
    screen_tag: 'VIDEO_REKLAM',
    name: 'VIDEO REKLAM',
  },
  {
    screen_tag: 'ASSETS',
    name: 'ASSETS',
  },
];
export default function HomeScreen({navigation}) {
  return (
    <Container style={{flex: 1, justifyContent: 'space-around', padding: 50,alignItems:'center'}}>
      {menu.map(item => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen_tag)}
          style={styles.buttonStyle}>
          <Text style={styles.textStyle}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </Container>
  );
}
