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

const Profile: FCC<{}> = () => {
  return (
    <>
      <Header leftBtnVariant="back" onPressLeftButton={() => {}} />
      <SafeAreaView style={styles.root}>
        <View style={styles.header}>
          <Text style={styles.name}>Thuy duong</Text>
          <Image
            style={styles.image}
            source={require('@/assets/avatarn.png')}
            alt="avartar"
          />
        </View>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <View style={styles.body}>
            <View style={styles.allAction}>
              <Text>Change Password</Text>
              <AntDesign name="unlock" size={24} color="black" />
            </View>
            <View style={styles.allAction}>
              <Text>Shops around here</Text>
              <EvilIcons name="location" size={24} color="black" />
            </View>
            <View style={styles.allAction}>
              <Text>Payment</Text>
              <MaterialIcons name="payment" size={24} color="black" />
            </View>
            <View style={styles.allAction}>
              <Text>Setting</Text>
              <EvilIcons name="gear" size={24} color="black" />
            </View>
            <View style={styles.allAction}>
              <Text>Logout</Text>
              <MaterialIcons name="logout" size={24} color="black" />
            </View>
            <Button style={styles.button}>logout</Button>
          </View>
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
    gap: 20,
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
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    color: color.text.light,
  },
  body: {
    paddingTop: '10%',
    flex: 1,
    gap: 50,
  },
  allAction: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: color.primary,
    paddingBottom: 10,
  },
  button: {
    width: 232,
    alignSelf: 'center',
  },
});
