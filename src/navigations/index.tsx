import { color } from '@/constants/color';
import Search from '@/modules/search';
import Splash from '@/modules/splash';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Platform, View, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({}) => ({
        tabBarHideOnKeyboard: true,
        tabBarStyle: styles.tabBarStyle,
        tabBarShowLabel: false,
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="Dashboard"
        component={Splash}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconTop}>
              <Ionicons
                name="home-outline"
                size={30}
                color={focused ? color.primary : color.text.dark}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconTop}>
              <Ionicons
                name="search"
                size={30}
                color={focused ? color.primary : color.text.dark}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Create"
        component={Splash}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.addItem}>
              <Ionicons
                name="add-circle-outline"
                size={50}
                style={{
                  alignSelf: 'flex-end',
                }}
                color={focused ? color.primary : color.text.dark}
              />
            </View>
          ),
          tabBarIconStyle: {},
        }}
      />
      <Tab.Screen
        name="Statistics"
        component={Splash}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconTop}>
              <Ionicons
                name="settings-outline"
                size={30}
                color={focused ? color.primary : color.text.dark}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={Splash}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconTop}>
              <Ionicons
                name="person-outline"
                size={30}
                color={focused ? color.primary : color.text.dark}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTab;

const styles = StyleSheet.create({
  addItem: {
    top: Platform.OS === 'ios' ? -10 : -20,
    width: '100%',
    height: 60,
    padding: 5,
    borderRadius: 30,
    backgroundColor: '#F0F0F3',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  tabBarStyle: {
    display: 'flex',
    position: 'absolute',
    bottom: 20,
    left: 25,
    right: 25,
    elevation: 5,
    backgroundColor: '#F0F0F3',
    borderRadius: 30,
    height: 60,
    shadowColor: color.black,
    shadowOffset: {
      width: 0,
      height: 8,
    },
  },
  iconTop: {
    top: Platform.OS === 'ios' ? 10 : 0,
  },
});
