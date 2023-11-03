import { color } from '@/constants/color';
import { FCC } from '@/types';
import { AntDesign, EvilIcons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';

import Button from '@/components/Button';
import Header from '@/components/Header/Header';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import * as SecureStore from 'expo-secure-store';
import { useAuthStore } from '@/redux';
import { useNavigation } from '@react-navigation/native';

const Profile: FCC<{}> = () => {
  const { updateFullName, updateIsLogin, fullname } = useAuthStore();

  const navigation = useNavigation();
  const onLogout = async () => {
    await SecureStore.deleteItemAsync('access_token');
    await SecureStore.deleteItemAsync('refresh_token');
    updateFullName('');
    updateIsLogin(false);
  };

  const onBack = () => {
    navigation.canGoBack() && navigation.goBack();
  };
  return (
    <>
      <Header leftBtnVariant="back" onPressLeftButton={onBack} />
      <SafeAreaView style={styles.root}>
        <ScrollView
          style={[{ flex: 1 }, styles.root]}
          showsVerticalScrollIndicator={false}
        >
          <View style={[styles.header]}>
            <Text style={styles.name}>{fullname}</Text>
            <Image
              style={styles.image}
              source={{
                uri: 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png',
              }}
              alt="avartar"
            />
          </View>
          <View style={styles.body}>
            <View style={styles.allAction}>
              <Text style={styles.itemText}>Change Password</Text>
              <AntDesign name="unlock" size={24} color={color.text.grey} />
            </View>
            <View style={styles.allAction}>
              <Text style={styles.itemText}>Shops around here</Text>
              <EvilIcons name="location" size={24} color={color.text.grey} />
            </View>
            <View style={styles.allAction}>
              <Text style={styles.itemText}>Payment</Text>
              <MaterialIcons name="payment" size={24} color={color.text.grey} />
            </View>
            <View style={styles.allAction}>
              <Text style={styles.itemText}>Setting</Text>
              <EvilIcons name="gear" size={24} color={color.text.grey} />
            </View>
            <Button style={styles.button} onPress={onLogout}>
              logout
            </Button>
          </View>
          <View style={{ height: 120 }} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  root: {
    backgroundColor: color.white,
    flex: 1,
    paddingHorizontal: '7%',
  },
  header: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    backgroundColor: color.text.grey,
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: '7%',
    alignItems: 'baseline',
    borderRadius: 30,
  },
  image: {
    height: 90,
    width: 90,
    borderRadius: 45,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    color: color.text.light,
  },
  body: {
    paddingTop: '15%',
    flex: 1,
    gap: 36,
  },
  itemText: {
    fontWeight: '500',
    fontSize: 16,
    color: color.text.grey,
  },
  allAction: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1.5,
    borderBottomColor: color.primary,
    paddingBottom: 10,
  },
  button: {
    width: 232,
    alignSelf: 'center',
  },
});
