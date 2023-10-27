import StatusBar from '@/components/StatusBar';
import { color } from '@/constants/color';
import Alldone from '@/modules/alldone';
import DetailRooms from '@/modules/detailDecors';
import Login from '@/modules/login';
import Register from '@/modules/register';
import Search from '@/modules/search';
import Welcome from '@/modules/welcome';
import { useAuthStore } from '@/redux';
import { FCC } from '@/types';
import { RootStackRoute } from '@/types/navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import BottomTab from '.';
import PostCategory from '@/modules/postCategory';
import Product from '@/modules/catetory';

const AppNavigation: FCC = () => {
  const Stack = createNativeStackNavigator<RootStackRoute>();
  const { isLogin } = useAuthStore(state => state);

  return (
    <NavigationContainer>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor={color.white}
      />
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{
          header: () => null,
          animation: 'fade',
        }}
      >
        {isLogin ? (
          <>
            <Stack.Screen name="home" component={BottomTab} />
            <Stack.Screen name="search" component={Search} />
            <Stack.Screen name="detailRooms" component={DetailRooms} />
            <Stack.Group>
              <Stack.Screen name="category" component={Product} />
              <Stack.Screen name="categoryPost" component={PostCategory} />
            </Stack.Group>
          </>
        ) : (
          <>
            <Stack.Screen
              name="welcome"
              component={Welcome}
              options={{
                animationTypeForReplace: !isLogin ? 'pop' : 'push',
              }}
            />
            <Stack.Screen
              name="login"
              component={Login}
              options={{
                animationTypeForReplace: !isLogin ? 'pop' : 'push',
              }}
            />
            <Stack.Screen
              name="register"
              component={Register}
              options={{
                animationTypeForReplace: !isLogin ? 'pop' : 'push',
              }}
            />
            <Stack.Screen
              name="alldone"
              component={Alldone}
              options={{
                animationTypeForReplace: !isLogin ? 'pop' : 'push',
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
