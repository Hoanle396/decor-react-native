import { useUser } from '@/apis/auth/queries';
import { color } from '@/constants/color';
import { FCC } from '@/types';
import { RootStackRoute } from '@/types/navigation';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef } from 'react';
import { Animated, Image, StyleSheet, View } from 'react-native';
import * as SecureStore from 'expo-secure-store';
type Props = {};

const Splash: FCC<Props> = ({}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation<NavigationProp<RootStackRoute, 'splash'>>();
  const { refetch } = useUser({
    onSuccess: () => {
      navigation.navigate('home');
    },
    onError: async () => {
      await SecureStore.deleteItemAsync('access_token');
      await SecureStore.deleteItemAsync('refresh_token');

      navigation.navigate('welcome');
    },
    enabled: false,
  });
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
    const timeout = setTimeout(() => refetch(), 2500);
    return () => clearTimeout(timeout);
  }, [fadeAnim, navigation, refetch]);

  return (
    <View style={styles.root}>
      <Animated.View
        style={[
          styles.logo,
          {
            opacity: fadeAnim,
          },
        ]}
      >
        <Image
          style={styles.image}
          source={require('@/assets/logo.png')}
          alt="Logo Image"
        />
      </Animated.View>
      <View style={styles.bottom}>
        <Image
          style={styles.background}
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
  background: {},
});
