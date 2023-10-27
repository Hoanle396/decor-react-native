import { color } from '@/constants/color';
import Home from '@/modules/home';
import Profile from '@/modules/profile';
import Search from '@/modules/search';
import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import Animated, {
  FadeInUp,
  FadeOutDown,
  Layout,
} from 'react-native-reanimated';
import { AddPostNavigation, CategoryNavigation } from './Category';

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
      tabBar={props => (
        <Animated.View
          entering={FadeInUp}
          exiting={FadeOutDown}
          layout={Layout.duration(1000)}
        >
          <BottomTabBar {...props} />
        </Animated.View>
      )}
    >
      <Tab.Screen
        name="Dashboard"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconTop}>
              <Feather
                name="home"
                size={30}
                color={focused ? color.black : color.text.light}
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
                color={focused ? color.black : color.text.light}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Create"
        component={AddPostNavigation}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.addItem}>
              <Ionicons
                name="add-circle-outline"
                size={50}
                style={{
                  alignSelf: 'flex-end',
                }}
                color={focused ? color.black : color.text.light}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Statistics"
        component={CategoryNavigation}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconTop}>
              <MaterialIcons
                name="category"
                size={30}
                color={focused ? color.black : color.text.light}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconTop}>
              <MaterialIcons
                name="person-outline"
                size={30}
                color={focused ? color.black : color.text.light}
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
