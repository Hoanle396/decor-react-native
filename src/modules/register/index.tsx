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
      <View style={styles.root}>
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
            rightIcon={
              <TouchableOpacity
                onPress={() => setIsPasswordShown(!isPasswordShown)}
              >
                {isPasswordShown ? (
                  <Ionicons name="eye" size={18} color={color.primary} />
                ) : (
                  <Ionicons name="eye-off" size={18} color={color.primary} />
                )}
              </TouchableOpacity>
            }
          />
        </View>
        <View style={styles.form}>
          <TextInput
            label="Confirm Password"
            placeholder="Enter your password"
            secureTextEntry={isConfirmPasswordShown}
            onFocus={() => setActiveConfirmPassword(true)}
            onBlur={() => setActiveConfirmPassword(false)}
            active={activeConfirmPassword}
            rightIcon={
              <TouchableOpacity
                onPress={() =>
                  setIsConfirmPasswordShown(!isConfirmPasswordShown)
                }
              >
                {isConfirmPasswordShown ? (
                  <Ionicons name="eye" size={18} color={color.primary} />
                ) : (
                  <Ionicons name="eye-off" size={18} color={color.primary} />
                )}
              </TouchableOpacity>
            }
          />
        </View>
        <Button style={styles.button}>Register</Button>
        <View style={styles.flexRow}>
          <View style={styles.under} />
          <Text style={styles.orRegisterWith}>Or Register with</Text>
          <View style={styles.under} />
        </View>
        <View style={[styles.flexRow, { gap: 20 }]}>
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
          <TouchableOpacity
            onPress={() => console.log('Pressed')}
            style={styles.imageFGA}
          >
            <Image
              source={require('@/assets/googleIcon.png')}
              style={styles.imageFGA}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log('Pressed')}
            style={styles.imageFGA}
          >
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
        <Text style={styles.register} onPress={onLogin}>
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
  orRegisterWith: {
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
