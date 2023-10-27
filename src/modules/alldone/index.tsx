import Button from '@/components/Button';
import { color } from '@/constants/color';
import { FCC } from '@/types';
import { RootStackRoute } from '@/types/navigation';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, View, Text } from 'react-native';

const Alldone: FCC<{}> = () => {
  const navigation = useNavigation<NavigationProp<RootStackRoute, 'alldone'>>();

  const onPress = () => {
    navigation.navigate('home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={require('@/assets/logo.png')}
        alt="Logo Image"
      />
      <View style={styles.body}>
        <Text style={styles.text2}>Tất cả đã xong</Text>
        <Image
          style={styles.image}
          source={require('@/assets/beatifull.png')}
          alt="beatifull img"
        />
        <Button style={styles.button} onPress={onPress}>
          Trải nghiệm thôi
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Alldone;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    alignItems: 'center',
    gap: 58,
  },
  button: {
    width: 302,
  },
  image: {
    alignSelf: 'center',
    height: 171,
    top: 30,
  },
  body: {
    display: 'flex',
    height: '70%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 30,
  },
  text2: {
    fontSize: 30,
    fontWeight: '700',
  },
});
