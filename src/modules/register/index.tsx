import TextInput from '@/components/TextField/TextInput';
import { color } from '@/constants/color';
import { FCC } from '@/types';
import { Entypo } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import Button from '@/components/Button';
import { RootStackRoute } from '@/types/navigation';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

const Register: FCC<{}> = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isConfirmPasswordShown, setIsConfirmPasswordShown] = useState(false);
  const [active, setActive] = useState(false);
  const [activePassword, setActivePassword] = useState(false);
  const [activeConfirmPassword, setActiveConfirmPassword] = useState(false);
  const navigation =
    useNavigation<NavigationProp<RootStackRoute, 'register'>>();
  const onLogin = () => {
    navigation.navigate('login');
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

      <View style={styles.form}>
        <TextInput
          label="Confirm password"
          placeholder="Enter your password"
          secureTextEntry={!isConfirmPasswordShown}
          onFocus={() => setActiveConfirmPassword(true)}
          onBlur={() => setActiveConfirmPassword(false)}
          active={activeConfirmPassword}
          // error="Email not found"
        />
        <TouchableOpacity
          onPress={() => setIsConfirmPasswordShown(!isConfirmPasswordShown)}
          style={{
            position: 'absolute',
            right: 27,
            marginTop: 25,
          }}
        >
          {isConfirmPasswordShown == true ? (
            <Ionicons name="eye" size={18} color={color.primary} />
          ) : (
            <Ionicons name="eye-off" size={18} color={color.primary} />
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.button}>
        <Button>Register</Button>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: -30,
        }}
      >
        <View style={styles.under} />

        <Text style={{ fontSize: 14, color: color.grey }}>
          Or Register with
        </Text>

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

      <Text style={styles.hasAccount}>
        Already have an account?{' '}
        <Text style={styles.login} onPress={onLogin}>
          Login
        </Text>
      </Text>
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
    width: 260,
  },
  hasAccount: {
    fontSize: 16,
    fontWeight: '400',
    color: color.text.light,
    marginBottom: 30,
  },
  login: {
    fontSize: 16,
    fontWeight: '700',
    color: color.text.dark,
  },
  form: {
    paddingHorizontal: 18,
    width: '100%',
    marginBottom: -40,
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
