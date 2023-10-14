import { color } from '@/constants/color';
import { FCC } from '@/types';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
type Props = {};

const Splash: FCC<Props> = ({}) => {
  return (
    <View style={styles.root}>
      <View style={styles.logo}>
        <Image
          style={styles.image}
          source={require('@/assets/logo.png')}
          alt="Logo Image"
        />
      </View>
      <View style={styles.bottom}>
        <Image
          style={styles.backgroud}
          source={require('@/assets/bg-splash.png')}
          alt="Logo Image"
        />
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    backgroundColor: color.white,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  logo: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
  },
  image: {
    alignSelf: 'center',
    height: 171,
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
  },
  backgroud: {},
});
