import TextInput from '@/components/TextField/TextInput';
import { color } from '@/constants/color';
import { FCC } from '@/types';
import { Entypo } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import Button from '@/components/Button';
import Checkbox from 'expo-checkbox';

import { RootStackRoute } from '@/types/navigation';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Pressable,
} from 'react-native';
import { useToggle } from '@/hooks/useToggle';
import { login } from '@/apis/auth/request';
import { useMutation } from 'react-query';
import * as SecureStore from 'expo-secure-store';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Login: FCC<{}> = () => {
  const [isPasswordShown, setIsPasswordShown] = useToggle(true);
  const [active, setActive] = useToggle(false);
  const [activePassword, setActivePassword] = useToggle(false);
  const [isChecked, setIsChecked] = useToggle(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation<NavigationProp<RootStackRoute, 'login'>>();

  const { mutate } = useMutation(login, {
    onSuccess: async data => {
      await SecureStore.setItemAsync('access_token', data.access_token);
      await SecureStore.setItemAsync('refresh_token', data.refresh_token);
      navigation.navigate('home');
    },
  });

  const handleLogin = () => {
    if (
      !password.match(/^(?=.*[A-Za-z\d])[A-Za-z\d]{8,}$/) ||
      !email.match(/^\S+@\S+\.\S+$/)
    ) {
      return;
    }
    mutate({ username: email.toLowerCase(), password });
  };

  const onRegister = () => {
    navigation.navigate('register');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: color.white }}>
      <KeyboardAwareScrollView
        contentContainerStyle={[styles.container, { paddingBottom: 0 }]}
      >
        <Image
          style={styles.image}
          source={require('@/assets/logo.png')}
          alt="Logo Image"
        />
        <View style={styles.root}>
          <View style={styles.form}>
            <TextInput
              label="Email"
              keyboardType="email-address"
              placeholder="Enter your email"
              onFocus={setActive}
              onBlur={setActive}
              active={active}
              value={email}
              onChangeText={setEmail}
              error={
                email.match(/^\S+@\S+\.\S+$/) ? '' : email && 'Email invalid'
              }
              rightIcon={
                <Entypo name="email" size={18} color={color.primary} />
              }
            />
          </View>

          <View style={styles.form}>
            <TextInput
              label="Password"
              placeholder="Enter your password"
              secureTextEntry={isPasswordShown}
              onFocus={setActivePassword}
              onBlur={setActivePassword}
              active={activePassword}
              value={password}
              onChangeText={setPassword}
              error={
                password.match(/^(?=.*[A-Za-z\d])[A-Za-z\d]{8,}$/)
                  ? ''
                  : password && 'Password minimum 8 characters'
              }
              rightIcon={
                <TouchableOpacity onPress={setIsPasswordShown}>
                  {isPasswordShown ? (
                    <Ionicons name="eye" size={18} color={color.primary} />
                  ) : (
                    <Ionicons name="eye-off" size={18} color={color.primary} />
                  )}
                </TouchableOpacity>
              }
            />
          </View>

          <View style={styles.checkBox}>
            <View style={styles.flexRow}>
              <Checkbox
                value={isChecked}
                onValueChange={setIsChecked}
                color={isChecked ? color.primary : undefined}
              />
              <Text style={{ marginLeft: 5}}>Remember password</Text>
            </View>
            <Pressable>
              <Text style={styles.forGotPassword}>Forgot password?</Text>
            </Pressable>
          </View>
          <Button style={styles.button} onPress={handleLogin}>
            Login
          </Button>
          <View style={styles.flexRow}>
            <View style={styles.under} />
            <Text style={styles.orLoginWith}>Or Login with</Text>
            <View style={styles.under} />
          </View>
          <View style={[styles.flexRow, { gap: 20 }]}>
            <TouchableOpacity style={styles.imageFGA}>
              <Image
                source={require('@/assets/facebookIcon.png')}
                style={styles.imageFGA}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageFGA}>
              <Image
                source={require('@/assets/googleIcon.png')}
                style={styles.imageFGA}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageFGA}>
              <Image
                source={require('@/assets/appleIcon.png')}
                style={styles.imageFGA}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.hasAccount}>
          Already have an account?{' '}
          <Text style={styles.register} onPress={onRegister}>
            Register
          </Text>
        </Text>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    alignItems: 'center',
    gap: 58,
  },
  root: {
    flex: 1,
    backgroundColor: color.white,
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: '5%',
    gap: 28,
  },
  checkBox: {
    flexDirection: 'row',
    paddingHorizontal: '2%',
    width: '100%',
    justifyContent: 'space-between',
  },
  orLoginWith: {
    fontSize: 14,
    fontWeight: '500',
    color: color.text.grey,
  },
  forGotPassword: {
    fontSize: 16,
    color: color.primary,
    marginLeft: 6,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    width: 260,
  },
  form: {
    width: '100%',
  },
  hasAccount: {
    fontSize: 16,
    fontWeight: '400',
    color: color.text.light,
    bottom: 30,
  },
  register: {
    fontSize: 16,
    fontWeight: '700',
    color: color.text.dark,
  },
  image: {
    alignSelf: 'center',
    height: 171,
  },
  under: {
    flex: 1,
    height: 1.5,
    backgroundColor: color.text.grey,
    marginHorizontal: '5%',
  },
  imageFGA: {
    borderRadius: 30,
    width: 36,
    height: 36,
  },
});
