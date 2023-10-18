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

const Login: FCC<{}> = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [active, setActive] = useState(false);
  const [activePassword, setActivePassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const navigation = useNavigation<NavigationProp<RootStackRoute, 'login'>>();
  const onRegister = () => {
    navigation.navigate('register');
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={require('@/assets/logo.png')}
        alt="Logo Image"
      />
      <View style={styles.form}>
        <TextInput
          label="Email"
          placeholder="Enter your email"
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          active={active}
          // error="Email not found"
          rightIcon={<Entypo name="email" size={18} color={color.primary} />}
        />
      </View>

      <View style={styles.form}>
        <TextInput
          label="Password"
          placeholder="Enter your password"
          secureTextEntry={isPasswordShown}
          onFocus={() => setActivePassword(true)}
          onBlur={() => setActivePassword(false)}
          active={activePassword}
          // error="Email not found"
        />
        <TouchableOpacity
          onPress={() => setIsPasswordShown(!isPasswordShown)}
          style={{
            position: 'absolute',
            right: 27,
            marginTop: 25,
          }}
        >
          {isPasswordShown == true ? (
            <Ionicons name="eye" size={18} color={color.primary} />
          ) : (
            <Ionicons name="eye-off" size={18} color={color.primary} />
          )}
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginVertical: 6,
          marginTop: 18,
        }}
      >
        <Checkbox
          style={{ marginLeft: 8 }}
          value={isChecked}
          onValueChange={setIsChecked}
          color={isChecked ? color.primary : undefined}
        />
        <Text style={{ marginLeft: 5 }}>Remember password</Text>
        <Pressable>
          <Text
            style={{
              fontSize: 16,
              color: color.primary,
              marginLeft: 6,
            }}
          >
            Forgot password?
          </Text>
        </Pressable>
      </View>

      <View style={styles.button}>
        <Button>Login</Button>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: -30,
        }}
      >
        <View style={styles.under} />

        <Text style={{ fontSize: 14, color: color.grey }}>Or Login with</Text>

        <View style={styles.under} />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}
      >
        <TouchableOpacity
          onPress={() => console.log('Pressed')}
          style={styles.imageFGA}
        >
          <Image
            source={require('@/assets/facebookIcon.png')}
            style={styles.imageFGA}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          paddingTop: -50,
        }}
      >
        <Text style={styles.hasAccount}>
          Already have an account?{' '}
        <Text style={styles.register} onPress={onRegister}>
          Register
        </Text>
      </Text>
      </View>
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
  button: {
    width: 260,
  },
  form: {
    paddingHorizontal: 18,
    width: '100%',
    marginBottom: -40,
  },
  hasAccount: {
    fontSize: 16,
    fontWeight: '400',
    color: color.text.light,
    marginBottom: 30
  },
  register: {
    fontSize: 16,
    fontWeight: '700',
    color: color.text.dark,
  },
  image: {
    alignSelf: 'center',
    height: 171,
    top: 30,
  },
  under: {
    flex: 1,
    height: 1,
    backgroundColor: color.grey,
    marginHorizontal: 10,
  },
  imageFGA: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: color.grey,
    borderRadius: 10,
    height: -36,
    width: 36,
    marginTop: -10,
  },
});
