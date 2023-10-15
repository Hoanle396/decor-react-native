import TextInput from '@/components/TextField/TextInput';
import { color } from '@/constants/color';
import { FCC } from '@/types';
import { Entypo } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, SafeAreaView, StyleSheet, View } from 'react-native';

const Register: FCC<{}> = () => {
  const [active, setActive] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={require('@/assets/logo.png')}
        alt="Logo Image"
      />
      <View style={styles.form}>
        <TextInput
          label="Email/SDT"
          placeholder="E.g. Sentro User Interface"
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          active={active}
          // error="Email not found"
          rightIcon={<Entypo name="email" size={18} color={color.primary} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    alignItems: 'center',
    gap: 58,
  },
  button: {
    width: 213,
  },
  form: {
    paddingHorizontal: 18,
    width: '100%',
  },
  image: {
    alignSelf: 'center',
    height: 171,
    top: 30,
  },
});
